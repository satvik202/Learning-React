
// import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) =>{
    const {resData}= props
    // const {name, cuisines, rating_text, costForTwo}= resData?.info
    // const {slaString}= resData?.info.sla
    // console.log(resData)
    const {name , cloudinaryImageId, cuisines, avgRatingString, costForTwo, id, sla} = resData.info
   return (
     <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
       <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="res-logo"></img>
       <h3>{name}</h3>
       <h4>{cuisines.join(" ,")}</h4>
       <h4>{avgRatingString} Stars</h4>
       <h4>{costForTwo}</h4>
       <h4>{id}</h4>
       <h4>{sla.lastMileTravelString}</h4>
       <h4>deliveryTime : {sla.slaString}</h4>
     </div>
   )
 }


 export default RestaurantCard;