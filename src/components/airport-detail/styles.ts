import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const StyledDetailBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDetailTitle = styled.div`
  padding: 20px;
`;

export const StyledDetailContent = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledBox = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px ${COLORS.black} solid;
  border-radius: 5px;
  width: 300px;
`;
