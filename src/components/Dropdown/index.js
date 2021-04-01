import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiChevronDown } from 'react-icons/hi';
import FilterCheckmark from './FilterCheckmark';
import * as S from './styled';

function Dropdown({ handleFilterToggle, filters }) {
  const [open, setOpen] = useState(false);
  const handleDropdownClose = e => {
    // only if focus leaves element or it's children
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };
  return (
    <S.Wrapper
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={e => handleDropdownClose(e)}
    >
      <S.Button open={open}>
        Filter tasks <HiChevronDown />
      </S.Button>
      <S.Dropdown open={open}>
        {Object.keys(filters).map(f => (
          <FilterCheckmark
            checked={filters[f]}
            key={f}
            handleFilterToggle={handleFilterToggle}
            label={f}
          />
        ))}
      </S.Dropdown>
    </S.Wrapper>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  filters: PropTypes.shape({
    Completed: PropTypes.bool,
    Unfinished: PropTypes.bool,
  }).isRequired,
  handleFilterToggle: PropTypes.func.isRequired,
};
