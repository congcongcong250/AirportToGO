import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  border-radius: 5px;
  background-color: ${COLORS.white};
  box-shadow: 0.5px 2px 3px 0px ${COLORS.shadow};
  display: flex;
  height: 120px;
  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const StyledCardBox = styled.div`
  display: flex;
  padding: 20px;
  flex-grow: 1;
`;

export const StyledCardTitle = styled.div`
  flex-basis: 30%;
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid ${COLORS.background};
`;

export const StyledCardContent = styled.div`
  flex-grow: 1;
  p {
    margin: 0px 0px 5px 0px;
    font-size: 0.85em;
  }
  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const StyledDetailButton = styled.button`
  border: none;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit
  color: ${COLORS.main};
  font-weight: bold;
  font-size: 30px;
  flex-basis: 15%;
  :hover {
    transition: background-color 0.15s ease-in-out;
    cursor: pointer;
    background-color: ${COLORS.lightGrey};
  }
`;
