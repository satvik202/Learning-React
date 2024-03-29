import { useState } from "react";
import downArrowSvg from "../../img/angle-down-solid-svgrepo-com.svg";
import upArrowSvg from "../../img/angle-up-solid-svgrepo-com.svg"
import ItemList from "./ItemList";
const RestautrantCategory = ({ catagory }) => {
  const [showItems, setShowItems]= useState(true);
  const clickHandel = ()=> {
    setShowItems(!showItems)
  };
  return (
    <div>
      <div className=" w-6/12 mx-auto my-4 shadow-lg p-4 cursor-pointer">
        <div className="flex justify-between" onClick={clickHandel}>
          <span className="text-lg font-bold">
            {catagory?.card?.card?.title} (
            {catagory?.card?.card?.itemCards.length})
          </span>
          <span>
            <img src={showItems ? upArrowSvg :downArrowSvg} className="h-6 w-6"></img>
          </span>
        </div>
        {showItems && <ItemList list = {catagory?.card?.card?.itemCards}/>}
      </div>
        
    </div>
  );
};

export default RestautrantCategory;
