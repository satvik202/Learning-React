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
            <li className="p-2">Online Status :{useOnlineStatus() ? "✅" : "🔴"}</li>
            <li className="ml-4 hover:bg-orange-500 hover:text-white hover:rounded-md p-2 delay-75"><Link to="/">Home</Link></li>
            <li className="ml-4 hover:bg-orange-500 hover:text-white hover:rounded-md p-2 delay-75"><Link to="/about">About Us</Link></li>
            <li className="ml-4 hover:bg-orange-500 hover:text-white hover:rounded-md p-2 delay-75"><Link to="/contact">Contact Us</Link></li>
            <li className="ml-4 hover:bg-orange-500 hover:text-white hover:rounded-md p-2 delay-75"><Link to="/grocery">Grocery</Link></li>
            <li className="ml-4 hover:bg-orange-500 hover:text-white hover:rounded-md p-2 delay-75">{'\u00A0'}Cart{'\u00A0'}</li>
            <button className="mx-4 hover:bg-orange-500 hover:text-white hover:rounded-md p-2 delay-75" onClick={()=> {
              btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }


export default Header