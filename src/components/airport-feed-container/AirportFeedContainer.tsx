import * as React from 'react';
import AirportFeed from '../airport-feed';
import { mock } from '../../data/mock';
import { RouteComponentProps } from 'react-router-dom';
import { Store } from '../../reducers';
import { ConnectedDispatchProps } from '../..//store/models';
import { connect } from 'react-redux';
import { selectAirportDetail } from '../../actions';

interface AirportFeedContainerProps extends RouteComponentProps {}

interface ConnectedStateProps {}

type Props = AirportFeedContainerProps & ConnectedStateProps & ConnectedDispatchProps;

class AirportFeedContainer extends React.PureComponent<Props> {
  render() {
    return <AirportFeed feed={mock} onSelectAirport={this.handleOnSelectAirport} />;
  }

  private handleOnSelectAirport = (airportCode: string) => {
    const { dispatch } = this.props;
    dispatch(selectAirportDetail({ airportCode }));
  };
}

const mapStateToProps = (state: Store) => {
  return {};
};

export default connect<ConnectedStateProps, ConnectedDispatchProps, AirportFeedContainerProps, Store>(mapStateToProps)(AirportFeedContainer);
