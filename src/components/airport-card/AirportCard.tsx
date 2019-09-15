import * as React from 'react';
import { StyledCardContent, StyledCardBox, StyledCardTitle } from './styles';
import { AirportEntityModel } from '../../data/models';
import { resolveCityName } from '../../utils/stringResolver';

interface AirportCardProps {
  detail: AirportEntityModel;
  onClick: Function;
}
class AirportCard extends React.PureComponent<AirportCardProps> {
  render() {
    const { detail } = this.props;
    return (
      <StyledCardBox key={detail.airportCode}>
        <StyledCardTitle>
          <h1>{detail.airportName}</h1>
        </StyledCardTitle>
        <StyledCardContent>
          <p>
            <span>Country:</span>
            {detail.country.countryName}
          </p>
          <p>
            <span>Region:</span>
            {detail.region.regionName}
          </p>
          <p>
            <span>City:</span>
            {resolveCityName(detail.city)}
          </p>
        </StyledCardContent>
      </StyledCardBox>
    );
  }
}

export default AirportCard;
