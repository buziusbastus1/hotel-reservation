"use client";
import { getSearch } from "@/app/actions/getSearch";

import { BiSearch } from "react-icons/bi";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Update search results whenever the search query changes
    const handleSearch = () => {
      // Perform search using the searchQuery
      console.log("Search query:", searchQuery);
      const encodedSearchQuery = encodeURI(searchQuery);
      router.push(`${pathname}/?q=${encodedSearchQuery}`);
      // Replace the console.log statement with your actual search implementation
    };

    handleSearch(); // Initial search

    return () => {
      // Clean up any necessary resources
    };
  }, [searchQuery, router, pathname]);

  return (
    <div className="border-[1px] w-full md:w-4/6 py-2 rounded-full shadow-sm hover:shadow-md transition">
      <div className="flex ml-4 flex-row-reverse items-center justify-between">
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
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
