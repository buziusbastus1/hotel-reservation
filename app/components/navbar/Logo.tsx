"use client";
import { useRouter } from "next/navigation";
import { BiHotel } from "react-icons/bi";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="hidden md:flex items-center cursor-pointer"
    >
      <BiHotel size={40} />
      <span className="ml-2 flex-shrink-0 font-bold whitespace-nowrap">
        Hotel rental
      </span>
    </div>
  );
};

export default Logo;
