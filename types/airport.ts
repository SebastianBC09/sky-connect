export interface Airport {
  id: string;
  gmt: string;
  airport_id: string;
  iata_code: string;
  city_iata_code: string;
  icao_code: string;
  country_iso2: string;
  geoname_id: string | null;
  latitude: string;
  longitude: string;
  airport_name: string;
  country_name: string;
  phone_number: string | null;
  timezone: string;
}

export type AirportCardType  = Pick<Airport, 'airport_name' | 'country_name' | 'iata_code' | 'id'>;

export type AirportInfoType = Pick<Airport, 'iata_code' | 'icao_code' | 'country_name' | 'city_iata_code' | 'phone_number'>;

export type AirportLocationType = Pick<Airport, 'latitude' | 'longitude' | 'geoname_id'>;

export type AirportTimezoneType = Pick<Airport, 'gmt' | 'timezone'>;

export type AirportLocalTimeType = Pick<Airport, 'timezone'>;
