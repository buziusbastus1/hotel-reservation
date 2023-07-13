"use client";

import { Listing } from "@prisma/client";
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

import { Hotel } from "lucide-react";
import { useOnClickOutside } from "@/app/hooks/useClickOutside";
import { BiCategoryAlt } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";

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
        placeholder="Search..."
      />

      {input.length > 0 && (
        <CommandList className="absolute bg-white top-full inset-x-0 shadow rounded-b-md">
          {isFetched && <CommandEmpty>No results found.</CommandEmpty>}
          {(queryResults?.length ?? 0) > 0 ? (
            <>
              <CommandGroup heading="Hotel title">
                {queryResults?.map((listing) => (
                  <CommandItem
                    onSelect={() => {
                      router.push(`/listings/${listing.id}`);
                      router.refresh();
                    }}
                    key={`title-${listing.title}`}
                    value={listing.title}
                  >
                    <Hotel className="mr-2 h-4 w-4" />
                    <a href={`/listings/${listing.id}`}>
                      {listing.title} ┊ {listing.locationValue}
                    </a>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Localisation">
                {queryResults?.map((listing) => (
                  <CommandItem
                    onSelect={() => {
                      router.push(`/listings/${listing.id}`);
                      router.refresh();
                    }}
                    key={`title-${listing.locationValue}`}
                    value={listing.locationValue}
                  >
                    <FaMapMarkedAlt className="mr-2 h-4 w-4" />
                    <a href={`/listings/${listing.id}`}>
                      {listing.locationValue} ┊ {listing.title}
                    </a>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Categories">
                {queryResults
                  ?.filter(
                    (listing, index, self) =>
                      self.findIndex((l) => l.category === listing.category) ===
                      index
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
  );
};
const SearchBar = () => (
  <QueryClientProvider client={queryClient}>
    <Search />
  </QueryClientProvider>
);
export default SearchBar;
