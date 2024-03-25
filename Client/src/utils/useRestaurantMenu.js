import { useEffect, useState } from "react";
import { RESTAURANT_TYPE_KEY , MENU_ITEM_TYPE_KEY, RES_DATA_KEY } from "./constants";

const useRestaurantMenue = (resId) => {
  // const [resInfo, setResInfo] = useState("");
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    // console.log("inside useeffect");
    fetchData(resId);
  }, []);
  // console.log("outside useeffect");
  const fetchData = async (resId) => {
    const response = await fetch(RES_DATA_KEY +  resId);
    const json = await response.json();

    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    setRestaurant(restaurantData);

    // Set menu item data
    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);
  }

  return {restaurant , menuItems}

};
export default useRestaurantMenue;
