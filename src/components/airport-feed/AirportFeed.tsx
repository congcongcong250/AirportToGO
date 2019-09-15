import * as React from 'react';
import { AirportEntityModel } from '../../data/models';
import { StyledFeed } from './styles';
import AirportCard from '../airport-card';

interface AirportFeedProps {
  feed: Array<AirportEntityModel>;
}

class AirportFeed extends React.PureComponent<AirportFeedProps> {
  render() {
    return <StyledFeed>{this.renderFeed()}</StyledFeed>;
  }

  private renderFeed = () => {
    const { feed } = this.props;
    return feed.map(airport => {
      return <AirportCard detail={airport} onClick={this.handleOnAirportClick} key={airport.airportCode} />;
    });
  };

  private handleOnAirportClick = (airportCode: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('click on', airportCode);
  };
}

export default AirportFeed;
