import { FC } from 'react';
import Image from 'next/image';

interface SectionProps {
  icon: string;
  sectionTitle: string;
}

export const Section: FC<SectionProps> = ({
  icon,
  sectionTitle,
}) => {
  return (
    <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
      <div className='w-fit'>
        <Image
          className="light:invert w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px]"
          src={icon}
          alt="Info logo"
          width={35}
          height={35}
          priority
        />
      </div>
      <div className='w-fit'>
        <h3 className="font-gotham font-medium text-lg sm:text-xl md:text-2xl lg:text-[2.5rem] bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent">{sectionTitle}</h3>
      </div>
    </div>
  );
};
