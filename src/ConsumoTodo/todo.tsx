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
    const [newTaskTitle, setNewTaskTitle] = useState<string>("")

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input type="text" />
            <button>Adicionar Tarefa</button>
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