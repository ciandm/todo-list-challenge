import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import * as S from './styled';

function TasksForm({
  formErrors,
  formShown,
  handleHideForm,
  handleFormSubmit,
  handleInputChange,
  values,
}) {
  return (
    <S.FormWrapper formShown={formShown}>
      <S.Form onSubmit={e => handleFormSubmit(e)}>
        <S.FormGroup>
          <Input
            error={formErrors.title}
            value={values.title}
            label="Task to complete"
            name="title"
            handleInputChange={handleInputChange}
          />
          <Input
            error={formErrors.date}
            value={values.date}
            label="Due date"
            name="date"
            type="date"
            handleInputChange={handleInputChange}
          />
        </S.FormGroup>
        <S.ButtonGroup>
          <Button variation="primary" type="submit">
            Create task
          </Button>
          <Button
            handleButtonClick={handleHideForm}
            variation="secondary"
            type="button"
          >
            Cancel
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </S.FormWrapper>
  );
}

export default TasksForm;

TasksForm.propTypes = {
  formShown: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleHideForm: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
