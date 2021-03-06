import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function Button({ children, handleButtonClick, type, variation, ...rest }) {
  if (variation === 'secondary') {
    return (
      <S.SecondaryButton onClick={() => handleButtonClick()} {...rest}>
        {children}
      </S.SecondaryButton>
    );
  }
  return (
    <S.PrimaryButton
      type={type}
      onClick={handleButtonClick ? () => handleButtonClick() : null}
      {...rest}
    >
      {children}
    </S.PrimaryButton>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleButtonClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  variation: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};
