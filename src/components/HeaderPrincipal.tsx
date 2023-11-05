import { Header, HeaderContent, HeaderTitle, Logo, Navbar, TaskCounter, NewTaskButton } from '../styled-components/Header';
import { useState, useEffect } from 'react';

const HeaderPrincipal = () => {
  const [taskCount, setTaskCount] = useState(0);
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('blue');

  const addTask = () => {
    setTaskCount(taskCount + 1);
  };

  useEffect(() => {
    if (taskCount >= 1 && taskCount <= 3) {
      setHeaderBackgroundColor('green');
    } else if (taskCount >= 10) {
      setHeaderBackgroundColor('red');
    } else {
      setHeaderBackgroundColor('blue');
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
          <NewTaskButton onClick={addTask}>Nova Tarefa</NewTaskButton>
        </Navbar>
      </Header>
    </div>
  );
};

export default HeaderPrincipal;