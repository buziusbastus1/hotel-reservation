import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import getListings, { IListingsParams } from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import { categories } from "../components/hotelsListing/Categories";
import { SafeListing } from "../types";
import ExploreClient from "./ExploreClient";
interface FavoritesClientProps {
  listings: SafeListing[];
  searchParams: IListingsParams;
}
const TripsPage = async () => {
  // const currentUser = await getCurrent
  const searchParams: IListingsParams = {};
  const listings = await getListings(searchParams);

  // const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();
  return (
    <ExploreClient
      listings={listings}
      currentUser={currentUser}
      // category={categories}
      // icon={category.icon}
      // label={category?.label}
      // description={category?.description}
      // listings={listings}
      // listing={listing}
      // reservations={reservations}
    />
  );
};
export default TripsPage;
