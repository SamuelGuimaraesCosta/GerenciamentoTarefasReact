import styled from 'styled-components';

interface TaskItemProps {
  $completed: Boolean;
}

const TaskList = styled.ul`
  list-style: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  max-width: 60%;
  margin: 100px auto 20px;
  justify-content: center;
  border: 1px solid #ccc;
  overflow-y: auto;
  max-height: 60vh;

  @media (max-width: 768px) {
    margin: 100px auto 20px;
    max-width: 85%;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0074e4;
    border-radius: 5px;
  }
`;

const TaskItem = styled.li<TaskItemProps>`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;

  /* Adicione estilos adicionais para os itens da lista aqui */

  /* Exemplo de estilo para riscar a tarefa concluída */
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
`;

const TaskText = styled.span`
  flex: 1;
`;

const TaskButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  /* Adicione estilos adicionais para o botão aqui */
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  padding-bottom: 10px;
`;

export { TaskList, TaskItem, TaskText, TaskButton, Title };