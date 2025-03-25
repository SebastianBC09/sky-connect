'use client';
import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import AppLayout from '@/components/UI/Layout';
import SearchBar from '@/components/UI/Searchbar';
import AirportCard from '@/components/airport/AirportCard';
import useAirportsPage from '@/hooks/useAirportsPage';
import { useRouter, useSearchParams } from 'next/navigation';

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
    setPage,
    visiblePages,
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

  const buttonVariants: Variants = {
    rest: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
    },
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="h-full w-full flex items-center justify-center">
          <p className="text-center text-white text-lg">Cargando aeropuertos...</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="w-full flex flex-col">
        <div className="mb-6 sm:mb-10 md:mb-16">
          <SearchBar
            variant="results"
            initialValue={searchTerm}
            onSearch={handleSearch}
          />
        </div>

        {currentAirports.length === 0 ? (
          <div className="w-full flex items-center justify-center py-8">
            <p className="text-center text-white text-lg">
              No se encontraron resultados para &quot;{searchTerm}&quot;.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8 md:mt-10">
              <motion.button
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={handlePrev}
                disabled={page === 1}
                className="
                  w-full sm:w-auto
                  min-w-28
                  h-10 sm:h-12
                  rounded-lg
                  py-1 sm:py-2
                  px-4 sm:px-6
                  disabled:opacity-50
                  text-white
                  font-bold
                  bg-[linear-gradient(0deg,_#0060FF,_#0060FF)]
                "
              >
                Anterior
              </motion.button>
              {visiblePages.map((p) => (
                <motion.button
                  key={p}
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setPage(p)}
                  className={`
                    w-full
                    h-10
                    sm:w-12
                    sm:h-12
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    text-white
                    font-bold
                    ${
                      p === page
                        ? 'bg-[linear-gradient(0deg,_#0040CC,_#0040CC)]'
                        : 'bg-[linear-gradient(0deg,_#0060FF,_#0060FF)]'
                    }
                  `}
                >
                  {p}
                </motion.button>
              ))}
              <motion.button
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={handleNext}
                disabled={page === totalPages || currentAirports.length === 0}
                className="
                  w-full sm:w-auto
                  min-w-28
                  h-10 sm:h-12
                  rounded-lg
                  py-1 sm:py-2
                  px-4 sm:px-6
                  disabled:opacity-50
                  text-white
                  font-bold
                  bg-[linear-gradient(0deg,_#0060FF,_#0060FF)]
                "
              >
                Siguiente
              </motion.button>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
}
