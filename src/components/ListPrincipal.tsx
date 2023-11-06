import { useEffect, useState } from 'react';
import { Checkbox, TaskItem, TaskList, Title, TaskTitle, TaskDate, EditButton, EditIcon } from '../styled-components/List';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Alert from './AlertMessage';

const ListPrincipal = ({ updateTaskCount, loadAllData, tasks }: any) => {
  const [error, setError] = useState<string | null>(null);

  const [success, setSuccess] = useState<string | null>(null);

  const [updatedTasks, setUpdatedTasks] = useState<Array<any>>([]);

  const fetchTasksFromServer = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchTasksFromServer().then((data) => {
      setUpdatedTasks(data);
    }).catch((error: any) => {
      setError(`Erro ao carregar Tarefas: ${error.message}`);
    });
  }, [tasks]);

  const formatDateTime = (dateTimeString: string) => {
    const timeZone = 'America/Sao_Paulo';

    const zonedDate = new Date(dateTimeString);
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const dayOfWeek = daysOfWeek[zonedDate.getDay()];

    const formattedDate = `${dayOfWeek}. ${zonedDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: timeZone })}`;

    return formattedDate;
  };

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
              <EditButton onClick={() => console.log(task.id)}>
                <EditIcon icon={faEdit} />
              </EditButton>
            </div>
          </TaskItem>
        ))}
      </TaskList>
    </div>
  );
};

export default ListPrincipal;