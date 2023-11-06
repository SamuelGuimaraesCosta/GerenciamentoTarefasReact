import { Header, HeaderContent, HeaderTitle, Logo, Navbar, TaskCounter, NewTaskButton } from '../styled-components/Header';
import { useState, useEffect } from 'react';
import ModalCreate from './ModalCreate';
import axios from 'axios';

interface HeaderPrincipalProps {
  taskCount: number;
  loadAllData: () => void;
}

const HeaderPrincipal: React.FC<HeaderPrincipalProps> = ({ taskCount, loadAllData }) => {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#469AF8');

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (taskCount >= 1 && taskCount <= 3) {
      setHeaderBackgroundColor('#AFE1AF');
    } else if (taskCount >= 10) {
      setHeaderBackgroundColor('#C70039');
    } else {
      setHeaderBackgroundColor('#469AF8');
    }
  }, [taskCount]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getSubmit = (data: any) => {
    if (data.description != null) {
      const actualDate = new Date();
      const year = actualDate.getFullYear();
      const month = String(actualDate.getMonth() + 1).padStart(2, '0');
      const day = String(actualDate.getDate()).padStart(2, '0');
      const hours = String(actualDate.getHours()).padStart(2, '0');
      const minutes = String(actualDate.getMinutes()).padStart(2, '0');

      let task = {
        description: data.description,
        completed: false,
        creationDate: `${year}-${month}-${day} ${hours}:${minutes}`,
        lastModifiedDate: `${year}-${month}-${day} ${hours}:${minutes}`
      }

      createTask(task);
    }
  }

  const createTask = async (taskData: any) => {
    try {
      const response = await axios.post('http://localhost:3001/tasks', taskData);

    loadAllData();

      return response.data;
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      throw error;
    }
  };

  return (
    <div>
      <Header $bgcolor={headerBackgroundColor}>
        <HeaderContent>
          <Logo src='task-logo.png'></Logo>
          <HeaderTitle>
            Gerenciamento de Tarefas
          </HeaderTitle>
        </HeaderContent>
        <Navbar>
          <TaskCounter $bgcolor={headerBackgroundColor}>Tarefas Pendentes: {taskCount}</TaskCounter>
          <NewTaskButton onClick={openModal}>Nova Tarefa</NewTaskButton>
        </Navbar>
      </Header>

      {isModalOpen && (
        <ModalCreate isOpen={isModalOpen} onClose={closeModal} title="Criar Nova Tarefa" submit={getSubmit}>
        </ModalCreate>
      )}
    </div>
  );
};

export default HeaderPrincipal;