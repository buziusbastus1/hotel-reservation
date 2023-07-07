"use client";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { getSearch } from "@/app/actions/getSearch";

const Search = () => {
  const search = useSearchParams();

  // const [searchQuery, setSearchQuery] = useState<string>("");
  // const router = useRouter();
  // const onSearch = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   try {
  //     const encodedSearchQuery = encodeURI(searchQuery);
  //     const filteredItems = await getSearch(searchQuery);

  //     // Pass the filtered items to the search results page
  //     router.push({
  //       pathname: `/search`,
  //       query: { q: encodedSearchQuery },
  //       state: { filteredItems },
  //     });
  //   } catch (error) {
  //     console.error("Error searching items:", error);
  //   }
  // };

  return (
    <div className="border-[1px] w-full md:w-4/6 py-2 rounded-full shadow-sm hover:shadow-md transition">
      <div className="flex ml-4 flex-row-reverse items-center justify-between">
        <input
          // onSubmit={onSearch}
          // value={searchQuery || ""}
          // onChange={(event) => setSearchQuery(event.target.value)}
          type="text"
          className="block focus:outline-none flex-grow mr-2 text-sm pl-4 pr-6 text-gray-600"
          placeholder="Search"
        ></input>
        <div className="p-2 bg-rose-500 rounded-full text-white">
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
