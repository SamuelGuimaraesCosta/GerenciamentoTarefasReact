import React, { useEffect, useState } from 'react';
import HeaderPrincipal from '../components/HeaderPrincipal';
import ListPrincipal from '../components/ListPrincipal';
import axios from 'axios';

function HomePage() {
  const [taskCount, setTaskCount] = useState(0);

  const updateTaskCount = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks?completed=false');
      setTaskCount(response.data.length);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    updateTaskCount();
  }, []);
  
  return (
    <div>
      <div>
        <HeaderPrincipal taskCount={taskCount} />
      </div>
      <div>
        <ListPrincipal updateTaskCount={updateTaskCount} />
      </div>
    </div>
  );
}

export default HomePage;