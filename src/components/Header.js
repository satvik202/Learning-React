import FoodFireLogo from "../../img/Food Fire Logo.png";
const Header = ()=> {
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
          </ul>
        </div>
      </div>
    )
  }


export default Header