import { AirportEntityModel, LatitudeDirectionEnum, LongitudeDirectionEnum } from './models';

const mock: Array<AirportEntityModel> = [
  {
    airportCode: 'AAA',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 17.25,
      latitudeRadius: -0.304,
      longitude: 145.3,
      longitudeRadius: -2.5395,
      latitudeDirection: LatitudeDirectionEnum.S,
      longitudeDirection: LongitudeDirectionEnum.W
    },
    airportName: 'Anaa',
    city: { cityCode: 'AAA', cityName: 'Anaa', timeZoneName: 'Pacific/Tahiti' },
    country: { countryCode: 'PF', countryName: 'French Polynesia' },
    region: { regionCode: 'SP', regionName: 'South Pacific' }
  },
  {
    airportCode: 'AAB',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 26.45,
      latitudeRadius: -0.4669,
      longitude: 141,
      longitudeRadius: 2.4609,
      latitudeDirection: LatitudeDirectionEnum.S,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Arrabury',
    city: { cityCode: 'AAB', cityName: 'Arrabury', timeZoneName: 'Australia/Brisbane' },
    country: { countryCode: 'AU', countryName: 'Australia' },
    region: { regionCode: 'AU', regionName: 'Australia' }
  },
  {
    airportCode: 'AAC',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: true,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 31.1,
      latitudeRadius: 0.544,
      longitude: 33.5,
      longitudeRadius: 0.5905,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Al Arish',
    city: { cityCode: 'AAC', cityName: 'Al Arish', timeZoneName: 'Africa/Cairo' },
    country: { countryCode: 'EG', countryName: 'Egypt' },
    region: { regionCode: 'AF', regionName: 'Africa' }
  },
  {
    airportCode: 'AAE',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: 16,
      latitude: 36.49,
      latitudeRadius: 0.6426,
      longitude: 7.48,
      longitudeRadius: 0.1361,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Annaba',
    city: { cityCode: 'AAE', cityName: 'Annaba', timeZoneName: 'Africa/Algiers' },
    country: { countryCode: 'DZ', countryName: 'Algeria' },
    region: { regionCode: 'AF', regionName: 'Africa' }
  },
  {
    airportCode: 'AAH',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: 1000,
      latitude: 50.46,
      latitudeRadius: 0.886,
      longitude: 6.06,
      longitudeRadius: 0.1065,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Aachen',
    city: { cityCode: 'AAH', cityName: 'Aachen', timeZoneName: 'Europe/Berlin' },
    country: { countryCode: 'DE', countryName: 'Germany' },
    region: { regionCode: 'EU', regionName: 'Europe' }
  },
  {
    airportCode: 'AAI',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 12.55,
      latitudeRadius: -0.2254,
      longitude: 46.55,
      longitudeRadius: -0.8189,
      latitudeDirection: LatitudeDirectionEnum.S,
      longitudeDirection: LongitudeDirectionEnum.W
    },
    airportName: 'Arraias',
    city: { cityCode: 'AAI', cityName: 'Arraias', timeZoneName: 'America/Sao_Paulo' },
    country: { countryCode: 'BR', countryName: 'Brazil' },
    region: { regionCode: 'AM', regionName: 'Americas' }
  },
  {
    airportCode: 'AAK',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 0.1,
      latitudeRadius: 0.0029,
      longitude: 173.35,
      longitudeRadius: 3.0296,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Aranuka',
    city: { cityCode: 'AAK', cityName: 'Aranuka', timeZoneName: 'Pacific/Auckland' },
    country: { countryCode: 'KI', countryName: 'Kiribati' },
    region: { regionCode: 'SP', regionName: 'South Pacific' }
  },
  {
    airportCode: 'AAL',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: true,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: 10,
      latitude: 57.05,
      latitudeRadius: 0.9963,
      longitude: 9.51,
      longitudeRadius: 0.1719,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Aalborg',
    city: { cityCode: 'AAL', cityName: 'Aalborg', timeZoneName: 'Europe/Copenhagen' },
    country: { countryCode: 'DK', countryName: 'Denmark' },
    region: { regionCode: 'EU', regionName: 'Europe' }
  },
  {
    airportCode: 'AAM',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: true,
    eticketableAirport: false,
    location: { aboveSeaLevel: -99999, latitude: 0, latitudeRadius: 0, longitude: 0, longitudeRadius: 0 },
    airportName: 'Mala Mala',
    city: { cityCode: 'AAM', cityName: 'Mala Mala', timeZoneName: 'Africa/Johannesburg' },
    country: { countryCode: 'ZA', countryName: 'South Africa' },
    region: { regionCode: 'AF', regionName: 'Africa' }
  },
  {
    airportCode: 'AAN',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: true,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 24.14,
      latitudeRadius: 0.423,
      longitude: 55.46,
      longitudeRadius: 0.9733,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Al Ain',
    city: { cityCode: 'AAN', cityName: 'Al Ain', timeZoneName: 'Asia/Dubai' },
    country: { countryCode: 'AE', countryName: 'United Arab Emirates' },
    region: { regionCode: 'ME', regionName: 'Middle East' }
  },
  {
    airportCode: 'AAO',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 9.3,
      latitudeRadius: 0.1658,
      longitude: 64.28,
      longitudeRadius: -1.1252,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.W
    },
    airportName: 'Anaco',
    city: { cityCode: 'AAO', cityName: 'Anaco', timeZoneName: 'America/Caracas' },
    country: { countryCode: 'VE', countryName: 'Venezuela' },
    region: { regionCode: 'AM', regionName: 'Americas' }
  },
  {
    airportCode: 'AAQ',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: true,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: 0,
      latitude: 44.54,
      latitudeRadius: 0.7837,
      longitude: 37.2,
      longitudeRadius: 0.6516,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Anapa',
    city: { cityCode: 'AAQ', cityName: 'Anapa', timeZoneName: 'Europe/Moscow' },
    country: { countryCode: 'RU', countryName: 'Russian Fed' },
    region: { regionCode: 'EU', regionName: 'Europe' }
  },
  {
    airportCode: 'AAR',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: true,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 56.18,
      latitudeRadius: 0.9826,
      longitude: 10.15,
      longitudeRadius: 0.1789,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Aarhus',
    city: { cityCode: 'AAR', cityName: 'Aarhus', timeZoneName: 'Europe/Copenhagen' },
    country: { countryCode: 'DK', countryName: 'Denmark' },
    region: { regionCode: 'EU', regionName: 'Europe' }
  },
  {
    airportCode: 'AAS',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: { aboveSeaLevel: -99999, latitude: 0, latitudeRadius: 0, longitude: 0, longitudeRadius: 0 },
    airportName: 'Apalapsili',
    city: { cityCode: 'AAS', cityName: 'Apalapsili', timeZoneName: 'Asia/Jayapura' },
    country: { countryCode: 'ID', countryName: 'Indonesia' },
    region: { regionCode: 'AS', regionName: 'Asia' }
  },
  {
    airportCode: 'AAT',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 47.48,
      latitudeRadius: 0.8343,
      longitude: 88.07,
      longitudeRadius: 1.5379,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Altay',
    city: { cityCode: 'AAT', cityName: 'Altay', timeZoneName: 'Asia/Shanghai' },
    country: { countryCode: 'CN', countryName: 'China' },
    region: { regionCode: 'AS', regionName: 'Asia' }
  },
  {
    airportCode: 'AAU',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 13.26,
      latitudeRadius: -0.2345,
      longitude: 172.35,
      longitudeRadius: -3.0121,
      latitudeDirection: LatitudeDirectionEnum.S,
      longitudeDirection: LongitudeDirectionEnum.W
    },
    airportName: 'Asau',
    city: { cityCode: 'AAU', cityName: 'Asau', timeZoneName: 'Pacific/Apia' },
    country: { countryCode: 'WS', countryName: 'Samoa' },
    region: { regionCode: 'SP', regionName: 'South Pacific' }
  },
  {
    airportCode: 'AAV',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 6.5,
      latitudeRadius: 0.1193,
      longitude: 124.4,
      longitudeRadius: 2.1758,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Alah',
    city: { cityCode: 'AAV', cityName: 'Alah', timeZoneName: 'Asia/Manila' },
    country: { countryCode: 'PH', countryName: 'Philippines' },
    region: { regionCode: 'AS', regionName: 'Asia' }
  },
  {
    airportCode: 'AAX',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 19.37,
      latitudeRadius: -0.3424,
      longitude: 46.5,
      longitudeRadius: -0.8174,
      latitudeDirection: LatitudeDirectionEnum.S,
      longitudeDirection: LongitudeDirectionEnum.W
    },
    airportName: 'Araxa',
    city: { cityCode: 'AAX', cityName: 'Araxa', timeZoneName: 'America/Sao_Paulo' },
    country: { countryCode: 'BR', countryName: 'Brazil' },
    region: { regionCode: 'AM', regionName: 'Americas' }
  },
  {
    airportCode: 'AAY',
    internationalAirport: false,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    eticketableAirport: false,
    location: {
      aboveSeaLevel: -99999,
      latitude: 16.12,
      latitudeRadius: 0.2827,
      longitude: 52.16,
      longitudeRadius: 0.9122,
      latitudeDirection: LatitudeDirectionEnum.N,
      longitudeDirection: LongitudeDirectionEnum.E
    },
    airportName: 'Al Ghaydah',
    city: { cityCode: 'AAY', cityName: 'Al Ghaydah', timeZoneName: 'Asia/Aden' },
    country: { countryCode: 'YE', countryName: 'Yemen Republic Of' },
    region: { regionCode: 'EU', regionName: 'Europe' }
  }
];

export { mock };
