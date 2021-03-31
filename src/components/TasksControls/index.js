import React from 'react';
import PropTypes from 'prop-types';
import { HiPlus } from 'react-icons/hi';
import Button from '../Button';
import * as S from './styled';

function TasksControls({ formShown, handleShowForm }) {
  return (
    <S.Controls>
      <Button
        disabled={formShown}
        variation="primary"
        handleButtonClick={handleShowForm}
      >
        New task <HiPlus />
      </Button>
      <Button variation="secondary">
        New task <HiPlus />
      </Button>
    </S.Controls>
  );
}

export default TasksControls;

TasksControls.propTypes = {
  formShown: PropTypes.bool.isRequired,
  handleShowForm: PropTypes.func.isRequired,
};
