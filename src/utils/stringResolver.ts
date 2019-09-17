import { CityModel } from '../data/models';

export const resolveCityName = (city: CityModel) => {
  // default value as guard in case there is unfound dirty data
  const { cityName = '', cityCode = '' } = city;
  return `${cityName}(${cityCode})`;
};
