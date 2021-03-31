import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function Button({ children, handleButtonClick, variation }) {
  if (variation === 'secondary') {
    return (
      <S.SecondaryButton onClick={() => handleButtonClick()}>
        {children}
      </S.SecondaryButton>
    );
  }
  return (
    <S.PrimaryButton onClick={() => handleButtonClick()}>
      {children}
    </S.PrimaryButton>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  variation: PropTypes.oneOf(['primary', 'secondary'].isRequired),
};
