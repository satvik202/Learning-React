import { useEffect, useState } from "react"
import { MENUE_API } from "./constants";

const useRestaurantMenue = (resId)=>{
    const [resInfo, setResInfo] = useState("");
    useEffect(()=>{
        // console.log("inside useeffect");
        fetchData(resId)
    }, []);
    // console.log("outside useeffect");
    const fetchData = async (resId) =>{
        const data = await fetch(MENUE_API+resId);
        const jsn=await data.json();

        setResInfo(jsn)
    }
    return resInfo
}
export default useRestaurantMenue