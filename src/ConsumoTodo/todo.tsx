import { useState } from "react";
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
            setTasks([...tasks, response.data])
        }catch(error) {
            console.log("Erro", error)
        }
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text" 
                value={newTaskTitle}
                onChange={e => setNewTaskTitle(e.target.value)}
            />
            <button onClick={}>Adicionar Tarefa</button>
            <ul>
                {tasks.map(task =>(
                     <li key={task.id}>
                     <h2>{task.title}</h2>
                     <p>{task.completed}</p>
                     <p>Usuários: {task.userId}</p>
                 </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDo;