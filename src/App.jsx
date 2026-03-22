import { useState } from "react";
import TaskList from "./componentes/TaskList";

export default function App() {
  const lista_items = [
    {
      id: 1,
      titulo: "arrumar a casa",
      categoria: "pessoal",
      prioridade: "alta",
      status: "concluido",
      descricao: "pronto",
    },
    {
      id: 2,
      titulo: "plantar flores",
      categoria: "terapia",
      prioridade: "media",
      status: "concluido",
      descricao: "pronto",
    },

    {
      id: 3,
      titulo: "pitaia",
      categoria: "colheta",
      prioridade: "alta",
      status: "pendente",
      descricao: "pronto",
    },
  ];

  return (
  <div>
    <TaskList tarefas={lista_items}/>
  </div>
  )
}
