import styled from 'styled-components';
import { SmallCaps } from '../../../theme/typography';

export const Stats = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Stat = styled.p`
  ${SmallCaps};
  color: ${({ theme }) => theme.colors.moodyBlue};
`;
