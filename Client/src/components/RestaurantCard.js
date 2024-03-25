import { RES_IMG_KEY } from "../utils/constants"
const RestaurantCard = (props) =>{
    const {resData}= props
    // const {name, cuisines, rating_text, costForTwo}= resData?.info
    // const {slaString}= resData?.info.sla
    // console.log(resData)
    const {name , cloudinaryImageId, cuisines, avgRatingString, costForTwo, sla} = resData.info
   return (
     <div className="m-4 p-4 w-60 border rounded-lg">
       <img className="rounded-lg w-full" src={RES_IMG_KEY + cloudinaryImageId} alt="res-logo"></img>
       <h3>{name}</h3>
       <h4>{cuisines.join(" ,")}</h4>
       <h4>{avgRatingString} Stars</h4>
       <h4>{costForTwo}</h4>
       <h4>{sla.lastMileTravelString}</h4>
       <h4>deliveryTime : {sla.slaString}</h4>
     </div>
   )
 }


 export default RestaurantCard;