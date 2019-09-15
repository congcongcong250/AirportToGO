import * as React from 'react';
import { AirportEntityModel } from '../../data/models';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 3px;
`;

interface AirportCardProps {
  detail: AirportEntityModel;
  onClick: Function;
}

class AirportCard extends React.PureComponent<AirportCardProps> {
  render() {
    const { detail } = this.props;
    return (
      <StyledCard key={detail.airportCode}>
        <div>
          <h1>{detail.airportName}</h1>
        </div>
        <div>
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
            {detail.city.cityName}
          </p>
        </div>
      </StyledCard>
    );
  }
}

export default AirportCard;
