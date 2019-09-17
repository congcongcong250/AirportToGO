import * as React from 'react';
import { AirportEntityModel } from '../../data/models';
import { StyledFeed } from './styles';
import AirportCard from '../airport-card';

interface AirportFeedProps {
  feed: Array<AirportEntityModel>;
  onSelectAirport?: (airportCode: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
    const { onSelectAirport } = this.props;
    onSelectAirport && onSelectAirport(airportCode, e);
  };
}

export default AirportFeed;
