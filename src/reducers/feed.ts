import { FETCH_AIRPORT_FEED, SELECT_AIRPORT_DETAIL } from '../actions';
import { AirportEntityModel } from '../data/models';
import { handleActions } from 'redux-actions';

export interface FetchAirportFeedQueryRequestModel {
  ['country.countryCode']?: string;
  eticketableAirport?: boolean;

  sortKey: string;
  order: 'asec' | 'desc';
  pageNumber: 0;
}

export interface AirportFeedState {
  selectedRowIndex: number;

  items: Array<AirportEntityModel>;
  isLoading: boolean;
  error?: string | null;

  query: FetchAirportFeedQueryRequestModel;
}

const initialState: AirportFeedState = {
  selectedRowIndex: 0,

  items: [],
  isLoading: false,
  error: null,

  query: {
    'country.countryCode': undefined,
    eticketableAirport: undefined,

    sortKey: '',
    order: 'asec',
    pageNumber: 0
  }
};

const airportFeed = handleActions<AirportFeedState, any>(
  {
    [FETCH_AIRPORT_FEED.ACTION]: (state, action) => {
      return {
        ...state,
        query: action.payload,
        items: [],
        isLoading: true,
        error: null
      };
    },
    [FETCH_AIRPORT_FEED.SUCCESS]: (state, action) => {
      const { items, totalCount, pageNumber } = action.payload!.data;
      return {
        ...state,
        ...action.payload!.data,
        isLoading: false,
        error: null
      };
    },
    [FETCH_AIRPORT_FEED.ERROR]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload!.error
      };
    },
    [SELECT_AIRPORT_DETAIL.SUCCESS]: (state, action) => {
      return {
        ...state,
        selectedRowIndex: action.payload!.selectedRowIndex
      };
    }
  },
  initialState
);

export default airportFeed;
