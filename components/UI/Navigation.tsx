'use client';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const { iata_code } = useParams();
  const pathname = usePathname();

  const tabs = [
    { id: '', name: 'General' },
    { id: 'location', name: 'Ubicación' },
    { id: 'timezone', name: 'Zona Horaria' },
    { id: 'stats', name: 'Estadísticas' },
  ];

  function isActiveTab(tabId: string) {
    if (tabId === '') {
      return (
        pathname === `/airport/${iata_code}` ||
        pathname === `/airport/${iata_code}/`
      );
    } else {
      return pathname.startsWith(`/airport/${iata_code}/${tabId}`);
    }
  }

  return (
    <div className="w-full bg-[#3F495F] px-2 sm:px-4 py-2 rounded-[9.4px] shadow-md">
      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        {tabs.map((tab) => {
          const href = tab.id
            ? `/airport/${iata_code}/${tab.id}`
            : `/airport/${iata_code}`;

          const active = isActiveTab(tab.id);

          return (
            <Link
              key={tab.id}
              href={href}
              className={`
                flex-1 min-w-24
                h-10 sm:h-12 md:h-16
                flex justify-center items-center
                font-bold
                text-sm sm:text-base
                rounded-lg
                transition-all duration-200
                ${active
                  ? 'bg-[linear-gradient(0deg,_#0060FF,_#0060FF)] text-white'
                  : 'text-[#A2A2A2] hover:bg-gray-600'
                }
              `}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
