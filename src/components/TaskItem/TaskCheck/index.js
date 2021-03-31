import React from 'react';
import PropTypes from 'prop-types';
import { HiCheck } from 'react-icons/hi';
import * as S from './styled';

const TaskCheck = ({ checked }) => {
  return (
    <S.Check checked={checked}>
      <HiCheck />
    </S.Check>
  );
};

export default TaskCheck;

TaskCheck.propTypes = {
  checked: PropTypes.bool.isRequired,
};
