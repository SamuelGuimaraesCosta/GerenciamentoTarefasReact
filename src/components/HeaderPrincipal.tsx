import { Header, HeaderContent, HeaderTitle, Logo, Navbar, TaskCounter, NewTaskButton } from '../styled-components/Header'; // Importa componentes estilizados do cabeçalho
import { useState, useEffect } from 'react'; // Importa o hook de estado e de efeito do React
import ModalCreate from './ModalCreate'; // Importa o componente ModalCreate
import axios from 'axios'; // Importa a biblioteca Axios para fazer solicitações HTTP
import Alert from './AlertMessage';

// Define as propriedades que o componente HeaderPrincipal pode receber
interface HeaderPrincipalProps {
  taskCount: number;
  loadAllData: () => void;
}

const HeaderPrincipal: React.FC<HeaderPrincipalProps> = ({ taskCount, loadAllData }) => {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#469AF8'); // Estado para a cor de fundo do cabeçalho

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar se o modal está aberto

  const [error, setError] = useState<string | null>(null);

  const [success, setSuccess] = useState<string | null>(null);

  // Efeito que é executado quando a 'taskCount' muda
  useEffect(() => {
    if (taskCount >= 0 && taskCount <= 3) {
      setHeaderBackgroundColor('#AFE1AF'); // Atualiza a cor de fundo para verde quando há 3 ou menos tarefas pendentes
    } else if (taskCount >= 10) {
      setHeaderBackgroundColor('#C70039'); // Atualiza a cor de fundo para vermelho quando há 10 ou mais tarefas pendentes
    } else {
      setHeaderBackgroundColor('#469AF8'); // Mantém a cor de fundo azul padrão
    }
  }, [taskCount]);

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para criar uma nova tarefa
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

  // Função para criar uma nova tarefa no servidor
  const createTask = async (taskData: any) => {
    try {
      const response = await axios.post('http://localhost:3001/tasks', taskData);

      loadAllData();

      setSuccess('Parabéns! Sua tarefa foi criada com sucesso!');

      setTimeout(() => {
        setSuccess(null);
      }, 1000);

      return response.data;
    } catch (error: any) {
      setError(`Erro ao criar Tarefa: ${error.message}`);

      throw error;
    }
  };

  return (
    <div>
      {error && <Alert message={error} $visible={error !== null ? true : false} color="#f44336" />}

      {success && <Alert message={success} $visible={success !== null ? true : false} color="#007f00" />}

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

// Exporta o componente HeaderPrincipal para uso em outras partes da aplicação
export default HeaderPrincipal;