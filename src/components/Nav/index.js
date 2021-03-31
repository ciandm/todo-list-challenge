import React from 'react';
import { HiMoon, HiSun, HiLogout } from 'react-icons/hi';
import * as S from './styled';
import IconButton from '../IconButton';
import { useTheme } from '../../../pages/_app';

function Nav() {
  const { darkMode, toggleTheme } = useTheme();
  // placeholder for now
  const handleLogout = () => {
    console.log('logged out');
  };
  const handleThemeSwitch = () => {
    toggleTheme();
  };
  return (
    <S.Nav>
      <S.Wrapper>
        <S.Title>Tasks</S.Title>
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
