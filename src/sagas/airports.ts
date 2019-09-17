import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import http from '../utils/http';

import { FETCH_AIRPORT_FEED, FETCH_AIRPORT_DETAIL, SELECT_AIRPORT_DETAIL } from '../actions';
import { FetchAirportFeedQueryRequestModel } from '../reducers/feed';
import { ReduxAction } from '../store/models';
import { Store } from '../reducers';
import { AirportEntityModel } from '../data/models';
import { push } from 'connected-react-router';

const fetchAirportFeed = (query?: FetchAirportFeedQueryRequestModel) => {
  const uri = '/airports';
  return http.get(uri, query);
};

const fetchAirportDetail = (airportCode: string) => {
  const uri = '/airports';
  return http.get(uri, { airportCode });
};

export function* sagaFetchAirportFeed(action: ReduxAction<FetchAirportFeedQueryRequestModel>) {
  try {
    const data = yield call(fetchAirportFeed, action.payload);
    yield put({
      type: FETCH_AIRPORT_FEED.SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    yield all([
      yield put({ type: FETCH_AIRPORT_FEED.ERROR, payload: { error: error.message } }) //
    ]);
  }
}

export function* sagaFetchAirportDetail(action: ReduxAction<{ airportCode: string }>) {
  try {
    const data = yield call(fetchAirportDetail, action.payload!.airportCode);
    const airport = data[0];
    yield put({
      type: FETCH_AIRPORT_DETAIL.SUCCESS,
      payload: {
        data: airport
      }
    });
  } catch (error) {
    yield all([
      yield put({ type: FETCH_AIRPORT_DETAIL.ERROR, payload: { error: error.message } }) //
    ]);
  }
}

const getAirports = (state: Store) => state.feed.items;

export function* sagaSelectAirportDetail(action: ReduxAction<{ airportCode: string }>) {
  const code = action.payload!.airportCode;
  const items: Array<AirportEntityModel> = yield select(getAirports);
  const selectedItem = items.find(a => a.airportCode === code);
  yield put({ type: SELECT_AIRPORT_DETAIL.SUCCESS, payload: selectedItem });
  yield put(push(`/feed/${code}`));
}

export default [
  takeLatest(FETCH_AIRPORT_FEED.ACTION, sagaFetchAirportFeed), //
  takeLatest(FETCH_AIRPORT_DETAIL.ACTION, sagaFetchAirportDetail),
  takeLatest(SELECT_AIRPORT_DETAIL.ACTION, sagaSelectAirportDetail)
];
