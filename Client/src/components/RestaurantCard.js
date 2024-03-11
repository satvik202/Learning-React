
// import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) =>{
    const {resData}= props
    // const {name, cuisines, rating_text, costForTwo}= resData?.info
    // const {slaString}= resData?.info.sla
    // console.log(resData)
   return (
     <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
       <img className="res-logo" src={resData.info.image.url} alt="res-logo"></img>
       <h3>{resData.info.name}</h3>
       <h4>{resData?.info?.cuisine[0].name}</h4>
       <h4>{resData.info.rating.aggregate_rating} Stars</h4>
       <h4>{resData.info.cft.text}</h4>
       <h4>{resData.info.resId}</h4>
       <h4>deliveryTime : {resData.order.deliveryTime}</h4>
     </div>
   )
 }


 export default RestaurantCard;