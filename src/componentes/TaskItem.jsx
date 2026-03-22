import styles from "./TaskItem.module.css";

function TaskItem ({tarefa}){
    return(
        <div className={tarefa.prioridade === "alta" ? styles.alta : ""}>
            <h3>{tarefa.titulo} {tarefa.prioridade === "alta" && tarefa.status === "pendente" && (
                <strong>URGENTE!!</strong>
            )}</h3>
            <p>categoria: {tarefa.categoria}</p>
            <p>prioridade: {tarefa.prioridade}</p>
            <p>status: {tarefa.status}</p>

            
        </div>
    )
}
export default TaskItem;