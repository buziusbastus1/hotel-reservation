import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import ExploreClient from "./ExploreClient";

const TripsPage = async () => {
  const listings = await getFavoriteListings();
  return (
    <ClientOnly>
      <ExploreClient listings={listings} />
    </ClientOnly>
  );
};
export default TripsPage;
