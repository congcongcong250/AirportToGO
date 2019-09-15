import * as React from 'react';
import { StyledCardContent, StyledCardBox, StyledCardTitle, StyledDetailButton, StyledCard } from './styles';
import { AirportEntityModel } from '../../data/models';
import { resolveCityName } from '../../utils/stringResolver';

interface AirportCardProps {
  detail: AirportEntityModel;
  onClick?: (airportCode: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
class AirportCard extends React.PureComponent<AirportCardProps> {
  render() {
    const { detail } = this.props;
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
        {this.renderDetailButton()}
      </StyledCard>
    );
  }

  private renderDetailButton = () => {
    const { onClick } = this.props;
    return !!onClick && <StyledDetailButton onClick={this.handleOnDetailClick}>></StyledDetailButton>;
  };

  private handleOnDetailClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      detail: { airportCode },
      onClick
    } = this.props;
    onClick && onClick(airportCode, e);
  };
}

export default AirportCard;
