export enum LatitudeDirectionEnum {
  S = 'S',
  N = 'N'
}

export enum LongitudeDirectionEnum {
  W = 'W',
  E = 'E'
}

export interface CityModel {
  cityCode: string; // possible enum
  cityName: string;
  timeZoneName: string;
}

export interface AirportEntityModel {
  airportCode: string; // possible enum, we treat it as primary key
  internationalAirport: boolean;
  domesticAirport: boolean;
  regionalAirport: boolean;
  onlineIndicator: boolean;
  eticketableAirport: boolean;
  location: {
    aboveSeaLevel: number; // could be -9999 for some reason
    latitude: number;
    latitudeRadius: number;
    longitude: number;
    longitudeRadius: number;
    latitudeDirection?: LatitudeDirectionEnum;
    longitudeDirection?: LongitudeDirectionEnum;
  };
  airportName: string;
  city: CityModel;
  country: {
    countryCode: string; // possible enum
    countryName: string;
  };
  region: {
    regionCode: string; // possible enum
    regionName: string;
  };
}
