import { useEffect, useMemo, useState } from 'react';
import { useAirportStore } from '@/store/airportStore';

const useAirportsPage = () => {
  const { loading, airports, pagination, fetchAllAirports } = useAirportStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    fetchAllAirports();
  }, [fetchAllAirports]);

  const filteredAirports = useMemo(() => {
    const lower = searchTerm.toLowerCase();
    return airports.filter((airport) =>
      airport.airport_name.toLowerCase().includes(lower) ||
      airport.iata_code.toLowerCase().includes(lower)
    );
  }, [airports, searchTerm]);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentAirports = filteredAirports.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredAirports.length / perPage) || 1;

  function handleNext() {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }

  return {
    loading,
    pagination,
    searchTerm,
    setSearchTerm,
    page,
    perPage,
    totalPages,
    handleNext,
    handlePrev,
    currentAirports,
    filteredAirports,
    airports,
  };
};

export default useAirportsPage;
