import { useEffect, useState } from "react";

const RestaurantMenu = ()=> {

    // useEffect(()=>{
    //     fetchMenue()
    // }, [])
    // const fetchMenue = async ()=> {
    //     const data = await fetch("")
    // }
    return (
        <div>
            <h1>Restaurant Name</h1>
            <p>Menue : </p>
            <ul>
                <li>Biryani</li>
                <li>Sandwich</li>
                <li>Burger</li>
                <li>Pizza</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;