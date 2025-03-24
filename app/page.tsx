'use client'
import AppLayout from "@/components/UI/Layout";
import SearchBar from "@/components/UI/Searchbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSearch = (term: string) => {
    router.push(`/airports?search=${encodeURIComponent(term)}`);
  };

  return (
    <AppLayout>
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col gap-36 sm:gap-12 md:gap-20 lg:gap-28 w-full sm:max-w-lg md:max-w-2xl lg:max-w-[74.375rem] py-8 sm:py-16 md:py-24 lg:py-36">
          <h1 className="font-gotham text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent">
            SkyConnect Explorer
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </AppLayout>
  );
}
