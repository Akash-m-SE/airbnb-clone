"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import queryString from "query-string";

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
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {}; // Initialize an empty object to hold the current query parameters

    // Parse the existing query parameters from the URL
    // we are parsing here since we want to turn the params.toString into an object which by default is a string
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    // Create an updated query object by spreading the current query parameters
    // and adding the "category" label
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // If the "category" parameter in the current query matches the label,
    // remove the "category" key from the updated query
    // Its like if we have already clicked on it we do not want to get it selected again
    // Its like toggling on and off
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    // Use the queryString library to stringify the URL with the updated query
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    // Using the router to navigate to the updated URL
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer 
      ${selected ? "border-b-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
