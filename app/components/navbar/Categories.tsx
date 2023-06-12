// import Container from "@/app/components/Container";
// import CategoryBox from "../CategoryBox";
// import { TbBeach } from "react-icons/tb";
// export const categories = [
//   {
//     label: "Beach",
//     icon: TbBeach,
//     description: "close to beach",
//   },
//   {
//     label: "Wind",
//     icon: TbBeach,
//     description: "close to beach",
//   },
//   {
//     label: "Modern",
//     icon: TbBeach,
//     description: "close to modern",
//   },
// ];

// const Categories = () => {
//   return (
//     <Container>
//       <div className=" bg-slate-100 flex flex-row items-center justify-between overflow-x-auto z-10">
//         {categories.map((item) => (
//           <CategoryBox
//             key={item.label}
//             label={item.label}
//             // description={item.description}
//             icon={item.icon}
//           />
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Categories;
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach } from "react-icons/tb";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
];
const categoryObj = categories[0];

const Categories = () => {
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
          pt-4
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
      </div>
    </Container>
  );
};

export default Categories;
