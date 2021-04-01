import styled from 'styled-components';
import { Body } from '../../theme/typography';

export const Wrapper = styled.div`
  position: relative;
  z-index: 100;
`;

export const Button = styled.button`
  ${Body};
  align-items: center;
  color: ${({ theme }) => theme.colors.moodyBlue};
  display: flex;

  & svg {
    fill: ${({ theme }) => theme.colors.moodyBlue};
    margin-left: 8px;
  }
`;

export const Dropdown = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.bayOfMany : theme.colors.white};
  border-radius: 1.2rem;
  bottom: calc(0 + 8px);
  box-shadow: ${({ theme }) =>
    theme.darkMode
      ? '0px 4px 24px rgba(15, 18, 36, 0.48);'
      : '0px 2px 16px rgba(99, 113, 211, 0.08), 0px 4px 12px rgba(99, 113, 211, 0.12);'};
  display: ${({ open }) => (open ? 'grid' : 'none')};
  gap: 1.2rem;
  grid-template-columns: 1fr;
  margin-top: 8px;
  padding: 2.4rem;
  position: absolute;
  right: 0;
`;
