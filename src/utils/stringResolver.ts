import { CityModel } from '../data/models';

export const resolveCityName = (city: CityModel) => {
  // default value as guard in case there is unfound dirty data
  const { timeZoneName = '', cityName = '' } = city;
  return `${timeZoneName.split('/')[1]} ${cityName}`;
};
