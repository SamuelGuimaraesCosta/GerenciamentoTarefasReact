import React, { useEffect, useState } from 'react'; // Importa a biblioteca React e hooks (useEffect, useState)
import HeaderPrincipal from '../components/HeaderPrincipal'; // Importa o componente de cabeçalho principal
import ListPrincipal from '../components/ListPrincipal'; // Importa o componente de lista principal
import axios from 'axios'; // Importa a biblioteca Axios para fazer solicitações HTTP
import Alert from '../components/AlertMessage'; // Importa o componente de mensagem de alerta

function HomePage() {
  const [taskCount, setTaskCount] = useState(0);  // Declara um estado para armazenar o contador de tarefas

  const [error, setError] = useState<string | null>(null); // Declara um estado para armazenar mensagens de erro

  // Função assíncrona para atualizar o contador de tarefas pendentes
  const updateTaskCount = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks?completed=false');
      
      setTaskCount(response.data.length);
    } catch (error: any) {
      setError(`Erro ao carregar Contador de Tarefas Pendentes: ${error.message}`);
    }
  };

  // Função assíncrona para buscar tarefas do servidor
  const fetchTasksFromServer = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks');

      return response.data;
    } catch (error: any) {
      setError(`Erro ao carregar Tarefas: ${error.message}`);
    }
  };

  // Função para buscar dados das tarefas do servidor
  const getData = () => {
    fetchTasksFromServer().then((result: any) => {
      updateTaskCount();

      return result;
    });
  }

  // Efeito que é executado uma vez (apenas no carregamento inicial)
  useEffect(() => {
    updateTaskCount();
  }, []);

  return (
    <div>
      <div>
        <HeaderPrincipal taskCount={taskCount} loadAllData={getData} />
      </div>
      <div>
        {error && <Alert message={error} $visible={error !== null ? true : false} color="#f44336" />}
        <ListPrincipal updateTaskCount={updateTaskCount} loadAllData={fetchTasksFromServer} tasks={getData} />
      </div>
    </div>
  );
}

// Exporta o componente HomePage como o componente principal da página
export default HomePage;