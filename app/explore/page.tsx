import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import getListingById from "../actions/getListingById";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import ExploreClient from "./ExploreClient";

const TripsPage = async () => {
  // const listing = await getListingById(params);
  // const currentUser = await getCurrentUser();
  return (
    <ClientOnly>
      <ExploreClient
        icon={category.icon}
        label={category?.label}
        description={category?.description}
        // listings={listings}
        // listing={listing}
        // reservations={reservations}
        // currentUser={currentUser}
      />
    </ClientOnly>
  );
};
export default TripsPage;
