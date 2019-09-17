import * as React from 'react';
import { StyledDetailBox, StyledDetailTitle, StyledDetailContent, StyledBox } from './styles';
import { AirportEntityModel } from '../../data/models';
import { resolveCityName } from '../../utils/stringResolver';
import Button from '../button';

interface AirportDetailProps {
  detail: AirportEntityModel;
  onBackClick?: () => void;
}

class AirportDetail extends React.PureComponent<AirportDetailProps> {
  render() {
    const { detail } = this.props;
    return (
      <StyledDetailBox>
        <StyledDetailTitle>
          <h1>{detail.airportName}</h1>
        </StyledDetailTitle>
        <StyledDetailContent>
          <StyledBox>
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
            <p>
              <span>Latitude:</span>
              {detail.location.latitude}
            </p>
            <p>
              <span>Logitude:</span>
              {detail.location.longitude}
            </p>
          </StyledBox>
          <StyledBox>
            <p>
              <span>International Airport:</span>
              {detail.internationalAirport ? '👍' : '👎'}
            </p>
            <p>
              <span>Domestic Airport:</span>
              {detail.domesticAirport ? '👍' : '👎'}
            </p>
            <p>
              <span>Regional Airport:</span>
              {detail.regionalAirport ? '👍' : '👎'}
            </p>
            <p>
              <span>Online Indicator:</span>
              {detail.onlineIndicator ? '👍' : '👎'}
            </p>
            <p>
              <span>Eticketable Airport:</span>
              {detail.eticketableAirport ? '👍' : '👎'}
            </p>
          </StyledBox>
        </StyledDetailContent>
        <Button onClick={this.handleOnBackClick}>Back to Feed</Button>
      </StyledDetailBox>
    );
  }

  private handleOnBackClick = () => {
    const { onBackClick } = this.props;
    onBackClick && onBackClick();
  };
}

export default AirportDetail;
