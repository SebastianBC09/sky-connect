'use client'
import { ReactNode, useEffect } from 'react';

import AppLayout from '@/components/UI/Layout';
import Navigation from '@/components/UI/Navigation';
import { useParams } from 'next/navigation';
import { useAirportStore } from '@/store/airportStore';

export default function AirportLayout({ children }: { children: ReactNode }) {
  const { iata_code } = useParams();
  const {
    setCurrentAirportByIataCode,
    currentAirport,
    loading,
    airports,
    getAirportByIataCode
  } = useAirportStore();

  useEffect(() => {
    const setupAirport = async () => {
      if (iata_code && (!currentAirport || currentAirport.iata_code !== iata_code)) {
        const airport = getAirportByIataCode(iata_code as string);
        console.log(airport)
        if (airport) {
          await setCurrentAirportByIataCode(iata_code as string);
        }
      }
    };

    setupAirport();
  }, [iata_code, airports.length, currentAirport, setCurrentAirportByIataCode, getAirportByIataCode]);


  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Cargando...</div>;
  }

  if (!currentAirport && !loading) {
    return <div className="flex justify-center items-center min-h-screen">Aeropuerto no encontrado</div>;
  }

  return (
    <AppLayout>
      <div className='flex flex-col gap-[3.75rem]'>
        <section className='flex flex-col justify-between items-center gap-9'>
          <h1 className="relative w-fit font-gotham font-medium text-[5rem] bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent" >
            {currentAirport?.airport_name}
          </h1>
          <Navigation />
        </section>
        <main>
            {children}
        </main>
      </div>
    </AppLayout>
  );
}
