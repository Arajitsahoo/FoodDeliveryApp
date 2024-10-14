import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import appStore from "../utils/Store";

const Header = () => {

    const [logbtn, setLogbtn]=useState("login");
    //let logbtn = "login"
    const status = useOnlineStatus();
    const {loggedinUser} = useContext(userContext);
    // console.log(loggedinUser)
    
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    return <div className="header">
      <div className="logo">
        {" "}
        <img src="./src/assets/6pei97n4.png" alt="logo" />
      </div>
      <div className="nav-items">

        <ul>
          <li>Status:{status ? "🟢" : "🔴" }</li>
          <li><Link  to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contactUs">Contact Us</Link></li>
          <li className="bold"><Link to="/Cart">Cart - ({cartItems.length} Items)</Link></li>
          <li> <button onClick={()=>{
           logbtn ==="login"? setLogbtn("logout") : setLogbtn("login");
            // console.log(logbtn)
            }}>{logbtn}</button></li>
            <li>{loggedinUser}</li>
        </ul>
      </div>
    </div>
};
  export default Header;