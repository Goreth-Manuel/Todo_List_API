import { useEffect, useState } from "react";
import axios from "axios";
import { Task } from "../model/types";

const useToDoViewModel = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");

    const FetchTasks = async() => {
        try {
            const response = await axios.get<Task[]>("https://jsonplaceholder.typicode.com/todos")
            setTasks(response.data)
        }catch(error) {
            console.log("Erro", error)
        }
    }

    const AddTasks = async() => {
        try {
            const response = await axios.post<Task>("https://jsonplaceholder.typicode.com/todos", {
                title: newTaskTitle,
                completed: false,
            })
            setTasks([...tasks, response.data]);
            setNewTaskTitle(" ");
        }catch(error) {
            console.log("Erro", error)
        }
    }

    const updateTasks = async(id: number) => {
        try {
            const updateTask = tasks.map(task =>
                task.id === id ? {...task, completed :!task.completed} : task
            );
            setTasks(updateTask)
            await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                completed: updateTask.find(task => task.id === id)?.completed,
            });
        }catch(error) {
            console.log("Erro", error)
        }
    }
    
    useEffect(() => {
        FetchTasks()
    }, [])

    return {
        tasks,
        newTaskTitle,
        setNewTaskTitle,
        AddTasks,
        updateTasks,

    }
  
}
export default useToDoViewModel;