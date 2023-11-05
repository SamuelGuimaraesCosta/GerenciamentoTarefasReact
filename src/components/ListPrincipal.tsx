import { useState, useEffect } from 'react';
import { TaskButton, TaskItem, TaskList, TaskText, Title } from '../styled-components/List';

const ListPrincipal = () => {
  const [tasks] = useState([
    { id: 1, text: 'Tarefa 1', completed: false },
    { id: 2, text: 'Tarefa 2', completed: false },
    { id: 3, text: 'Tarefa 3', completed: true },
    { id: 4, text: 'Tarefa 4', completed: false },
    { id: 5, text: 'Tarefa 5', completed: false },
    { id: 6, text: 'Tarefa 6', completed: true },
    { id: 7, text: 'Tarefa 7', completed: false },
    { id: 8, text: 'Tarefa 8', completed: false },
    { id: 9, text: 'Tarefa 9', completed: true },
    { id: 10, text: 'Tarefa 10', completed: false },
    { id: 11, text: 'Tarefa 11', completed: false },
    { id: 12, text: 'Tarefa 12', completed: true },
    { id: 13, text: 'Tarefa 13', completed: false },
    { id: 14, text: 'Tarefa 14', completed: false },
    { id: 15, text: 'Tarefa 15', completed: true },
  ]);

  return (
    <div style={{ justifyContent: "center" }}>

      <TaskList>
        <Title>Lista de Tarefas</Title>
        {tasks.map((task) => (
          <TaskItem key={task.id} $completed={task.completed}>
            <TaskText>{task.text}</TaskText>
            <TaskButton>Concluir</TaskButton>
          </TaskItem>
        ))}
      </TaskList>
    </div>
  );
};

export default ListPrincipal;