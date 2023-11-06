import { Header, HeaderContent, HeaderTitle, Logo, Navbar, TaskCounter, NewTaskButton } from '../styled-components/Header';
import { useState, useEffect } from 'react';
import ModalCreate from './ModalCreate';

interface HeaderPrincipalProps {
  taskCount: number;
}

const HeaderPrincipal: React.FC<HeaderPrincipalProps> = ({ taskCount }) => {
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
    console.log(data);
  }

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