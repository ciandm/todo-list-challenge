import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const EmptyMessage = ({ emptyByFilter }) => {
  if (emptyByFilter === 'completed') {
    return <S.Copy>You have no tasks completed yet.</S.Copy>;
  }
  if (emptyByFilter === 'unfinished') {
    return (
      <>
        <S.Copy>You have no more unfinished tasks.</S.Copy>
        <S.Copy>
          Click <strong>“New task”</strong> to add more.
        </S.Copy>
      </>
    );
  }
  return (
    <>
      <S.Copy>You have no tasks yet.</S.Copy>
      <S.Copy>
        Click <strong>“New task”</strong> to get started.
      </S.Copy>
    </>
  );
};

export default EmptyMessage;

EmptyMessage.propTypes = {
  emptyByFilter: PropTypes.oneOf(['completed', 'unfinished']),
};
