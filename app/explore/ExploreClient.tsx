"use client";
import { useSearchParams } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import HotelCard from "../components/hotelsListing/HotelCard";
import { SafeUser } from "../types";
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
