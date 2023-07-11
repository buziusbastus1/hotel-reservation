// "use client";
// import { getSearch } from "@/app/actions/getSearch";

// import { BiSearch } from "react-icons/bi";
// import { useSearchParams, useRouter, usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import getListings from "@/app/actions/getListings";

// const Search = () => {
//   // const pathname = usePathname();
//   // const search = useSearchParams();
//   // const router = useRouter();
//   // const listings = await getListings();
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   // const [allData, setAllData] = useState([]);
//   // const [filteredProducts, setFilteredProducts] = useState([]);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     console.log(e.target.value);
//   };

//   // useEffect(() => {
//   //   const filtered = listings.filter((listing: any) =>
//   //     listing.title.toLowerCase().includes(searchQuery.toLowerCase())
//   //   );
//   //   // setFilteredProducts(filtered);
//   //   console.log(filtered);
//   // }, [searchQuery, listings]);

//   return (
//     <div className="border-[1px] w-full md:w-4/6 py-2 rounded-full shadow-sm hover:shadow-md transition">
//       <div className="flex ml-4 flex-row-reverse items-center justify-between">
//         <input
//           value={searchQuery}
//           onChange={handleSearch}
//           className="block focus:outline-none flex-grow mr-2 text-sm pl-4 pr-6 text-gray-600"
//           placeholder="Search"
//           type="text"
//         ></input>
//         <div className="p-2 bg-rose-500 rounded-full text-white">
//           <BiSearch size={18} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;
"use client";

import {  Listing, PrismaClient } from "@prisma/client";
import prisma from "@/app/libs/prismadb";
import {
  QueryClient,
  useQuery,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import debounce from "lodash.debounce";
import { usePathname, useRouter } from "next/navigation";
import { FC, useCallback, useEffect, useRef, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command";
// import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { Users } from "lucide-react";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [input, setInput] = useState<string>("");
  const pathname = usePathname();
  const commandRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  // useOnClickOutside(commandRef, () => {
  //   setInput("");
  // });
  // const prisma = new PrismaClient(); // Create a PrismaClient instance

  const queryClient = new QueryClient();
  const request = debounce(async () => {
    refetch();
  }, 300);

  const debounceRequest = useCallback(() => {
    request();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    // isFetching,
    data: queryResults,
    refetch,
    isFetched,
  } = useQuery({
    queryFn: async () => {
      if (!input) return [];
      const { data } = await axios.get(`/api/search?q=${input}`);
      return data as Listing[];
    },
    queryKey: ["search-query"],
    enabled: false,
  });

  useEffect(() => {
    setInput("");
  }, [pathname]);

  return (
    <Command
      ref={commandRef}
      className="relative rounded-lg border max-w-lg z-50 overflow-visible"
    >
      <CommandInput
        // isLoading={isFetching}
        onValueChange={(text) => {
          setInput(text);
          debounceRequest();
        }}
        value={input}
        className="outline-none border-none focus:border-none focus:outline-none ring-0"
        placeholder="Search communities..."
      />

      {input.length > 0 && (
        <CommandList className="absolute bg-white top-full inset-x-0 shadow rounded-b-md">
          {isFetched && <CommandEmpty>No results found.</CommandEmpty>}
          {(queryResults?.length ?? 0) > 0 ? (
            <CommandGroup heading="Communities">
              {queryResults?.map((listing) => (
                <CommandItem
                  onSelect={(e) => {
                    router.push(`/r/${e}`);
                    router.refresh();
                  }}
                  key={listing.id}
                  value={listing.title}
                >
                  <Users className="mr-2 h-4 w-4" />
                  <a href={`/r/${listing.title}`}>r/{listing.title}</a>
                </CommandItem>
              ))}
            </CommandGroup>
          ) : null}
        </CommandList>
      )}
    </Command>
  );
};

export default SearchBar;
