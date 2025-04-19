import useToDoViewModel from "../viewModel/useToDoViewModel";

const ToDoView = () => {
    const {tasks, newTaskTitle, setNewTaskTitle, AddTasks, updateTasks} = useToDoViewModel()
 
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text" 
                placeholder="Digite uma tarefa"
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
export default ToDoView;