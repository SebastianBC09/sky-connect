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
    <div className="flex flex-row items-center gap-5">
      <div className='w-fit'>
        <Image
          className="light:invert"
          src={icon}
          alt="Info logo"
          width={35}
          height={35}
          priority
        />
      </div>
      <div className='w-fit'>
        <h3 className="font-gotham font-medium text-[2.5rem] bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent">{sectionTitle}</h3>
      </div>
    </div>
  );
};
