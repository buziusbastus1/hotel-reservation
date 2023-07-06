"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className=" border-[1px] w-full md:w-3/6 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row-reverse items-center justify-between">
        <div className="text-sm pl-6 pr-6 text-gray-600 flex flex-row items-center gap-4">
          <div className="block ">Search</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
