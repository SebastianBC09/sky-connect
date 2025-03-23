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
      <div className="h-full pt-[1.625rem] pb-[1.625rem] pl-[2.5rem]">
        <Section {...sectionInfo}/>
          <div className='flex flex-col'>
            <InfoItem label="Latitud" value={latitude} />
            <InfoItem label="Longitud" value={longitude} />
            <InfoItem label="ID Geoname" value={geoname_id} />
          </div>
      </div>
    </BaseCard>
  );
};

export default AirportLocation;
