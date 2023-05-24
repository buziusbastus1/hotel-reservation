"use client";
// import { CgProfile } from "react-icons/cg";
import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      // size={30}
      alt="Avatar"
      width={30}
      height={30}
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
