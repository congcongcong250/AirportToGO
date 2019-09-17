import { createAction } from 'redux-actions';
import { defineAction } from 'redux-define';
import { ERROR, SUCCESS } from '../utils/constants';

export const FETCH_AIRPORT_FEED = defineAction('FETCH_AIRPORT_FEED', [ERROR, SUCCESS]);
export const fetchAirportFeed = createAction(FETCH_AIRPORT_FEED.ACTION);

export const FETCH_AIRPORT_DETAIL = defineAction('FETCH_AIRPORT_DETAIL', [ERROR, SUCCESS]);
export const fetchAirportDetail = createAction<{ airportCode: string }>(FETCH_AIRPORT_DETAIL.ACTION);

export const SELECT_AIRPORT_DETAIL = defineAction('SELECT_AIRPORT_DETAIL', [SUCCESS]);
export const selectAirportDetail = createAction<{ airportCode: string }>(SELECT_AIRPORT_DETAIL.ACTION);
