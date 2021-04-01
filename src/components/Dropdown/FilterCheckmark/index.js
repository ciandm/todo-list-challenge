import React from 'react';
import { HiCheck } from 'react-icons/hi';
import * as S from './styled';

function FilterCheckmark({ checked }) {
  return (
    <S.Wrapper>
      <S.HiddenCheckbox checked={checked} />
      <S.Checkbox checked={checked}>
        <HiCheck />
      </S.Checkbox>
      <S.Label>Completed</S.Label>
    </S.Wrapper>
  );
}

export default FilterCheckmark;
