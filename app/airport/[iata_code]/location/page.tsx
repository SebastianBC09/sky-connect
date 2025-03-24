'use client';
import { useAirportStore } from '@/store/airportStore';
import AirportLocation from '@/components/airport/AirportLocation';
import AirportMap from '@/components/airport/AirportMap';

export default function Page() {
  const { currentAirport } = useAirportStore();
  if (!currentAirport) {
    return <div>Cargando o no se encontró el aeropuerto</div>;
  }
  const { latitude, longitude, geoname_id } = currentAirport
  return (
    <div className="flex flex-col gap-[1.875rem]">
      <AirportLocation latitude={latitude} longitude={longitude} geoname_id={geoname_id} />
      <AirportMap latitude={latitude} longitude={longitude} />
    </div>
  );
}
