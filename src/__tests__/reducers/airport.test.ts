import detailReducer from '../../reducers/detail';

import { selectAirportDetail, SELECT_AIRPORT_DETAIL } from '../../actions';

describe('Detail reducer', () => {
  test('should be set to correct value if selected', () => {
    const res = detailReducer({ data: undefined, error: 'Have error', isLoading: false }, { type: SELECT_AIRPORT_DETAIL.SUCCESS, payload: { test: true } });
    expect(res).toEqual({ data: { test: true }, error: null, isLoading: false });
  });
});
