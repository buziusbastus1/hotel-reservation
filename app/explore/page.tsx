import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import ExploreClient from "./ExploreClient";

const TripsPage = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  return <ExploreClient listings={listings} currentUser={currentUser} />;
};
export default TripsPage;
