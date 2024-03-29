import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { RES_CARD_API } from "../utils/constants.js";

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
    // console.log(json);
    setRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants // array
    );
    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <h1>
        Opps! It seems your Internet isn't working. Please check your connection
      </h1>
    );
  }
  // this is also called as conditional rendering
  if (restaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-center mt-5 mb-10">
        <div className="search">
          <input
            type="text"
            className="border mr-4 rounded-lg w-[24rem] py-1 px-4 focus:border-gray-600 focus:outline-none"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="border bg-gray-100 rounded-lg py-1 px-4 hover:shadow-sm focus:border-gray-600 focus:outline-none"
            onClick={() => {
              const filteredList = restaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>

          <button
            className="ml-6 border bg-gray-100 rounded-lg py-1 px-4 hover:shadow-sm focus:border-gray-600 focus:outline-none"
            onClick={() => {
              console.log(restaurant)
              setFilteredRestaurant(
                restaurant.filter((res) => res.info.avgRating >= 4.4)
              );
            }}
          >
            Filter top restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap pl-20">
        {filteredRestaurant.map((res) => (
          <Link to={"restaurant/" + res.info.id}>
            <RestaurantCard key={res.info.id} resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
