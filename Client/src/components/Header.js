import FoodFireLogo from "../../img/Food Fire Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=> {
    const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={FoodFireLogo}/>
        </div>
        <div className="nav-bar">
          <ul>
            <li>Online Status :{useOnlineStatus() ? "✅" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=> {
              btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }


export default Header