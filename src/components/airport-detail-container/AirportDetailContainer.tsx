import * as React from 'react';
import { connect } from 'react-redux';
import AirportDetail from '../airport-detail';
import { mock } from '../../data/mock';
import { ConnectedDispatchProps } from '../..//store/models';
import { RouteComponentProps } from 'react-router-dom';
import { push } from 'connected-react-router';
import { Store } from '../../reducers';
import { AirportDetailState } from '../../reducers/detail';
import { fetchAirportDetail } from '../../actions';
interface AirportDetailContainerProps extends RouteComponentProps<{ airportCode: string }> {}

interface ConnectedStateProps {
  detailState: AirportDetailState;
}

type Props = AirportDetailContainerProps & ConnectedStateProps & ConnectedDispatchProps;

class AirportDetailContainer extends React.PureComponent<Props> {
  componentDidMount() {
    const {
      dispatch,
      detailState: { data },
      match: {
        params: { airportCode }
      }
    } = this.props;
    if (!data) {
      dispatch(fetchAirportDetail({ airportCode }));
    }
  }

  render() {
    const {
      detailState: { isLoading, error, data }
    } = this.props;
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return <h2>{error}</h2>;
    }
    if (!data) {
      return null;
    }
    return <AirportDetail detail={data} onBackClick={this.handleOnBackClick} />;
  }

  private handleOnBackClick = () => {
    this.props.dispatch(push(`/feed`));
  };
}

const mapStateToProps = (state: Store) => {
  return { detailState: state.detail };
};

export default connect<ConnectedStateProps, ConnectedDispatchProps, AirportDetailContainerProps, Store>(mapStateToProps)(AirportDetailContainer);
