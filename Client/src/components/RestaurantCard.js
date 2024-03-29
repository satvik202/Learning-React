import { RES_IMG_KEY } from "../utils/constants"
import vegLogo from "../../img/1024px-Veg_symbol.svg.png"



const RestaurantCard = ({resData}) =>{
    const {name , cloudinaryImageId, cuisines, avgRatingString, costForTwo, sla} = resData.info
   return (
     <div className="m-4 p-4 w-60 border rounded-lg pb-2 text-md hover:bg-gray-100 hov">
       <img className="rounded-lg w-full" src={RES_IMG_KEY + cloudinaryImageId} alt="res-logo"></img>
       <h1 className="font-bold my-1 h-10">{name}</h1>
       <h4 className="text-sm h-[3.75rem]">{cuisines.join(" ,")}</h4>
       <div className="mt-4 mb-2 text-sm font-bold text-neutral-600">
       <span className="text-white bg-green-500  p-1 rounded-md">{avgRatingString}⭐</span>
       <span className="mx-1">• {sla.lastMileTravelString}</span>
       <span>• {costForTwo}</span>
       {/* <h4>{sla.slaString}</h4> */}
       </div>
     </div>
   )
 }


export const RestaurantCardWithVegLabel = (RestaurantCard) =>{
  return (props) => {
    return (
      <div>
        <span className= "absolute w-8 rounded-2xl ml-[1.875rem] mt-[0.875rem]">
        <img src= {vegLogo}>
        </img></span>
        {/* <span className= "absolute bg-green-400 text-white py-2 px-3 ml-[2.063rem] mt-[1.05rem] rounded-lg">Veg</span> */}
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


 export default RestaurantCard;