import RestaurantCard, { RestaurantCardWithVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { RES_CARD_API } from "../utils/constants.js";



const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardVegLabel = RestaurantCardWithVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_CARD_API);

    const json = await data.json();
    // console.log(json);
    setRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants // array
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(restaurant);
  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <h1>
        Opps! It seems your Internet isn't working. Please check your connection
      </h1>
    );
  }
  // this is also called as conditional rendering
  if (!restaurant || restaurant.length === 0) {
    const shimmerArray = Array.from({ length: 10 }).map((_, index) => <ShimmerUI key={index} />);
    return (
      <div className="flex justify-center mt-20 mb-10">
        <div className="flex flex-wrap pl-20">
        {shimmerArray}
        </div>
      </div>
    )
  }

  // console.log(filteredRestaurant);

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
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>

          <button
            className="ml-6 border bg-gray-100 rounded-lg py-1 px-4 hover:shadow-sm focus:border-gray-600 focus:outline-none"
            onClick={() => {
              // console.log(restaurant);
              setFilteredRestaurant(
                restaurant.filter((res) => res?.info?.avgRating >= 4.4)
              );
            }}
          >
            Filter top restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap pl-20">
        {filteredRestaurant.map((res, index) => (
          <Link to={"restaurant/" + res.info.id} key={res.info.id}>
            {res.info?.veg === true ? (
              <RestaurantCardVegLabel resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
