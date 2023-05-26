import Container from "@/app/Container";
import CategoryBox from "../CategoryBox";
import { TbBeach } from "react-icons/tb";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "close to beach",
  },
  {
    label: "Wind",
    icon: TbBeach,
    description: "close to beach",
  },
  {
    label: "Modern",
    icon: TbBeach,
    description: "close to modern",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
