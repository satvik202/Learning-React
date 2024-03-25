
import useRestaurantMenue from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=> {

    const {resId}=useParams()
    console.log(resId); 
    
    const {restaurant, menuItems} = useRestaurantMenue(resId)

    if(restaurant==null){
        return <Shimmer/>
    }

    return (
        <div>
             {/* {restaurant && <h1 >{restaurant.name}</h1>} */}

             <h1>{restaurant.name}</h1>

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