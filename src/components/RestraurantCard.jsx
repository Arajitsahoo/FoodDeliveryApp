import { useContext } from "react";
import { CDN_Links } from "../utils/const";
import userContext from "../utils/userContext";



const RestraurantCard = ( props ) => {
  const {resinfo} = props;
    const { name, cuisines, avgRating, costForTwo } = resinfo?.info;
    const {loggedinUser} = useContext(userContext);
    return (
      <>
        <div className="res-card p-10">
          <img
            alt="img"
            src={CDN_Links
               +
              resinfo.info.cloudinaryImageId
            }
          />
          <h2 className="text-lg text-black">{name}</h2>
          <h2>{cuisines}</h2>
          <h2>{avgRating}*</h2>
          <h3>{costForTwo}</h3>
          <h4>{loggedinUser}</h4>
        </div>
      </>
    );
  };
  export const withPromotedLabel = (RestraurantCard) =>{
    return ({resinfo})=>{
      const {header,subHeader} = resinfo.info.aggregatedDiscountInfoV3;
      return (
        <div>
          <label className="bg-white p-2  m-5 absolute rounded-lg font-serif font-extralight text-1xl w-auto">{header}&nbsp;{subHeader}</label>
          <RestraurantCard resinfo= {resinfo} />
        </div>
      )
    }
  };
  export default RestraurantCard;