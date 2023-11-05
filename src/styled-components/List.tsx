import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  max-width: 70%;
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
    background-color: #CCC;
    border-radius: 5px;
  }
`;

const TaskItem = styled.li<TaskItemProps>`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #ddd;
  padding: 10px;
  font-weight: bold;

  background-color: ${(props) => (props.$completed ? '#AFE1AF' : 'transparent')};

  &:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  padding-bottom: 10px;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background-color: #469AF8;
  border: 2px solid #007BFF;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TaskTitle = styled.h3<TaskItemProps>`
  flex: 0.6;
  margin: 0;
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
`;

const TaskDate = styled.p`
  font-size: 0.8rem;
  margin: 5px 0;
`;

const EditButton = styled.button`
  align: right;
  padding-left: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const EditIcon = styled(FontAwesomeIcon).attrs({
  icon: faEdit,
})`
  color: #000; /* Cor desejada para o ícone */
  font-size: 16px; /* Tamanho desejado para o ícone */
`;

export { TaskList, TaskItem, Title, Checkbox, TaskTitle, TaskDate, EditButton, EditIcon };