import FoodFireLogo from "../../img/Food Fire Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=> {
    const [btnName, setBtnName] = useState("Login");
    return (
      <div className="flex justify-between shadow-lg color text-stone-600 font-medium" >
        <div className="w-28">
        <Link to="/"><img className="logo" src={FoodFireLogo}/></Link>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li>Online Status :{useOnlineStatus() ? "✅" : "🔴"}</li>
            <li className="ml-4"><Link to="/">Home</Link></li>
            <li className="ml-4"><Link to="/about">About Us</Link></li>
            <li className="ml-4"><Link to="/contact">Contact Us</Link></li>
            <li className="ml-4"><Link to="/grocery">Grocery</Link></li>
            <li className="ml-4">Cart</li>
            <button className="mx-4" onClick={()=> {
              btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }


export default Header