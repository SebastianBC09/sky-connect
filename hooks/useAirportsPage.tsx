import { useEffect, useState } from 'react'
import { useAirportStore } from '@/store/airportStore';

const useAirportsPage = () => {
  const { loading, airports, pagination, fetchAllAirports } = useAirportStore();
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    fetchAllAirports();
  }, [fetchAllAirports]);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentAirports = airports.slice(startIndex, endIndex);

  const totalPages = Math.ceil(airports.length / perPage) || 1;

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
    airports,
    currentAirports,
    handleNext,
    handlePrev,
    page,
    pagination,
    totalPages
  }
}

export default useAirportsPage
