import Container from "./components/Container";
import getCurrentUser from "./actions/getCurrentUser";
import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import EmmptyState from "./components/EmptyState";
import HotelCard from "./components/hotelsListing/HotelCard";
import Categories from "./components/hotelsListing/Categories";
import Slider from "./components/Slider";
import React from "react";

const Home = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  const categories = [
    { category: "Beach", index: 0 },
    { category: "Mountains", index: 1 },
    { category: "City", index: 2 },
  ];
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        {categories.map(({ category, index }) => (
          <React.Fragment key={index}>
            <Categories index={index} />
            <Slider>
              {listings
                .filter((listing) => listing.category === category)
                .map((listing) => (
                  <HotelCard
                    currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                  />
                ))}
            </Slider>
          </React.Fragment>
        ))}
      </Container>
    </ClientOnly>
  );
};
export default Home;
