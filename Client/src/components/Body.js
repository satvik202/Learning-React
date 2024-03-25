import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
// import {RES_CARD_API} from "../utils/constants.js"

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    // console.log(json);
    setRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants  // array
    );
    setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };
  const isOnline = useOnlineStatus()
  if(isOnline===false){
    return (
      <h1>
        Opps! It seems your Internet isn't working. Please check your connection
      </h1>
    )
  }
  // this is also called as conditional rendering
  if (restaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button onClick={() => {
            const filteredList= restaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredList);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurant(restaurant.filter((res) => res.info.avgRating >= 4));
          }}
        >
          Filter top restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <Link to={"restaurant/"+res.info.id}>
          <RestaurantCard key={res.info.id} resData={res} />
          </Link>  
        ))}
      </div>
    </div>
  );
};

export default Body;
