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
      <div className="flex w-full items-center justify-between">
        <h2 className="text-[3.125rem] font-bold bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent">
          SkyConnect Explorer
        </h2>
        <div className="flex flex-row items-center w-[69rem] gap-[4.375rem]">
          <input
            type="text"
            placeholder="Buscar aeropuertos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="
              w-full
              px-4 py-2
              bg-white
              text-[#006FEE]
              text-xl
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
              max-w-[15rem]
              h-[3.25rem]
              flex
              items-center
              justify-center
              px-8
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
        className="max-w-[48.75rem] w-full px-3 py-2 bg-white border-none rounded-full text-xl text-[#006FEE] shadow-md focus:shadow-lg outline-none transition-shadow duration-300"
      />
      <button
        className="w-full max-w-[15rem] h-[3.25rem] flex items-center justify-center px-8 rounded-xl font-medium text-white border-[1px] cursor-pointer transition-all duration-300
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
