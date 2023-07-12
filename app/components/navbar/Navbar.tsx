import Container from "../Container";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log({ currentUser });
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4  border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-end gap-3 md:gap-28 lg:gap-36 xl:gap-48">
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
