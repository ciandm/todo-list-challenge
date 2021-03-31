import React from 'react';
import * as S from './styled';

function Input({ handleInputChange, id, label, name, value }) {
  return (
    <S.InputContainer>
      <S.Label>Label</S.Label>
      <S.Input />
    </S.InputContainer>
  );
}

export default Input;
