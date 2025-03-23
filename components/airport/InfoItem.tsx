import { FC } from 'react';

interface InfoItemProps {
  label: string;
  value: string | null ;
}

export const InfoItem: FC<InfoItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-row gap-5">
      <span className="font-bold text-3xl">{label}:</span>
      <span className="font-normal text-3xl">{value || 'No disponible'}</span>
    </div>
  );
};
