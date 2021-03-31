import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function IconButton({ children, handleButtonClick, variation }) {
  if (variation === 'danger') {
    return (
      <S.DangerButton onClick={() => handleButtonClick()}>
        {children}
      </S.DangerButton>
    );
  }
  return (
    <S.RegularButton onClick={() => handleButtonClick()}>
      {children}
    </S.RegularButton>
  );
}

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  variation: PropTypes.oneOf(['primary', 'danger']).isRequired,
};
