"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import HotelCard from "../components/hotelsListing/HotelCard";
import { SafeListing } from "../types";
import getListings from "../actions/getListings";
import getCurrentUser from "../actions/getCurrentUser";
import { IconType } from "react-icons";
import CategoryView from "../components/hotelsListing/HotelCategory";

interface ExploreClientProps {
  // listings: SafeListing[];
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
}

const ExploreClient: React.FunctionComponent<ExploreClientProps> = ({
  // listings,
  category,
}) => {
  // const listings = getListings();

  // const currentUser = getCurrentUser();
  return (
    <Container>
      <Heading title="trips" subtitle="where" />

      {category && (
        <CategoryView
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}

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
      ></div>
    </Container>
  );
};

export default ExploreClient;
