import React from 'react';
import EmptyMessage from './EmptyMessage';
import * as S from './styled';

const EmptyTasks = ({ emptyByFilter }) => {
  return (
    <S.Container>
      <S.Image
        src="/images/empty-notes-illustration.svg"
        alt="No tasks yet illustration"
      />
      <EmptyMessage emptyByFilter={emptyByFilter} />
    </S.Container>
  );
};

export default EmptyTasks;
