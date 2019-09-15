import styled from 'styled-components';
import { COLORS } from '../../utils/constants';
import { StyledCard } from '../airport-card/styles';

export const StyledFeed = styled.div`
  boxsizing: 'border-box';
  width: 100%;
  height: 100%;
  padding: 20px;
  backgroundcolor: ${COLORS.background};
  display: flex;
  flex-direction: column;
  ${StyledCard} {
    margin-bottom: 20px;
  }
`;
