import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const TasksStats = ({ handleRemoveCompleted, tasksCompleted, totalTasks }) => {
  return (
    <S.Footer>
      <S.Stats>
        <S.Stat>
          {totalTasks === 1 ? `${totalTasks} task` : `${totalTasks} tasks`}
        </S.Stat>
        <S.Stat>
          {tasksCompleted === 1
            ? `${tasksCompleted} task`
            : `${tasksCompleted} tasks`}{' '}
          completed
        </S.Stat>
      </S.Stats>
      <S.RemoveCompleted
        disabled={tasksCompleted === 0}
        onClick={() => handleRemoveCompleted()}
      >
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
