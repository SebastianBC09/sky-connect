import Link from 'next/link';
import { Airport } from '@/types/airport';
import { FC } from 'react';

const AirportCard: FC<Airport> = ({iata_code, airport_name, city_iata_code, country_name}) => {

  return (
    <Link href={`/airport/${iata_code}`} prefetch={false}>
      <div className="border rounded p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <h2 className="font-bold text-lg">{airport_name}</h2>
        <p>{city_iata_code}</p>
        <p>{country_name}</p>
        <p className="text-sm text-gray-500">IATA: {iata_code}</p>
      </div>
    </Link>
  );
}

export default AirportCard
