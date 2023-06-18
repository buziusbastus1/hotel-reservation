import Container from "./components/Container";
import getCurrentUser from "./actions/getCurrentUser";
import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import EmmptyState from "./components/EmptyState";
import HotelCard from "./components/hotelsListing/HotelCard";
import Categories from "./components/hotelsListing/Categories";
import Slider from "./components/Slider";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

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
        <Categories />
        <Slider>
          {listings.map((listing) => {
            return (
              <HotelCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </Slider>
        <Categories />
        <Slider>
          {listings.map((listing) => {
            return (
              <HotelCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </Slider>
      </Container>
    </ClientOnly>
  );
}

// <div>{listing.title}</div>
