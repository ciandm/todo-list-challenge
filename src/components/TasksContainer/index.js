import React from 'react';
import * as S from './styled';
import TasksControls from '../TasksControls/index';
import TasksList from '../TasksList';

function TasksContainer() {
  return (
    <S.Container>
      <TasksControls />
      <S.TasksWrapper>
        {/* form will go here */}
        <TasksList />
      </S.TasksWrapper>
    </S.Container>
  );
}

export default TasksContainer;
