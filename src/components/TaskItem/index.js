import React from 'react';
import { HiTrash } from 'react-icons/hi';
import * as S from './styled';
import IconButton from '../IconButton';
import TaskCheck from './TaskCheck';

function TaskItem() {
  return (
    <S.TaskItem>
      <TaskCheck />
      <S.TaskGroup>
        <S.TaskTitle>Feed the cat</S.TaskTitle>
        <S.TaskDate>Tomorrow</S.TaskDate>
      </S.TaskGroup>
      <IconButton variation="danger">
        <HiTrash />
      </IconButton>
    </S.TaskItem>
  );
}

export default TaskItem;
