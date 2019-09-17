import * as React from 'react';
import { connect } from 'react-redux';
import AirportDetail from '../airport-detail';
import { mock } from '../../data/mock';
import { ConnectedDispatchProps } from '../..//store/models';
import { RouteComponentProps } from 'react-router-dom';
import { push } from 'connected-react-router';
import { Store } from '../../reducers';
interface AirportDetailContainerProps extends RouteComponentProps<{ airportCode: string }> {}

interface ConnectedStateProps {}

type Props = AirportDetailContainerProps & ConnectedStateProps & ConnectedDispatchProps;

class AirportDetailContainer extends React.PureComponent<Props> {
  render() {
    return <AirportDetail detail={mock[0]} onBackClick={this.handleOnBackClick} />;
  }

  private handleOnBackClick = () => {
    this.props.dispatch(push(`/feed`));
  };
}

const mapStateToProps = (state: Store) => {
  return {};
};

export default connect<ConnectedStateProps, ConnectedDispatchProps, AirportDetailContainerProps, Store>(mapStateToProps)(AirportDetailContainer);
