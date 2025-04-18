import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const ToDo = () => {
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

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text" 
                value={newTaskTitle}
                onChange={e => setNewTaskTitle(e.target.value)}
            />
            <button onClick={AddTasks}>Adicionar Tarefa</button>
            <ul>
                {tasks.map(task =>(
                     <li key={task.id}
                     style={{textDecorationLine: task.completed ? 'line-through' : 'none'}}
                     onClick={() => updateTasks(task.id)}
                     >
                     <h2>{task.title}</h2>
                 </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDo;