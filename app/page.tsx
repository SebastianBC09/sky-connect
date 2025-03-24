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
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col gap-36 max-w-[74.375rem] py-36">
          <h1 className="font-gotham text-8xl text-center bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent">
            SkyConnect Explorer
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </AppLayout>
  );
}
