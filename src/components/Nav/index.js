import React from 'react';
import { HiMoon, HiSun, HiLogout } from 'react-icons/hi';
import * as S from './styled';
import IconButton from '../IconButton';
import { useTheme } from '../../../pages/_app';
import useFirebase from '../../hooks/useFirebase';

function Nav() {
  const { darkMode, toggleTheme } = useTheme();
  const { logout } = useFirebase();
  // placeholder for now
  const handleLogout = () => {
    logout();
  };
  const handleThemeSwitch = () => {
    toggleTheme();
  };
  return (
    <S.Nav>
      <S.Wrapper>
        <S.Title>My tasks</S.Title>
        <S.ButtonGroup>
          <IconButton variation="primary" handleButtonClick={handleThemeSwitch}>
            {darkMode ? <HiSun /> : <HiMoon />}
          </IconButton>
          <IconButton variation="primary" handleButtonClick={handleLogout}>
            <HiLogout />
          </IconButton>
        </S.ButtonGroup>
      </S.Wrapper>
    </S.Nav>
  );
}

export default Nav;
