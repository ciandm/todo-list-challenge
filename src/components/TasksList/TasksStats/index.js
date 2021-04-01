import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const TasksStats = ({ handleRemoveCompleted, tasksCompleted, totalTasks }) => {
  return (
    <S.Footer>
      <S.Stats>
        <S.Stat>{totalTasks} tasks total</S.Stat>
        <S.Stat>
          {tasksCompleted === 1
            ? `${tasksCompleted} task`
            : `${tasksCompleted} tasks`}{' '}
          completed
        </S.Stat>
      </S.Stats>
      <S.RemoveCompleted onClick={() => handleRemoveCompleted()}>
        Remove completed tasks
      </S.RemoveCompleted>
    </S.Footer>
  );
};

export default TasksStats;

TasksStats.propTypes = {
  handleRemoveCompleted: PropTypes.func.isRequired,
  tasksCompleted: PropTypes.number.isRequired,
  totalTasks: PropTypes.number.isRequired,
};
