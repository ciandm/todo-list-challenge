import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import * as S from './styled';

function TasksForm({ formShown }) {
  return (
    <S.FormWrapper formShown={formShown}>
      <S.Form>
        <Input />
        <Input />
        <S.ButtonGroup>
          <Button variation="primary">Create task</Button>
          <Button variation="secondary">Cancel</Button>
        </S.ButtonGroup>
      </S.Form>
    </S.FormWrapper>
  );
}

export default TasksForm;

TasksForm.propTypes = {
  formShown: PropTypes.bool.isRequired,
};
