import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import getListingById from "../actions/getListingById";
import getListings, { IListingsParams } from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import { categories } from "../components/hotelsListing/Categories";
import { SafeListing } from "../types";
import ExploreClient from "./ExploreClient";
interface FavoritesClientProps {
  listings: SafeListing[];
  searchParams: IListingsParams;
}
const TripsPage = async ({ searchParams, listings }: FavoritesClientProps) => {
  // const listing = await getListingById(params);
  // const currentUser = await getCurrent
  // const listings = await getListings(searchParams);
  // const searchParams: IListingsParams = {};
  return (
    <ExploreClient
      searchParams={searchParams}
      listings={listings}
      // category={categories}
      // icon={category.icon}
      // label={category?.label}
      // description={category?.description}
      // listings={listings}
      // listing={listing}
      // reservations={reservations}
      // currentUser={currentUser}
    />
  );
};
export default TripsPage;
