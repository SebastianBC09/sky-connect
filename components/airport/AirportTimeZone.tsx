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
      <div className="h-full pt-[1.625rem] pb-[1.625rem] pl-[2.5rem]">
      <Section {...sectionInfo}/>
      <div className='flex flex-col'>
      </div>
        <InfoItem label="Zona Horaria" value={timezone} />
        <InfoItem label="GMT" value={gmt} />
      </div>
    </BaseCard>
  );
};

export default AirportTimeZone;
