import feedReducer from '../../reducers/feed';

import { selectAirportDetail, SELECT_AIRPORT_DETAIL, FETCH_AIRPORT_FEED } from '../../actions';

describe('Feed reducer', () => {
  test('Fetch process', () => {
    const loading = feedReducer(
      {
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
      },
      { type: FETCH_AIRPORT_FEED.ACTION, payload: { pageNumber: 9, eticketableAirport: true } }
    );
    expect(loading.isLoading).toBe(true);
    const loadingCopy = loading;
    const res = feedReducer(loading, { type: FETCH_AIRPORT_FEED.SUCCESS, payload: { data: [] } });
    expect(loading).toBe(loadingCopy);
    expect(res.query).toEqual({ pageNumber: 9, eticketableAirport: true });
  });
});
