import FoodFireLogo from "../../img/Food Fire Logo.png";
import { useState } from "react";
const Header = ()=> {
    const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={FoodFireLogo}/>
        </div>
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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