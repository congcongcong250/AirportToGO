import * as React from 'react';
import AirportFeed from '../airport-feed';
import { mock } from '../../data/mock';

interface AirportFeedContainerProps {}

class AirportFeedContainer extends React.PureComponent<AirportFeedContainerProps> {
  render() {
    return <AirportFeed feed={mock} />;
  }
}

export default AirportFeedContainer;
