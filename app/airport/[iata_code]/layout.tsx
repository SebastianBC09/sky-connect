'use client'
import { ReactNode, useEffect, useState } from 'react';

import AppLayout from '@/components/UI/Layout';
import Navigation from '@/components/UI/Navigation';
import { useParams } from 'next/navigation';
import { useAirportStore } from '@/store/airportStore';

export default function AirportLayout({ children }: { children: ReactNode }) {
  const { iata_code } = useParams();
  const {
    setCurrentAirportByIataCode,
    currentAirport,
  } = useAirportStore();

  const [airportLoading, setAirportLoading] = useState(true);

  useEffect(() => {
    const setupAirport = async () => {
      setAirportLoading(true);

      if (iata_code) {
        await setCurrentAirportByIataCode(iata_code as string);
      }
      setAirportLoading(false);
    };

    setupAirport();
  }, [iata_code, setCurrentAirportByIataCode]);

  if (airportLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Cargando...
      </div>
    );
  }
  if (!currentAirport) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Aeropuerto no encontrado
      </div>
    );
  }

  return (
    <AppLayout>
      <div className='flex flex-col gap-6 md:gap-10 lg:gap-[3.75rem] px-4 sm:px-6 md:px-8'>
        <section className='flex flex-col justify-between items-center gap-4 md:gap-6 lg:gap-9 pt-4 md:pt-6'>
          <h1 className="w-fit font-gotham font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent text-center" >
            {currentAirport?.airport_name}
          </h1>
          <Navigation />
        </section>
        <section className="w-full">
            {children}
        </section>
      </div>
    </AppLayout>
  );
}
