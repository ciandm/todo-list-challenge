import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import EmptyTasks from './EmptyTasks';
import TaskItem from '../TaskItem';

function TasksList({ filters, handleTaskChecked, handleTaskRemove, tasks }) {
  if (tasks.length === 0 || !tasks) {
    return (
      <S.Container>
        <EmptyTasks />
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.Tasks>
        {tasks
          .filter(t => {
            // if both filters are applied, return each task
            if (filters.completed && filters.unfinished) return t;
            // check for completed tasks
            if (filters.completed) return t.task.checked;
            // check for unfinished tasks
            if (filters.unfinished) return !t.task.checked;
            return t;
          })
          .map(t => (
            <TaskItem
              key={t.id}
              handleTaskChecked={handleTaskChecked}
              handleTaskRemove={handleTaskRemove}
              id={t.id}
              {...t.task}
            />
          ))}
      </S.Tasks>
    </S.Container>
  );
}

export default TasksList;

TasksList.propTypes = {
  filters: PropTypes.shape({
    completed: PropTypes.bool,
    unfinished: PropTypes.bool,
  }).isRequired,
  handleTaskChecked: PropTypes.func.isRequired,
  handleTaskRemove: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
