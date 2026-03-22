import TaskItem from "./TaskItem"

function TaskList ({tarefas}) {
    return (
        <div>
            {tarefas.map((tarefa) => (
                <TaskItem key={tarefa.id} tarefa={tarefa}/>
            ))}
        </div>
    )
}

export default TaskList;