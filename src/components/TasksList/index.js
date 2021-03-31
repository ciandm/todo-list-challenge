import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import EmptyTasks from './EmptyTasks';

function TasksList({ tasks }) {
  if (tasks.length === 0 || !tasks) {
    return (
      <S.Container>
        <EmptyTasks />
      </S.Container>
    );
  }
  return <S.Container />;
}

export default TasksList;

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TasksList.defaultProps = {
  tasks: [],
};
