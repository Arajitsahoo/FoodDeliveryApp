import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import ResturantCatagory from "./ResturantCatagory";
import { useState } from "react";

const RestaurantInfo = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  // console.log(resId);

  const resInfo = useRestaurantInfo(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const catagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  //   console.log(catagories);

  return (
    <div>
      <h1 className="w-full flex justify-center">{name}</h1>
      <p className="w-full flex justify-center">
        {cuisines.join(", ")} - {costForTwoMessage} {avgRating}
      </p>
      <div className="flex w-full flex-col text-center">
        {catagories.map((items, index) => (
          <ResturantCatagory
            key={items?.card?.card?.title}
            catagories={items}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantInfo;
