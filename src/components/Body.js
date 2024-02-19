import resList from "../utils/mokeData";
import RestaurantCard from "./RestaurantCard";
const Body = ()=>{
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {
            resList.map(res => <RestaurantCard key={res.info.id} resData={res}/>)
          }
        </div>
      </div>
    )
  }

  export default Body;