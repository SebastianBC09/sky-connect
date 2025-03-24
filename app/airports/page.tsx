'use client';
import AppLayout from '@/components/UI/Layout';
import SearchBar from '@/components/UI/Searchbar';
import AirportCard from '@/components/airport/AirportCard';
import useAirportsPage from '@/hooks/useAirportsPage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    loading,
    searchTerm,
    setSearchTerm,
    currentAirports,
    handlePrev,
    handleNext,
    page,
    totalPages,
  } = useAirportsPage();

  const initialSearch = searchParams.get('search') || '';

  useEffect(() => {
    if (initialSearch !== searchTerm) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch, searchTerm, setSearchTerm]);

  const handleSearch = (term: string) => {
    router.push(`/airports?search=${encodeURIComponent(term)}`);
  };

  if (loading) {
    return (
      <AppLayout>
        <p className="text-center mt-10">Cargando aeropuertos...</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="mb-16">
        <SearchBar
          variant="results"
          initialValue={searchTerm}
          onSearch={handleSearch}
        />
      </div>

      {currentAirports.length === 0 ? (
        <p className="text-center mt-10">
          No se encontraron resultados para &quot;{searchTerm}&quot;.
        </p>
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
              "
            >
              Anterior
            </button>

            <span>
              Página {page} de {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={page === totalPages || currentAirports.length === 0}
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
              "
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </AppLayout>
  );
}
