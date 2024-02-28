import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const Body = ()=>{
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async ()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    setRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  if(restaurant.length === 0) {
    return <Shimmer/>
  }

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