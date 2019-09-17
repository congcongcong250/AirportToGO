import { handleActions } from 'redux-actions';

import { SELECT_AIRPORT_DETAIL, FETCH_AIRPORT_DETAIL } from '../actions';
import { AirportEntityModel } from '../data/models';

export interface AirportDetailState {
  isLoading: boolean;
  data?: AirportEntityModel;
  error?: string | null;
}

const initialState = {
  data: undefined,
  isLoading: true,
  error: null
};

const airportDetail = handleActions<AirportDetailState, any>(
  {
    [SELECT_AIRPORT_DETAIL.ACTION]: (state, action) => {
      return {
        ...initialState
      };
    },
    [SELECT_AIRPORT_DETAIL.SUCCESS]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    },
    [FETCH_AIRPORT_DETAIL.SUCCESS]: (state, action) => {
      return {
        data: action.payload.data ? { ...action.payload.data } : null,
        isLoading: false
      };
    },
    [FETCH_AIRPORT_DETAIL.ERROR]: (state, action) => {
      return {
        data: null,
        error: action.payload.error,
        isLoading: false
      };
    }
  },
  initialState
);

export default airportDetail;
