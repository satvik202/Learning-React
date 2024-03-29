import useRestaurantMenue from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import RestautrantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const { restaurant, menuItems } = useRestaurantMenue(resId);

  if (restaurant == null) {
    return <Shimmer />;
  }
  // console.log(menuItems)
  return (
    <div className="">
      <h1 className="font-bold text-center my-6">{restaurant.name} </h1>
      <div>
        {
          menuItems.map((catagory, index) => <RestautrantCategory key={index} catagory = {catagory}/>)
        }
      </div>
    </div>
  );
};

export default RestaurantMenu;
