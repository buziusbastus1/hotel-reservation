"use client";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import HotelCard from "../components/hotelsListing/HotelCard";
import { SafeListing } from "../types";

interface ExploreClientProps {
  listings: SafeListing[];
}

const ExploreClient: React.FunctionComponent<ExploreClientProps> = ({
  listings,
}) => {
  const router = useRouter();

  return (
    <Container>
      <Heading title="trips" subtitle="where" />
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
        {listings.map((listings: any) => (
          <HotelCard key={listings.id} data={listings.listing} />
        ))}
      </div>
    </Container>
  );
};

export default ExploreClient;
