import React, { useState } from 'react';
import * as S from './styled';
import TasksControls from '../TasksControls/index';
import TasksList from '../TasksList';
import TasksStats from '../TasksList/TasksStats';
import fakeTasks from '../../../data/fakeTasks';

function TasksContainer() {
  const [tasks, setTasks] = useState(fakeTasks);
  const handleTaskChecked = (e, id) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(i => i.id === id);
    updatedTasks[index].task.checked = !updatedTasks[index].task.checked;
    setTasks(updatedTasks);
  };
  const handleTaskRemove = (e, id) => {
    // prevent it from bubbling up to task item
    e.stopPropagation();
    const allTasks = [...tasks];
    const updatedTasks = allTasks.filter(t => t.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <S.Container>
      <TasksControls />
      <S.TasksWrapper>
        {/* form will go here */}
        <TasksList
          tasks={tasks}
          handleTaskChecked={handleTaskChecked}
          handleTaskRemove={handleTaskRemove}
        />
      </S.TasksWrapper>
      <TasksStats
        totalTasks={tasks.length}
        tasksCompleted={tasks.filter(t => t.task.checked).length}
      />
    </S.Container>
  );
}

export default TasksContainer;
