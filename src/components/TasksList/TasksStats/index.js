import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const TasksStats = ({ tasksCompleted, totalTasks }) => {
  return (
    <S.Stats>
      <S.Stat>{totalTasks} tasks total</S.Stat>
      <S.Stat>
        {tasksCompleted === 1
          ? `${tasksCompleted} task`
          : `${tasksCompleted} tasks`}{' '}
        completed
      </S.Stat>
    </S.Stats>
  );
};

export default TasksStats;

TasksStats.propTypes = {
  tasksCompleted: PropTypes.number.isRequired,
  totalTasks: PropTypes.number.isRequired,
};
