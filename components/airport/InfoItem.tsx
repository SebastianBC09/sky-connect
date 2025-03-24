import { FC } from 'react';

interface InfoItemProps {
  label: string;
  value: string | null;
}

export const InfoItem: FC<InfoItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3 lg:gap-5 mb-2 sm:mb-3">
      <span className="font-bold text-base sm:text-lg md:text-xl lg:text-3xl">{label}:</span>
      <span className="font-normal text-base sm:text-lg md:text-xl lg:text-3xl">{value || 'No disponible'}</span>
    </div>
  );
};
