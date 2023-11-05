import { useEffect, useState } from 'react';
import { Checkbox, TaskItem, TaskList, Title, TaskTitle, TaskDate, EditButton, EditIcon } from '../styled-components/List';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ListPrincipal = ({ updateTaskCount }: any) => {
  const [tasks, setTasks]: Array<any> = useState([]);

  const fetchTasksFromServer = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
      throw error;
    }
  };

  const loadAllData = () => {
    fetchTasksFromServer().then((data) => {
      setTasks(data);
    }).catch((error) => {
      // Lide com o erro, se necessário
    });
    return;
  }

  useEffect(() => {
    fetchTasksFromServer().then((data) => {
      setTasks(data);
    }).catch((error) => {
      // Lide com o erro, se necessário
    });
    return;
  }, []);

  const formatDateTime = (dateTimeString: string) => {
    const timeZone = 'America/Sao_Paulo';

    const zonedDate = new Date(dateTimeString);
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const dayOfWeek = daysOfWeek[zonedDate.getDay()];

    const formattedDate = `${dayOfWeek} ${zonedDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: timeZone })}`;

    return formattedDate;
  };

  const handleCheckboxChange = (taskId: number) => {
    const updatedTasks = tasks.map((task: any) => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };

        const actualDate = new Date();
        const year = actualDate.getFullYear();
        const month = String(actualDate.getMonth() + 1).padStart(2, '0');
        const day = String(actualDate.getDate()).padStart(2, '0');
        const hours = String(actualDate.getHours()).padStart(2, '0');
        const minutes = String(actualDate.getMinutes()).padStart(2, '0');

        updatedTask.lastModifiedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

        axios.put(`http://localhost:3001/tasks/${taskId}`, updatedTask).then((response) => {
          console.log('Tarefa atualizada com sucesso:', response.data);

          setTimeout(() => {
            loadAllData();
            updateTaskCount();
          }, 100);
        }).catch((error) => {
          console.error('Erro ao atualizar tarefa:', error);
        });

        return updatedTask;
      }
      return task;
    });

    return updatedTasks;
  };

  return (
    <div>
      <TaskList>
        <Title>Lista de Tarefas</Title>
        {tasks.sort((a: any, b: any) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)).map((task: any) => (
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