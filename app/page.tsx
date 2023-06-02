import Container from "./Container";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2"></div>
      </Container>
    </ClientOnly>
  );
}
