import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import getListings, { IListingsParams } from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import { categories } from "../components/hotelsListing/Categories";
import { SafeListing } from "../types";
import ExploreClient from "./ExploreClient";

const TripsPage = async () => {
  const searchParams: IListingsParams = {};
  const listings = await getListings(searchParams);

  const currentUser = await getCurrentUser();
  return (
    <ExploreClient
      listings={listings}
      currentUser={currentUser}
      // category={categories}
      // icon={category.icon}
      // label={category?.label}
    />
  );
};
export default TripsPage;
