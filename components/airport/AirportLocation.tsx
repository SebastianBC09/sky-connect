import { FC } from 'react';
import { AirportLocationType } from '@/types/airport';
import BaseCard from './BaseCard';
import { InfoItem } from './InfoItem';
import { Section } from './Section';

const sectionInfo = {
  icon: '/map-point.svg',
  sectionTitle: 'Ubicacion',
}

const AirportLocation: FC<AirportLocationType> = ({ latitude, longitude, geoname_id }) => {
  return (
    <BaseCard>
      <div className="h-full p-4 sm:p-5 md:pt-6 md:pb-6 md:pl-8 lg:pt-[1.625rem] lg:pb-[1.625rem] lg:pl-[2.5rem]">
        <Section {...sectionInfo}/>
          <div className='flex flex-col mt-3 md:mt-4 lg:mt-6'>
            <InfoItem label="Latitud" value={latitude} />
            <InfoItem label="Longitud" value={longitude} />
            <InfoItem label="ID Geoname" value={geoname_id} />
          </div>
      </div>
    </BaseCard>
  );
};

export default AirportLocation;
