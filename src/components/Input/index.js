import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function Input({ handleInputChange, label, name, type, value }) {
  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={e => handleInputChange(e)}
      />
    </S.InputContainer>
  );
}

export default Input;

Input.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date']),
  value: PropTypes.string,
};
