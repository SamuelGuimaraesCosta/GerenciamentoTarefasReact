import { Header, HeaderContent, HeaderTitle, Logo, Navbar, TaskCounter, NewTaskButton } from '../styled-components/Header';
import { useState, useEffect } from 'react';

interface HeaderPrincipalProps {
  taskCount: number;
}

const HeaderPrincipal: React.FC<HeaderPrincipalProps> = ({ taskCount }) => {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#469AF8');

  useEffect(() => {
    if (taskCount >= 1 && taskCount <= 3) {
      setHeaderBackgroundColor('#AFE1AF');
    } else if (taskCount >= 10) {
      setHeaderBackgroundColor('#C70039');
    } else {
      setHeaderBackgroundColor('#469AF8');
    }
  }, [taskCount]);

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
          <NewTaskButton>Nova Tarefa</NewTaskButton>
        </Navbar>
      </Header>
    </div>
  );
};

export default HeaderPrincipal;