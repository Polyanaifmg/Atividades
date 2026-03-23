import TaskItem from './TaskItem'

function TaskList({ tarefas, onViewDetails }) {
  return (
    <div>
      <h2 style={{ marginBottom: '1rem', color: '#1a1a2e' }}>
        Lista de Tarefas ({tarefas.length})
      </h2>
      {tarefas.map((tarefa) => (
        <TaskItem
          key={tarefa.id}
          tarefa={tarefa}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}

export default TaskList
