import useRestaurantMenue from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import {Shimmer} from 'react-shimmer';
import RestautrantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const { restaurant, menuItems } = useRestaurantMenue(resId);

  if (restaurant == null) {
    return (
      <div className="w-6/12 h-screen  mx-auto my-4 mt-5 p-4 cursor-pointer border rounded-lg">
        <div className="overflow-hidden rounded-xl">
        <Shimmer width={1000} height={740}></Shimmer>
        </div>
      </div>
    )
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
