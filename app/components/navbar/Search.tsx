"use client";
import useSearchModal from "@/app/hooks/useSearchModal";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  const searchModal = useSearchModal();
  return (
    <div className="border-[1px] w-full md:w-4/6 py-2 rounded-full shadow-sm hover:shadow-md transition">
      <div className="flex ml-4 flex-row-reverse items-center justify-between">
        <input
          type="text"
          // value={searchQuery}
          // onChange={handleInputChange}
          className="block focus:outline-none flex-grow text-sm pl-4 pr-6 text-gray-600"
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
