import { FC } from 'react';
import { AirportTimezoneType } from '@/types/airport';
import BaseCard from './BaseCard';
import { Section } from './Section';
import { InfoItem } from './InfoItem';

const sectionInfo = {
  icon: '/global.svg',
  sectionTitle: 'Zona Horaria',
}

const AirportTimeZone: FC<AirportTimezoneType> = ({ timezone, gmt }) => {
  return (
    <BaseCard>
      <div className="h-full p-4 sm:p-5 md:pt-6 md:pb-6 md:pl-8 lg:pt-[1.625rem] lg:pb-[1.625rem] lg:pl-[2.5rem]">
        <Section {...sectionInfo}/>
        <div className='flex flex-col mt-3 md:mt-4 lg:mt-6'>
          <InfoItem label="Zona Horaria" value={timezone} />
          <InfoItem label="GMT" value={gmt} />
        </div>
      </div>
    </BaseCard>
  );
};

export default AirportTimeZone;
