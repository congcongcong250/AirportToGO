export enum LatitudeDirectionEnum {
  S = 'S',
  N = 'N'
}

export enum LongitudeDirectionEnum {
  W = 'W',
  E = 'E'
}

export interface AirportEntityModel {
  airportCode: string; // possible enum
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
  city: {
    cityCode: string; // possible enum
    cityName: string;
    timeZoneName: string;
  };
  country: {
    countryCode: string; // possible enum
    countryName: string;
  };
  region: {
    regionCode: string; // possible enum
    regionName: string;
  };
}
