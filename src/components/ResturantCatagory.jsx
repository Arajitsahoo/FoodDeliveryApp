import React, { useState } from "react";
import CatagoryItems from "./CatagoryItems";

const ResturantCatagory = ({ catagories, showItems, setShowIndex }) => {
  const handleItems = () => {
    setShowIndex();
  };
  return (
    <div className="bg-gray-50 w-6/12 mx-auto my-4 shadow-lg p-4  ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleItems}
      >
        <span className="font-bold">
          {catagories?.card?.card?.title}&nbsp;(
          {catagories?.card?.card?.itemCards.length})
        </span>
        <span>{showItems ? "🔽" : "🔼"}</span>
      </div>
      <div className="text-left ">
        {showItems && (
          <CatagoryItems items={catagories?.card?.card?.itemCards} />
        )}
      </div>
    </div>
  );
};

export default ResturantCatagory;
