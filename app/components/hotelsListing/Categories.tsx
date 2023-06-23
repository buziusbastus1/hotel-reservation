"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach } from "react-icons/tb";
import { GiMountainRoad } from "react-icons/gi";
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
    description: "This property is close to the Mountains!",
  },
];
// const categoryObj = categories[0];

const Categories = ({ index }: { index: number }) => {
  const categoryObj = categories[index];

  const params = useSearchParams();
  const category = params?.get("category");
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
          justify-between
          overflow-x-auto
        "
      >
        <CategoryBox
          key={categoryObj.label}
          label={categoryObj.label}
          icon={categoryObj.icon}
          // selected={category === categoryObj.label}
        />
        Explore more
      </div>
    </Container>
  );
};

export default Categories;
