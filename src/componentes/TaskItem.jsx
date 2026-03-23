import styles from './TaskItem.module.css'

function TaskItem({ tarefa, onViewDetails }) {
  const { titulo, categoria, prioridade, status, descricao } = tarefa

  const isAltaPrioridade = prioridade === 'Alta'
  const isUrgente = prioridade === 'Alta' && status === 'Pendente'

  const cardClass = isAltaPrioridade
    ? `${styles.card} ${styles.altaPrioridade}`
    : styles.card

  return (
    <div className={cardClass}>
      <div className={styles.header}>
        <h3 className={styles.titulo}>
          {titulo}
          {isUrgente && (
            <span className={styles.urgente}> ⚠️ URGENTE!</span>
          )}
        </h3>
      </div>

      <div className={styles.info}>
        <span className={styles.campo}>
          <strong>Categoria:</strong> {categoria}
        </span>
        <span className={styles.campo}>
          <strong>Prioridade:</strong> {prioridade}
        </span>
        <span className={styles.campo}>
          <strong>Status:</strong> {status}
        </span>
      </div>

      <button
        className={styles.botao}
        onClick={() => onViewDetails(descricao)}
      >
        Ver Detalhes
      </button>
    </div>
  )
}

export default TaskItem
