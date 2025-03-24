'use client';
import AppLayout from '@/components/UI/Layout';
import AirportCard from '@/components/airport/AirportCard';
import useAirportsPage from '@/hooks/useAirportsPage';

export default function AirportsPage() {
  const {airports, currentAirports, page, totalPages, handlePrev, handleNext} = useAirportsPage();
  return (
    <AppLayout>
      <div>
        {airports.length === 0 ? (
          <p className="text-center mt-10">No hay aeropuertos disponibles.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {currentAirports.map((airport) => (
                <AirportCard
                  key={airport.iata_code}
                  airport_name={airport.airport_name}
                  country_name={airport.country_name}
                  iata_code={airport.iata_code}
                  id={airport.iata_code}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="
                  w-[131px]
                  h-[47.1px]
                  rounded-[9.4px]
                  py-[7.05px]
                  px-[28.2px]
                  gap-[14.1px]
                  disabled:opacity-50
                  text-white
                  font-bold
                  bg-[linear-gradient(0deg,_#0060FF,_#0060FF)]
                  z-20
                "
              >
                Anterior
              </button>

              <button
                onClick={handleNext}
                disabled={page === totalPages || airports.length === 0}
                className="
                  w-[131px]
                  h-[47.1px]
                  rounded-[9.4px]
                  py-[7.05px]
                  px-[28.2px]
                  gap-[14.1px]
                  disabled:opacity-50
                  text-white
                  font-bold
                  bg-[linear-gradient(0deg,_#0060FF,_#0060FF)]
                  z-20
                "
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
}
