import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import * as S from './styled';

function TasksForm({ formShown, handleHideForm, values }) {
  return (
    <S.FormWrapper formShown={formShown}>
      <S.Form>
        <Input value={values.title} label="Task to complete" name="title" />
        <Input value={values.date} label="Due date" name="date" type="date" />
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
  handleHideForm: PropTypes.func.isRequired,
};
