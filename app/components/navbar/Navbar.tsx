import  Container  from "../Container";
import Search from "./Search";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-whie z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">

                    </div>
                </Container>
                <Search/>
            </div>
        </div>);
}

export default Navbar;