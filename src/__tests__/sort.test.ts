import { sortAirport } from '../../api/airports';
import { mock } from '../data/mock';

describe('Sorting function', () => {
  test('Should give correct order based on key', () => {
    const res = sortAirport(mock, 'airportCode', 'asec');

    expect(res[0].airportCode).toBe('AAA');
    expect(res[res.length - 1].airportCode).toBe('AAY');
  });
  test('Should give desc order', () => {
    const res = sortAirport(mock, 'airportCode', 'desc');

    expect(res[0].airportCode).toBe('AAY');
    expect(res[res.length - 1].airportCode).toBe('AAA');
  });
});
