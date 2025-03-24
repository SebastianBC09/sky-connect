'use client';
import { FC, useEffect, useState } from 'react';

interface SearchBarProps {
  initialValue?: string;
  onSearch: (term: string) => void;
  variant?: 'home' | 'results';
}

const SearchBar: FC<SearchBarProps> = ({
    initialValue = '',
    onSearch,
    variant = 'home'
  }) => {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (variant === 'results') {
    return (
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 md:gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent whitespace-nowrap">
          SkyConnect Explorer
        </h2>
        <div className="flex flex-col sm:flex-row items-center lg:w-[69rem] gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Buscar aeropuertos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="
              w-full
              flex-1
              px-4 py-2
              bg-white
              text-[#006FEE]
              text-base sm:text-lg
              rounded-full
              border-none
              shadow-md
              focus:shadow-lg
              outline-none
              transition-shadow
              duration-300
            "
          />
          <button
            onClick={handleSearch}
            className="
              w-full
              sm:w-auto
              sm:min-w-24
              h-10 sm:h-12
              flex
              items-center
              justify-center
              px-4 sm:px-6
              rounded-xl
              font-medium
              text-white
              border-[1px]
              cursor-pointer
              transition-all
              duration-300
              bg-gradient-to-r
              from-[rgba(0,96,255,0.8)]
              to-[rgba(0,255,231,0.8)]
              hover:-translate-y-1
              hover:shadow-lg
              disabled:opacity-70
              disabled:cursor-wait
            "
          >
            Buscar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <input
        type="text"
        placeholder="Buscar aeropuertos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full max-w-[48.75rem] px-3 py-2 bg-white border-none rounded-full text-base sm:text-lg text-[#006FEE] shadow-md focus:shadow-lg outline-none transition-shadow duration-300"
      />
      <button
        className="w-full max-w-xs h-10 sm:h-12 flex items-center justify-center px-4 sm:px-6 rounded-xl font-medium text-white border-[1px] cursor-pointer transition-all duration-300
        bg-gradient-to-r from-[rgba(0,96,255,0.8)] to-[rgba(0,255,231,0.8)]
        hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-wait"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
