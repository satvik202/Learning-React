import { RES_IMG_KEY } from "../utils/constants"
const RestaurantCard = ({resData}) =>{
    const {name , cloudinaryImageId, cuisines, avgRatingString, costForTwo, sla} = resData.info
   return (
     <div className="m-4 p-4 w-60 border rounded-lg pb-2 text-md hover:bg-gray-100">
       <img className="rounded-lg w-full" src={RES_IMG_KEY + cloudinaryImageId} alt="res-logo"></img>
       <h1 className="font-bold my-1">{name}</h1>
       <h4>{cuisines.join(" ,")}</h4>
       <h4>{avgRatingString}⭐</h4>
       <h4>{costForTwo}</h4>
       <h4>{sla.lastMileTravelString}</h4>
       <h4>{sla.slaString}</h4>
     </div>
   )
 }


 export default RestaurantCard;