// import { useEffect, useState } from "react";
import useRestaurantMenue from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=> {

    // const [data,setData]=useState("");

    const {resId}=useParams()
    // // console.log(ref);   
    
    const data = useRestaurantMenue(resId)
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
    return (
        <div>
            <h1>{data.info?.name}</h1>
            {/* {console.log(data.info?.name)} */}
            <p>cuisine : </p>
            {data.info?.cuisine.map((item, index) => <li key={index}>{item.name}</li>)}
        </div>
    )
}

export default RestaurantMenu;