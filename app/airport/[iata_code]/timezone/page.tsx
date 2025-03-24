'use client';
import { useAirportStore } from '@/store/airportStore';
import AirportTimeZone from '@/components/airport/AirportTimeZone';

export default function Page() {
  const { currentAirport } = useAirportStore();
  if (!currentAirport) {
    return <div>Cargando o no se encontró el aeropuerto</div>;
  }
  const { gmt, timezone} = currentAirport
  return (
    <div>
      <AirportTimeZone gmt={gmt} timezone={timezone}  />
    </div>
  );
}
