import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const StyledCardBox = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 3px;
  display: flex;
  padding: 10px;
  background-color: ${COLORS.white};
  box-shadow: 0.5px 2px 3px 0px ${COLORS.shadow};
`;

export const StyledCardTitle = styled.div`
  flex-basis: 20%;
  padding-right: 20px;
`;

export const StyledCardContent = styled.div`
  flex-grow: 1;
`;
