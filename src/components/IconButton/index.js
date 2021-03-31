import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function IconButton({ variation, children }) {
  if (variation === 'danger') {
    return <S.DangerButton>{children}</S.DangerButton>;
  }
  return <S.RegularButton>{children}</S.RegularButton>;
}

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  variation: PropTypes.oneOf(['primary', 'danger']).isRequired,
};
