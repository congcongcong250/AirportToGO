import * as React from 'react';
import AirportFeed from '../airport-feed';
import { mock } from '../../data/mock';
import { RouteComponentProps } from 'react-router-dom';
import { Store } from '../../reducers';
import { ConnectedDispatchProps } from '../..//store/models';
import { connect } from 'react-redux';
import { selectAirportDetail, fetchAirportFeed } from '../../actions';
import { AirportFeedState } from '../../reducers/feed';

interface AirportFeedContainerProps extends RouteComponentProps {}

interface ConnectedStateProps {
  feedState: AirportFeedState;
}

type Props = AirportFeedContainerProps & ConnectedStateProps & ConnectedDispatchProps;

class AirportFeedContainer extends React.PureComponent<Props> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAirportFeed({ pageNumber: 0 }));
  }

  render() {
    const { feedState } = this.props;
    if (feedState.isLoading) {
      return 'Loading...';
    }
    if (feedState.error) {
      return <h2>{feedState.error}</h2>;
    }
    return <AirportFeed feed={feedState.items} onSelectAirport={this.handleOnSelectAirport} />;
  }

  private handleOnSelectAirport = (airportCode: string) => {
    const { dispatch } = this.props;
    dispatch(selectAirportDetail({ airportCode }));
  };
}

const mapStateToProps = (state: Store) => {
  return {
    feedState: state.feed
  };
};

export default connect<ConnectedStateProps, ConnectedDispatchProps, AirportFeedContainerProps, Store>(mapStateToProps)(AirportFeedContainer);
