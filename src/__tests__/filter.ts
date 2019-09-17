import { filterAirport } from '../../api/airports';
import { mock } from '../data/mock';

describe('Filtering function', () => {
  test('filter simple key', () => {
    const res = filterAirport(mock, { airportCode: 'AAA' });
    expect(res.length).toBe(1);
    expect(res[0].airportCode).toBe('AAA');
  });
  test('filter should be case insensitive', () => {
    const res = filterAirport(mock, { airportCode: 'AaA' });
    expect(res.length).toBe(1);
    expect(res[0].airportCode).toBe('AAA');
  });
  test('filter with nested key', () => {
    const countryCode = 'DK';
    const res = filterAirport(mock, { 'country.countryCode': countryCode });
    expect(res.length).toBe(2);
    expect(res[0].country.countryCode).toBe(countryCode);
  });
});
