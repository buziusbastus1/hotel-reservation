"use client";
import { BiHotel } from "react-icons/bi";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center">
      <BiHotel size={40} />
      <span className="ml-2 flex-shrink-0 font-bold whitespace-nowrap">
        Hotel rental
      </span>
    </div>
  );
};

export default Logo;
