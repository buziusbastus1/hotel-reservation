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
        {/* <div className="
          pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"> */}

        <Slider>
          {listings.map((listing) => {
            return (
              // <div>{listing.title}</div>
              <>
                <HotelCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              </>
            );
          })}
        </Slider>
        {/* </div> */}
      </Container>
    </ClientOnly>
  );
}
