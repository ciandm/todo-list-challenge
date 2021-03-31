import React from 'react';
import * as S from './styled';

const TasksStats = () => {
  return (
    <S.Stats>
      <S.Stat>4 tasks total</S.Stat>
      <S.Stat>2 tasks completed</S.Stat>
    </S.Stats>
  );
};

export default TasksStats;
