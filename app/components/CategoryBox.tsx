"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push(`/explore/?${label}`)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
      >
        <Icon size={26} />
        <div className="font-medium text-sm">{label}</div>
      </div>
      {isHovered && (
        <div className="px-2 flex items-center">
          Explore more
          <AiOutlineArrowRight className="mx-2" />
        </div>
      )}
    </>
  );
};

export default CategoryBox;
