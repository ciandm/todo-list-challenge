import React from 'react';
import PropTypes from 'prop-types';
import { HiCheck } from 'react-icons/hi';
import * as S from './styled';

function FilterCheckmark({ checked, handleFilterToggle, label }) {
  return (
    <S.Wrapper onClick={() => handleFilterToggle(label)}>
      <S.HiddenCheckbox
        name={label}
        checked={checked}
        onChange={() => handleFilterToggle(label)}
      />
      <S.Checkbox name={label} checked={checked}>
        <HiCheck />
      </S.Checkbox>
      <S.Label htmlFor={label}>{label}</S.Label>
    </S.Wrapper>
  );
}

export default FilterCheckmark;

FilterCheckmark.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleFilterToggle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
