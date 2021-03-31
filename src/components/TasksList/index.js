import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import EmptyTasks from './EmptyTasks';
import TaskItem from '../TaskItem';

function TasksList({ handleTaskChecked, handleTaskRemove, tasks }) {
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
        {tasks.map(t => (
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
  handleTaskChecked: PropTypes.func.isRequired,
  handleTaskRemove: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
