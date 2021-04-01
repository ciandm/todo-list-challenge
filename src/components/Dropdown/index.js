import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import FilterCheckmark from './FilterCheckmark';
import * as S from './styled';

function Dropdown() {
  const [open, setOpen] = useState(false);
  const handleDropdownOpen = () => {
    setOpen(true);
  };
  const handleDropdownClose = e => {
    // only if focus leaves element or it's children
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };
  return (
    <S.Wrapper
      onFocus={() => handleDropdownOpen()}
      onBlur={e => handleDropdownClose(e)}
    >
      <S.Button>
        Filter tasks <HiChevronDown />
      </S.Button>
      <S.Dropdown open={open}>
        <FilterCheckmark />
        <FilterCheckmark />
      </S.Dropdown>
    </S.Wrapper>
  );
}

export default Dropdown;
