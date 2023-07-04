"use client";
import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import HotelCard from "../components/hotelsListing/HotelCard";
import { SafeListing } from "../types";
import getListings, { IListingsParams } from "../actions/getListings";
import getCurrentUser from "../actions/getCurrentUser";
import { SafeUser } from "../types";
import { IconType } from "react-icons";
import CategoryView from "../components/hotelsListing/HotelCategory";
import ClientOnly from "../components/ClientOnly";
import Slider from "../components/Slider";
import Categories from "../components/hotelsListing/Categories";

interface ExploreClientProps {
  listings: any[];
  currentUser?: SafeUser | null;
}
const ExploreClient: React.FC<ExploreClientProps> = ({
  listings,
  currentUser,
}) => {
  const pathname = useSearchParams()?.toString()?.replace(/=/g, "");

  const filteredListings = listings.filter(
    (listing) => listing.category === pathname
  );

  return (
    <>
      <Container>
        <Heading
          title="Explore"
          subtitle={`Hotels with the ${pathname} category`}
        />
        <div
          className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
        >
          {" "}
          {filteredListings.map((listing: any) => (
            <HotelCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default ExploreClient;
