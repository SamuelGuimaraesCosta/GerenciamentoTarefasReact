import React, { useEffect, useState } from 'react';
import HeaderPrincipal from '../components/HeaderPrincipal';
import ListPrincipal from '../components/ListPrincipal';
import axios from 'axios';
import Alert from '../components/AlertMessage';

function HomePage() {
  const [taskCount, setTaskCount] = useState(0);

  const [error, setError] = useState<string | null>(null);

  const updateTaskCount = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks?completed=false');
      setTaskCount(response.data.length);
    } catch (error: any) {
      setError(`Erro ao carregar Contador de Tarefas Pendentes: ${error.message}`);
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
        {error && <Alert message={error} $visible={error !== null ? true : false} color="#f44336" />}
        <ListPrincipal updateTaskCount={updateTaskCount} />
      </div>
    </div>
  );
}

export default HomePage;