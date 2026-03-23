import { useState } from 'react'
import TaskList from './componentes/TaskList'
import TaskDetail from './componentes/TaskDetail'
import './App.css'

const tarefas = [
  {
    id: 1,
    titulo: 'Estudar React',
    categoria: 'Estudo',
    prioridade: 'Alta',
    status: 'Pendente',
    descricao: 'Revisar os hooks useState e useEffect e praticar com exemplos.',
  },
  {
    id: 2,
    titulo: 'Fazer compras',
    categoria: 'Pessoal',
    prioridade: 'Média',
    status: 'Pendente',
    descricao: 'Comprar frutas, legumes e itens de limpeza no mercado.',
  },
  {
    id: 3,
    titulo: 'Entregar relatório',
    categoria: 'Trabalho',
    prioridade: 'Alta',
    status: 'Pendente',
    descricao: 'Finalizar e enviar o relatório mensal para o supervisor.',
  },
  {
    id: 4,
    titulo: 'Ler livro de JS',
    categoria: 'Estudo',
    prioridade: 'Baixa',
    status: 'Concluído',
    descricao: 'Terminar a leitura do capítulo sobre closures e prototypes.',
  },
  {
    id: 5,
    titulo: 'Reunião de equipe',
    categoria: 'Trabalho',
    prioridade: 'Média',
    status: 'Concluído',
    descricao: 'Participar da reunião semanal de alinhamento da equipe.',
  },
]

function App() {
  const [detalhesSelecionados, setDetalhesSelecionados] = useState(null)

  function handleViewDetails(descricao) {
    console.log('Detalhes da tarefa:', descricao)
    setDetalhesSelecionados(descricao)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📋 Dashboard de Tarefas</h1>
        <p>Gerencie suas atividades pessoais e profissionais</p>
      </header>

      <main className="app-main">
        <TaskList tarefas={tarefas} onViewDetails={handleViewDetails} />
        {detalhesSelecionados && (
          <TaskDetail
            descricao={detalhesSelecionados}
            onFechar={() => setDetalhesSelecionados(null)}
          />
        )}
      </main>
    </div>
  )
}

export default App
