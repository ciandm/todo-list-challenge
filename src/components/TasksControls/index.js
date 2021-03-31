import React from 'react';
import { HiPlus } from 'react-icons/hi';
import Button from '../Button';
import * as S from './styled';

function TasksControls({ handleFormToggle }) {
  return (
    <S.Controls>
      <Button variation="primary" handleButtonClick={handleFormToggle}>
        New task <HiPlus />
      </Button>
      <Button variation="secondary">
        New task <HiPlus />
      </Button>
    </S.Controls>
  );
}

export default TasksControls;
