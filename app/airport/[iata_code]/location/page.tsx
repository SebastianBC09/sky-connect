'use client';
import { useAirportStore } from '@/store/airportStore';
import AirportLocation from '@/components/airport/AirportLocation';

export default function Page() {
  const { currentAirport } = useAirportStore();
  if (!currentAirport) {
    return <div>Cargando o no se encontró el aeropuerto</div>;
  }
  const { latitude, longitude, geoname_id } = currentAirport
  return (
    <div>
      <AirportLocation latitude={latitude} longitude={longitude} geoname_id={geoname_id} />
    </div>
  );
}
