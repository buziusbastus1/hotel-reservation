"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
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
  // listings: SafeListing[];
  //   category:
  //     | {
  //         icon: IconType;
  //         label: string;
  //         description: string;
  //       }
  //     | undefined;
  searchParams: IListingsParams;
  listings: any[];
  currentUser?: SafeUser | null;
}
const ExploreClient: React.FC<ExploreClientProps> = ({
  searchParams,
  listings,
  currentUser,
}) => {
  const firstCategory = "Beach";
  const secondCategory = "Mountains";

  // const filteredListingsFirst = listings.filter(
  //   (listing) => listing.category === firstCategory
  // );

  // const filteredListingsSecond = listings.filter(
  //   (listing) => listing.category === secondCategory
  // );

  return (
    <>
      {listings.map((listing: any) => (
        <HotelCard currentUser={currentUser} key={listing.id} data={listing} />
      ))}
    </>
  );
};

export default ExploreClient;
