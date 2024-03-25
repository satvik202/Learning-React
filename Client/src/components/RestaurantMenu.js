// import { useEffect, useState } from "react";
import useRestaurantMenue from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=> {

    // const [data,setData]=useState("");

    const {resId}=useParams()
    console.log(resId); 
    
    const {restaurant, menuItems} = useRestaurantMenue(resId)
    // console.log("we are in restaurant menue")
    // console.log(restaurant)
    // console.log(menuItems)
//{
    // console.log("finished");
    // console.log(data)
    // useEffect(()=>{
    //     fetchMenue()
    // }, [])

    // const fetchMenue = async ()=> {
    //     const data = await fetch("http://localhost:8000/restaurant/"+resId);

    //     const jsn=await data.json();
    //     // console.log(jsn);
    //     setData(jsn);
    // }
//}

    return (
        <div>
             {restaurant && <h1 >{restaurant.name}</h1>}

            <br></br>
            <br></br>
            <h1>Menue Items : </h1>
            <div>
            {
                menuItems.filter(item => !isNaN(item.price)).map(item => (
                    <p key={item.id}>
                        {item.name} - ₹{item.price/100}
                    </p>
                ))
            }
            </div>
        </div>
    )
}

export default RestaurantMenu;