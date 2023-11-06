import { useEffect, useState } from 'react'; // Importa os hooks de efeito e estado do React
import { Checkbox, TaskItem, TaskList, Title, TaskTitle, TaskDate, EditButton, EditIcon, DeleteButton, DeleteIcon } from '../styled-components/List'; // Importa componentes estilizados
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Importa ícones do FontAwesome
import axios from 'axios'; // Importa a biblioteca Axios para fazer solicitações HTTP
import Alert from './AlertMessage'; // Importa o componente Alert para mensagens de erro/sucesso
import ModalEdit from './ModalEdit'; // Importa o componente ModalEdit para edição de tarefas

const ListPrincipal = ({ updateTaskCount, loadAllData, tasks }: any) => {
  const [error, setError] = useState<string | null>(null); // Estado para armazenar mensagens de erro

  const [success, setSuccess] = useState<string | null>(null); // Estado para armazenar mensagens de sucesso

  const [updatedTasks, setUpdatedTasks] = useState<Array<any>>([]); // Estado para armazenar as tarefas atualizadas

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal

  const [selectedTask, setSelectedTask] = useState<any | null>(null); // Estado para armazenar a tarefa selecionada

  // Função para buscar tarefas do servidor
  const fetchTasksFromServer = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks');
      
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Efeito que carrega as tarefas do servidor quando a lista de tarefas muda
  useEffect(() => {
    fetchTasksFromServer().then((data) => {
      setUpdatedTasks(data);
    }).catch((error: any) => {
      setError(`Erro ao carregar Tarefas: ${error.message}`);
    });
  }, [tasks]);

  // Função para formatar a data e hora no formato desejado
  const formatDateTime = (dateTimeString: string) => {
    const timeZone = 'America/Sao_Paulo';
    const zonedDate = new Date(dateTimeString);
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const dayOfWeek = daysOfWeek[zonedDate.getDay()];
    const formattedDate = `${dayOfWeek}. ${zonedDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: timeZone })}`;

    return formattedDate;
  };

  // Função para lidar com a mudança do estado de uma tarefa (concluída ou não)
  const handleCheckboxChange = (taskId: number) => {
    tasks = updatedTasks;
    tasks.map((task: any) => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };
        const actualDate = new Date();
        const year = actualDate.getFullYear();
        const month = String(actualDate.getMonth() + 1).padStart(2, '0');
        const day = String(actualDate.getDate()).padStart(2, '0');
        const hours = String(actualDate.getHours()).padStart(2, '0');
        const minutes = String(actualDate.getMinutes()).padStart(2, '0');

        updatedTask.lastModifiedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

        axios.put(`http://localhost:3001/tasks/${taskId}`, updatedTask).then(() => {
          setTimeout(() => {
            loadAllData().then((result: any) => {
              setUpdatedTasks(result);

              updateTaskCount();

              if (updatedTask.completed) {
                setSuccess('Parabéns! Sua tarefa foi concluída com sucesso!');

                setTimeout(() => {
                  setSuccess(null);
                }, 1000);
              }
            });
          }, 100);
        }).catch((error: any) => {
          setError(`Erro ao carregar Tarefas: ${error.message}`);
        });

        return updatedTask;
      }
      return task;
    });

    return;
  };

  // Função para abrir o modal de edição de tarefa
  const openModal = (task: any) => {
    setSelectedTask(task);

    setIsModalOpen(true);
  };

  // Função para lidar com o envio de dados do modal de edição
  const getSubmit = (data: any) => {
    if (data.description != null) {
      const actualDate = new Date();
      const year = actualDate.getFullYear();
      const month = String(actualDate.getMonth() + 1).padStart(2, '0');
      const day = String(actualDate.getDate()).padStart(2, '0');
      const hours = String(actualDate.getHours()).padStart(2, '0');
      const minutes = String(actualDate.getMinutes()).padStart(2, '0');

      let taskData = {
        description: data.description,
        completed: false,
        creationDate: selectedTask.creationDate,
        lastModifiedDate: `${year}-${month}-${day} ${hours}:${minutes}`
      }

      updateTask(selectedTask.id, taskData);
    }
  }

  // Função para atualizar uma tarefa no servidor
  const updateTask = async (taskId: number, updatedTaskData: any) => {
    try {
      const response = await axios.put(`http://localhost:3001/tasks/${taskId}`, updatedTaskData);

      loadAllData().then((result: any) => {
        setUpdatedTasks(result);

        updateTaskCount();

        setSuccess('Sua tarefa foi editada com sucesso!');

        setTimeout(() => {
          setSuccess(null);
        }, 1000);
      });

      return response.data;
    } catch (error: any) {
      setError(`Erro ao editar Tarefa: ${error.message}`);

      throw error;
    }
  };

  // Função para lidar com a exclusão de uma tarefa
  const handleDelete = (taskId: number) => {
    if (window.confirm("Tem certeza de que deseja excluir esta tarefa?")) {
      axios.delete(`http://localhost:3001/tasks/${taskId}`).then(() => {
        loadAllData().then((result: any) => {
          setUpdatedTasks(result);

          updateTaskCount();

          setSuccess('Tarefa excluída com sucesso!');

          setTimeout(() => {
            setSuccess(null);
          }, 1000);
        });
      }).catch((error: any) => {
        setError(`Erro ao excluir Tarefa: ${error.message}`);
      });
    }
  };

  return (
    <div>
      {error && <Alert message={error} $visible={error !== null ? true : false} color="#f44336" />}

      {success && <Alert message={success} $visible={success !== null ? true : false} color="#007f00" />}

      <TaskList>
        <Title>Lista de Tarefas</Title>
        {updatedTasks.sort((a: any, b: any) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)).map((task: any) => (
          <TaskItem key={task.id} $completed={task.completed}>
            <Checkbox type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(task.id)} />
            <TaskTitle $completed={task.completed}>{task.description}</TaskTitle>
            <div>
              <TaskDate>Criada em: {formatDateTime(task.creationDate)}</TaskDate>
              <TaskDate>Última modificação em: {formatDateTime(task.lastModifiedDate)}</TaskDate>
            </div>
            <div>
              <EditButton onClick={() => openModal(task)}>
                <EditIcon icon={faEdit} />
              </EditButton>
              <DeleteButton onClick={() => handleDelete(task.id)}>
                <DeleteIcon icon={faTrashAlt} />
              </DeleteButton>
            </div>
          </TaskItem>
        ))}
      </TaskList>

      {isModalOpen && (
        <ModalEdit isOpen={isModalOpen} onClose={() => { setSelectedTask(null); setIsModalOpen(false); }} title="Editar Tarefa" submit={getSubmit} task={selectedTask}>
        </ModalEdit>
      )}
    </div>
  );
};

// Exporta o componente ListPrincipal para uso em outras partes da aplicação
export default ListPrincipal;