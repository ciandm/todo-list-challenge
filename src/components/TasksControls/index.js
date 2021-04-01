import React from 'react';
import PropTypes from 'prop-types';
import { HiPlus } from 'react-icons/hi';
import Button from '../Button';
import * as S from './styled';
import Dropdown from '../Dropdown';

function TasksControls({
  filters,
  formShown,
  handleShowForm,
  handleFilterToggle,
}) {
  return (
    <S.Controls>
      <Button
        disabled={formShown}
        variation="primary"
        handleButtonClick={handleShowForm}
      >
        New task <HiPlus />
      </Button>
      <Dropdown handleFilterToggle={handleFilterToggle} filters={filters} />
    </S.Controls>
  );
}

export default TasksControls;

TasksControls.propTypes = {
  filters: PropTypes.shape({
    Completed: PropTypes.bool,
    Unfinished: PropTypes.bool,
  }).isRequired,
  formShown: PropTypes.bool.isRequired,
  handleFilterToggle: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
};
