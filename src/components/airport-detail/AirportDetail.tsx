import * as React from 'react';
import { StyledDetailBox, StyledDetailTitle, StyledDetailContent } from './styles';
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
          <Button onClick={this.handleOnBackClick}>Back to Feed</Button>
        </StyledDetailContent>
      </StyledDetailBox>
    );
  }

  private handleOnBackClick = () => {
    const { onBackClick } = this.props;
    onBackClick && onBackClick();
  };
}

export default AirportDetail;
