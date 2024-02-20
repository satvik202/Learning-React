import resList from "../utils/mokeData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";




const Body = ()=>{
  const [restaurant, setRestaurant] = useState(resList)
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            setRestaurant(restaurant.filter(res => res.info.avgRating>4));
          }}>Filter top restaurants</button>
        </div>
        <div className="res-container">
          {
            restaurant.map(res => <RestaurantCard key={res.info.id} resData={res}/>)
          }
        </div>
      </div>
    )
  }

  export default Body;