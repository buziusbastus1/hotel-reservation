import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FunctionComponent<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="trips" subtitle="where" />
    </Container>
  );
};

export default TripsClient;
