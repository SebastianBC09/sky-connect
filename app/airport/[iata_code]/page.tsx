'use client';
import { useAirportStore } from '@/store/airportStore';
import AirportInfo from '@/components/airport/AirportInfo';

export default function Page() {
  const { currentAirport } = useAirportStore();
  if (!currentAirport) {
    return <div>Cargando o no se encontró el aeropuerto</div>;
  }
  const { iata_code, icao_code, country_name, city_iata_code, phone_number} = currentAirport
  return (
    <div>
      <AirportInfo
        iata_code={iata_code}
        icao_code={icao_code}
        country_name={country_name}
        city_iata_code={city_iata_code}
        phone_number={phone_number}
      />
    </div>
  );
}
