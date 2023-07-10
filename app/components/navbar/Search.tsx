"use client";
import { getSearch } from "@/app/actions/getSearch";

import { BiSearch } from "react-icons/bi";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import getListings from "@/app/actions/getListings";

const Search = async () => {
  // const pathname = usePathname();
  // const search = useSearchParams();
  // const router = useRouter();
  const listings = await getListings();
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const [allData, setAllData] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    const filtered = listings.filter((listing: any) =>
      listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // setFilteredProducts(filtered);
    console.log(filtered);
  }, [searchQuery, listings]);

  return (
    <div className="border-[1px] w-full md:w-4/6 py-2 rounded-full shadow-sm hover:shadow-md transition">
      <div className="flex ml-4 flex-row-reverse items-center justify-between">
        <input
          value={searchQuery}
          onChange={handleSearch}
          className="block focus:outline-none flex-grow mr-2 text-sm pl-4 pr-6 text-gray-600"
          placeholder="Search"
          type="text"
        ></input>
        <div className="p-2 bg-rose-500 rounded-full text-white">
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
