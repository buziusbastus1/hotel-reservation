"use client";

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Reservation } from "@prisma/client";
import { SafeListing, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/hotelsListing/Categories";
import HotelHead from "@/app/components/hotelsListing/HotelHead";
import HotelInfo from "@/app/components/hotelsListing/HotelInfo";
// import ListingReservation from "@/app/components/HotelListing/ListingReservation";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  // return <div>list</div>;
  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div
        className="
          max-w-screen-lg
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <HotelHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-7
              md:gap-10
              mt-6
            "
          >
            <HotelInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
            <div
              className="
                order-first
                mb-10
                md:order-last
                md:col-span-3
              "
            ></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
