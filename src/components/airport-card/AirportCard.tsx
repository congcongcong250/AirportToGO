import * as React from 'react';
import { StyledCardContent, StyledCardBox, StyledCardTitle, StyledDetailButton, StyledCard } from './styles';
import { AirportEntityModel } from '../../data/models';
import { resolveCityName } from '../../utils/stringResolver';

interface AirportCardProps {
  detail: AirportEntityModel;
  onClick?: (airportCode: string) => void;
}
class AirportCard extends React.PureComponent<AirportCardProps> {
  render() {
    const { detail, onClick } = this.props;
    return (
      <StyledCard>
        <StyledCardBox>
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
        {onClick && this.renderDetailButton()}
      </StyledCard>
    );
  }

  private renderDetailButton = () => {
    const { onClick } = this.props;
    return <StyledDetailButton onClick={this.handleOnDetailClick}>></StyledDetailButton>;
  };

  private handleOnDetailClick = () => {
    const {
      detail: { airportCode },
      onClick
    } = this.props;
    onClick && onClick(airportCode);
  };
}

export default AirportCard;
