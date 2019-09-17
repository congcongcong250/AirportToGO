import { processReqQuery } from '../../api/airports';
import { mock } from '../data/mock';

describe('Query param function', () => {
  test('Should only the first value for same key', () => {
    const res = processReqQuery({ a: ['a', 'b'], b: '3' });
    expect(res).toEqual({ a: 'a', b: '3' });
  });
});
