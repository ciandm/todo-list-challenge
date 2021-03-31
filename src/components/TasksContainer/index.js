import React from 'react';
import * as S from './styled';
import TasksControls from '../TasksControls/index';
import TasksList from '../TasksList';
import TasksStats from '../TasksList/TasksStats';

function TasksContainer() {
  return (
    <S.Container>
      <TasksControls />
      <S.TasksWrapper>
        {/* form will go here */}
        <TasksList />
      </S.TasksWrapper>
      <TasksStats />
    </S.Container>
  );
}

export default TasksContainer;
