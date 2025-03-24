import { FC } from 'react';
import Image from 'next/image';
import BaseCard from './BaseCard';
import { AirportCardType } from '@/types/airport';

const AirportCard: FC<AirportCardType> = ({airport_name, country_name, iata_code}) => {
  return (
    <BaseCard
    >
      <div className="h-full pt-[1.25rem] pr-[1.25rem] pb-[2.75rem] pl-[2.25rem]">
        <div className='flex flex-col gap-[2.1875rem]'>
          <div className='w-fit'>
            <h3 className="font-bold text-xl">{airport_name}</h3>
            <p className="font-normal text-xl">{country_name}</p>
          </div>
          <div className='w-fit'>
            <p className="font-gotham font-medium text-[2.625rem] bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent">{iata_code}</p>

          </div>
        </div>
      </div>
      <div className="absolute top-6 right-6 z-20">
        <Image
          src="/airport.svg"
          alt="Airport logo"
          width={45}
          height={45}
          priority
        />
      </div>
    </BaseCard>
  );
};

export default AirportCard;
