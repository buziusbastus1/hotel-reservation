"use client";

import { usePathname } from "next/navigation";
import { TbBeach } from "react-icons/tb";
import { GiMountainRoad } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Mountains",
    icon: GiMountainRoad,
    description: "This property is near the mountains!",
  },
  {
    label: "City",
    icon: FaCity,
    description: "This hotel is in the city!",
  },
];

const Categories = ({ index }: { index: number }) => {
  const categoryObj = categories[index];

  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          flex 
          flex-row 
          items-center 
          overflow-x-auto
          mb-3          
        "
      >
        <CategoryBox
          key={categoryObj.label}
          label={categoryObj.label}
          icon={categoryObj.icon}
        />
      </div>
    </Container>
  );
};

export default Categories;
