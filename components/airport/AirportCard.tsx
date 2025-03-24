import { FC } from 'react';
import Image from 'next/image';
import BaseCard from './BaseCard';
import { AirportCardType } from '@/types/airport';

const AirportCard: FC<AirportCardType> = ({ airport_name, country_name, iata_code }) => {
  return (
    <BaseCard href={`/airport/${iata_code}`}>
      <div className="h-full p-3 sm:p-4 md:pt-5 md:pr-5 md:pb-8 md:pl-6 lg:pt-[1.25rem] lg:pr-[1.25rem] lg:pb-[2.75rem] lg:pl-[2.25rem]">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-[2.1875rem]">
          <div className="w-fit">
            <h3 className="font-bold text-base sm:text-lg md:text-xl">{airport_name}</h3>
            <p className="font-normal text-base sm:text-lg md:text-xl">{country_name}</p>
          </div>
          <div className="w-fit">
            <p className="font-gotham font-medium text-xl sm:text-2xl md:text-[2rem] lg:text-[2.625rem] bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent">
              {iata_code}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 lg:top-6 lg:right-6">
        <Image src="/airport.svg" alt="Airport logo" width={30} height={30} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[45px] lg:h-[45px]" priority />
      </div>
    </BaseCard>
  );
};

export default AirportCard;
