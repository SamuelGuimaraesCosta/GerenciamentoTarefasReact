import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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
  justify-content: space-between;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > * {
      margin-bottom: 10px;
    }
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
  flex: 1;
  margin: 0;
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    max-width: 80%; /* Define um limite para o texto */
  }
`;

const TaskDate = styled.p`
  font-size: 0.8rem;
  margin: 5px 0;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const EditIcon = styled(FontAwesomeIcon).attrs({
  icon: faEdit,
})`
  font-size: 1.5rem;
  vertical-align: middle;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: red;
`;

const DeleteIcon = styled(FontAwesomeIcon).attrs({
  icon: faTrashAlt,
})`
  font-size: 1.5rem;
  vertical-align: middle;
`;

export { TaskList, TaskItem, Title, Checkbox, TaskTitle, TaskDate, EditButton, EditIcon, DeleteButton, DeleteIcon };