import RestraurantCard, { withPromotedLabel } from "./RestraurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  //useState
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterlist, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const status = useOnlineStatus();
  const {loggedinUser, setLoggedUser} = useContext(userContext);

  const PromotedLabel = withPromotedLabel(RestraurantCard);

  // console.log("whole body rendered");
  //useEffect
  useEffect(() => {
    fetchinfo();
  }, []);

  const fetchinfo = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await info.json();

    //console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //optional chaning
  };
  if (status === false) {
    return <h1>You have lost your Internet Connection. Please check.</h1>;
  }

  return filterlist.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex items-center my-5">
        <div className="search-card px-1 mx-4 ">
          <div>
            <input
              className="border border-black"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              className="bg-gray-300 px-1 mx-4"
              onClick={() => {
                //filter the restro card and update the UI
                //searchText
                // console.log(searchText);
                let searchList = listOfRestaurant.filter((res) => {
                  return res.info.name.toLowerCase().includes(searchText);
                });
                setFilterList(searchList);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="body">
          <button
            className="search border-gray-500 border-2 m-4 my-2"
            onClick={() => {
              const topreslist = listOfRestaurant.filter((res) => {
                return res.info.avgRating > 4.4;
              });
              setFilterList(topreslist);
            }}
          >
            Top Rating Food
          </button>
        </div>
        <div>
          <input type="text" className="border border-black" value={loggedinUser} onChange={(e)=>{setLoggedUser(e.target.value)}}/>
        </div>
      </div>
      <div className="res-container">
        {filterlist.map((res) => {
          // console.log(res.info.aggregatedDiscountInfoV3);
          return (
            <Link key={res.info.id} to={"/Restaurants/" + res.info.id}>
              {res.info.aggregatedDiscountInfoV3 ? (
                <PromotedLabel resinfo={res} />
              ) : (
                <RestraurantCard resinfo={res} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
