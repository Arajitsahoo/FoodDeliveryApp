import React from "react";
import { CDN_Links } from "../utils/const";

const CatagoryItems = ({ items }) => {
//   console.log(items);
  return (
    <div>
      <div>
        {items.map((c) => {
          return (
            <div
              className="border-b-2 py-10 flex justify-between"
              key={c?.card?.info?.name}
            >
              <div>
                <div className="font-bold">{c?.card?.info?.name}</div>
                <div className="font-semibold">₹{c?.card?.info?.price / 100}</div>
              </div>
              <div>
                <img
                  src={CDN_Links + c?.card?.info?.imageId}
                  alt=""
                  className="w-40 h-30"
                />
                <button className="relative text-green-600 font-bold border-gray-50 bg-gray-50 shadow-lg bottom-6 left-6 px-10 py-2 rounded-lg">ADD</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatagoryItems;
