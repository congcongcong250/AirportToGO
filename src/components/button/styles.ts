import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const StyledButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  max-width: 200px;
  border-radius: 5px;
  background-color: ${COLORS.main};
  box-shadow: 0.5px 2px 3px 0px ${COLORS.shadow};
  height: 40px;
  color: white;
  :hover {
    transition: background-color 0.15s ease-in-out;
    cursor: pointer;
    background-color: ${COLORS.lightRed};
  }
  @media (max-width: 768px) {
    height: 20px;
  }
`;
