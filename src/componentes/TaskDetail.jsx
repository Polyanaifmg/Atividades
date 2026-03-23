function TaskDetail({ descricao, onFechar }) {
  return (
    <div style={{
      backgroundColor: '#1a1a2e',
      color: '#fff',
      borderRadius: '10px',
      padding: '1.5rem',
      marginTop: '1rem',
    }}>
      <h3 style={{ marginBottom: '0.8rem', fontSize: '1rem', opacity: 0.7 }}>
        📄 Detalhes da Tarefa
      </h3>
      <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{descricao}</p>
      <button
        onClick={onFechar}
        style={{
          marginTop: '1rem',
          padding: '0.4rem 1rem',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.4)',
          color: '#fff',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Fechar
      </button>
    </div>
  )
}

export default TaskDetail
