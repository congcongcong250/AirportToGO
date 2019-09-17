import { all, call, put, takeLatest } from 'redux-saga/effects';

import http from '../utils/http';

import { FETCH_AIRPORT_FEED, FETCH_AIRPORT_DETAIL } from '../actions';
import { FetchAirportFeedQueryRequestModel } from '../reducers/feed';
import { ReduxAction } from '../store/models';

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
      yield put({ type: FETCH_AIRPORT_FEED.ERROR, payload: { error } }) //
    ]);
  }
}

export function* sagaFetchAirportDetail(action: ReduxAction<{ airportCode: string }>) {
  try {
    const data = yield call(fetchAirportDetail, action.payload!.airportCode);

    yield put({
      type: FETCH_AIRPORT_DETAIL.SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    yield all([
      yield put({ type: FETCH_AIRPORT_DETAIL.ERROR, payload: { error } }) //
    ]);
  }
}

export default [
  takeLatest(FETCH_AIRPORT_FEED.ACTION, sagaFetchAirportFeed), //
  takeLatest(FETCH_AIRPORT_DETAIL.ACTION, sagaFetchAirportDetail)
];
