import React from 'react';
import * as S from './styled';

const EmptyTasks = () => {
  return (
    <S.Container>
      <S.Image
        src="/images/empty-notes-illustration.svg"
        alt="No tasks set yet illustration"
      />
      <S.Copy>You have no tasks yet.</S.Copy>
      <S.Copy>
        Click <strong>“New task”</strong> to get started.
      </S.Copy>
    </S.Container>
  );
};

export default EmptyTasks;
