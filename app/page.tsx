import Container from "./components/Container";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import EmmptyState from "./components/EmptyState";
import HotelCard from "./components/hotelsListing/HotelCard";
import Categories from "./components/hotelsListing/Categories";
import Slider from "./components/Slider";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  const firstCategory = "Beach";
  const secondCategory = "Mountains";

  const filteredListingsFirst = listings.filter(
    (listing) => listing.category === firstCategory
  );

  const filteredListingsSecond = listings.filter(
    (listing) => listing.category === secondCategory
  );

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
        <Categories index={0} />
        <Slider>
          {filteredListingsFirst.map((listing: any) => (
            <HotelCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </Slider>
        <Categories index={1} />
        <Slider>
          {filteredListingsSecond.map((listing: any) => (
            <HotelCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </Slider>
      </Container>
    </ClientOnly>
  );
};
export default Home;
// <div>{listing.title}</div>
