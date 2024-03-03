import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import {RES_CARD_API} from "../utils/constants.js"
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_CARD_API);

    const json = await data.json();
    console.log(json);
    setRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };
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
            setRestaurant(restaurant.filter((res) => res.info.avgRating > 4));
          }}
        >
          Filter top restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
