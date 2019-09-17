import * as React from 'react';
import AirportFeed from '../airport-feed';
import { mock } from '../../data/mock';
import { RouteComponentProps } from 'react-router-dom';
import { Store } from '../../reducers';
import { ConnectedDispatchProps } from '../..//store/models';
import { connect } from 'react-redux';
import { selectAirportDetail, fetchAirportFeed } from '../../actions';
import { AirportFeedState } from '../../reducers/feed';
import Button from '../button';
import { StyledContainer, StyledFilterPanel } from './styles';

interface AirportFeedContainerProps extends RouteComponentProps {}

interface ConnectedStateProps {
  feedState: AirportFeedState;
}

type Props = AirportFeedContainerProps & ConnectedStateProps & ConnectedDispatchProps;

class AirportFeedContainer extends React.PureComponent<Props> {
  get disableButton() {
    return Boolean(this.props.feedState.isLoading || this.props.feedState.error);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAirportFeed({ pageNumber: 0 }));
  }

  render() {
    return (
      <StyledContainer>
        <StyledFilterPanel>
          <Button onClick={this.handleOnNextPage} disabled={this.disableButton}>
            Next Page
          </Button>
        </StyledFilterPanel>
        {this.renderContent()}
      </StyledContainer>
    );
  }

  private renderContent = () => {
    const { feedState } = this.props;
    if (feedState.isLoading) {
      return <h1>Loading...</h1>;
    }
    if (feedState.error) {
      return <h2>{feedState.error}</h2>;
    }
    return <AirportFeed feed={feedState.items} onSelectAirport={this.handleOnSelectAirport} />;
  };

  private handleOnNextPage = () => {
    const {
      feedState: { query },
      dispatch
    } = this.props;
    const nextPageNumber = query.pageNumber + 1;
    dispatch(fetchAirportFeed({ pageNumber: nextPageNumber }));
  };

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
