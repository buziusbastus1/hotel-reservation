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

import { Listing, Prisma } from "@prisma/client";
import prisma from "@/app/libs/prismadb";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
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
import { useOnClickOutside } from "@/app/hooks/useClickOutside";
import { BiCategoryAlt } from "react-icons/bi";

interface SearchProps {}
const queryClient = new QueryClient();

const Search: FC<SearchProps> = ({}) => {
  const [input, setInput] = useState<string>("");
  const pathname = usePathname();
  const commandRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useOnClickOutside(commandRef, () => {
    setInput("");
  });

  const request = debounce(async () => {
    refetch();
  }, 300);

  const debounceRequest = useCallback(() => {
    request();
  }, [request]);

  const {
    isFetching,
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
    <QueryClientProvider client={queryClient}>
      <Command
        ref={commandRef}
        className="relative rounded-lg border max-w-lg z-50 overflow-visible"
      >
        <CommandInput
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
              <>
                <CommandGroup heading="Name">
                  {queryResults?.map((listing) => (
                    <CommandItem
                      onSelect={() => {
                        router.push(`/listings/${listing.id}`);
                        router.refresh();
                      }}
                      key={`title-${listing.title}`}
                      value={listing.title}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      <a href={`/listings/${listing.id}`}>{listing.title}</a>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandGroup heading="Categories">
                  {queryResults
                    ?.filter(
                      (listing, index, self) =>
                        self.findIndex(
                          (l) => l.category === listing.category
                        ) === index
                    )
                    .map((listing) => (
                      <CommandItem
                        onSelect={() => {
                          router.push(`/explore?${listing.category}`);
                          router.refresh();
                        }}
                        key={`category-${listing.category}`}
                        value={listing.category}
                      >
                        <BiCategoryAlt className="mr-2 h-4 w-4" />
                        <a href={`/explore?${listing.category}`}>
                          {listing.category}
                        </a>
                      </CommandItem>
                    ))}
                </CommandGroup>
              </>
            ) : null}
          </CommandList>
        )}
      </Command>
    </QueryClientProvider>
  );
};
const SearchBar = () => (
  <QueryClientProvider client={queryClient}>
    <Search />
  </QueryClientProvider>
);
export default SearchBar;

// "use client";

// import * as React from "react";
// import { useRouter } from "next/navigation";
// import { Listing } from "@prisma/client";
// import prisma from "@/app/libs/prismadb";
// import { cn } from "@/lib/utils";
// import { Button } from "./button";
// import {
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/Command";
// // import { Skeleton } from "@/components/ui/skeleton";
// // import { Icons } from "@/components/icons";
// import { useDebounce } from "@/app/hooks/useDebounce";
// import { filterProductsAction } from "@/app/pages/api/route";
// import axios from "axios";

// export function Search() {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [query, setQuery] = React.useState("");
//   const debouncedQuery = useDebounce(query, 300);
//   const [data, setData] = React.useState<
//     | {
//         category: Listing["category"];
//         products: Pick<Listing, "id" | "title" | "category">[];
//       }[]
//     | null
//   >(null);
//   const [isPending, startTransition] = React.useTransition();

//   React.useEffect(() => {
//     if (debouncedQuery.length === 0) setData(null);

//     if (debouncedQuery.length > 0) {
//       startTransition(async () => {
//         // const data = await filterProductsAction(debouncedQuery);
//         // setData(data);
//         try {
//           const data = await filterProductsAction(debouncedQuery);
//           setData(data);
//         } catch (error) {
//           console.error(error);
//           setData(null);
//         }
//       });
//     }
//   }, [debouncedQuery]);

//   const handleSelect = React.useCallback((callback: () => unknown) => {
//     setIsOpen(false);
//     callback();
//   }, []);

//   React.useEffect(() => {
//     if (!isOpen) {
//       setQuery("");
//     }
//   }, [isOpen]);

//   return (
//     <>
//       <Button
//         variant="outline"
//         className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
//         onClick={() => setIsOpen(true)}
//       >
//         {/* <Icons.search className="h-4 w-4 xl:mr-2" aria-hidden="true" /> */}
//         <span className="hidden xl:inline-flex">Search products...</span>
//         <span className="sr-only">Search products</span>
//       </Button>
//       <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
//         <CommandInput
//           placeholder="Search products..."
//           value={query}
//           onValueChange={setQuery}
//         />
//         <CommandList>
//           <CommandEmpty
//             className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
//           >
//             No products found.
//           </CommandEmpty>
//           {isPending ? (
//             <div className="space-y-1 overflow-hidden px-1 py-2">
//               {/* <Skeleton className="h-4 w-10 rounded" />
//               <Skeleton className="h-8 rounded-sm" />
//               <Skeleton className="h-8 rounded-sm" /> */}
//             </div>
//           ) : (
//             data?.map((group) => (
//               <CommandGroup
//                 key={group.category}
//                 className="capitalize"
//                 heading={group.category}
//               >
//                 {group.products.map((item) => (
//                   <CommandItem
//                     key={item.id}
//                     onSelect={() =>
//                       handleSelect(() => router.push(`/product/${item.id}`))
//                     }
//                   >
//                     {item.title}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             ))
//           )}
//         </CommandList>
//       </CommandDialog>
//     </>
//   );
// }
