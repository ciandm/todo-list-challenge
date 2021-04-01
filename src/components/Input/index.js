import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import * as S from './styled';

function Input({
  error,
  handleInputChange,
  label,
  name,
  type,
  value,
  ...rest
}) {
  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        error={error}
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={e => handleInputChange(e)}
        min={type === 'date' ? format(new Date(), 'yyyy-MM-dd') : null}
        {...rest}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.InputContainer>
  );
}

export default Input;

Input.propTypes = {
  error: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date', 'password', 'email']),
  value: PropTypes.string,
};
