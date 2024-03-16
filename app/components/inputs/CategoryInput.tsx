"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  selected?: boolean;
  label: string;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  selected,
  label,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
  rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer bg-gray-100 mr-2
  ${selected ? "border-black" : "border-white"}
  `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
