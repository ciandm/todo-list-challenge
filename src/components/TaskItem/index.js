import React from 'react';
import PropTypes from 'prop-types';
import { HiTrash } from 'react-icons/hi';
import formatDistance from 'date-fns/formatDistance';
import isToday from 'date-fns/isToday';
import * as S from './styled';
import IconButton from '../IconButton';
import TaskCheck from './TaskCheck';

function TaskItem({
  checked,
  date,
  handleTaskChecked,
  handleTaskRemove,
  id,
  title,
}) {
  const handleDeletePressed = e => {
    handleTaskRemove(e, id);
  };
  return (
    <S.TaskItem onClick={e => handleTaskChecked(e, id)}>
      <TaskCheck checked={checked} />
      <S.TaskGroup>
        <S.TaskTitle>{title}</S.TaskTitle>
        <S.TaskDate>
          {isToday(date)
            ? 'Today'
            : formatDistance(date, new Date(), { addSuffix: true })}
        </S.TaskDate>
      </S.TaskGroup>
      <IconButton
        handleButtonClick={handleDeletePressed}
        variation="danger"
        data-action="delete"
      >
        <HiTrash />
      </IconButton>
    </S.TaskItem>
  );
}

export default TaskItem;

TaskItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  handleTaskChecked: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
