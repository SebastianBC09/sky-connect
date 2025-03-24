import { FC } from 'react';
import { Section } from './Section';
import { InfoItem } from './InfoItem';
import { AirportInfoType } from '@/types/airport';
import BaseCard from './BaseCard';

const sectionInfo = {
  icon: '/info-circle.svg',
  sectionTitle: 'Información General',
}

const AirportInfo: FC<AirportInfoType> = ({ iata_code, icao_code, country_name, city_iata_code, phone_number }) => {
  return (
    <BaseCard>
      <div className="h-full p-4 sm:p-5 md:pt-6 md:pb-6 md:pl-8 lg:pt-[1.625rem] lg:pb-[1.625rem] lg:pl-[2.5rem]">
        <Section {...sectionInfo}/>
          <div className='flex flex-col mt-3 md:mt-4 lg:mt-6'>
            <InfoItem label="Código IATA" value={iata_code} />
            <InfoItem label="Código ICAO" value={icao_code} />
            <InfoItem label="País" value={country_name} />
            <InfoItem label="Ciudad IATA" value={city_iata_code} />
            <InfoItem label="Teléfono" value={phone_number} />
          </div>
      </div>
    </BaseCard>
  );
};

export default AirportInfo;
