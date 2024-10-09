import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {

    const [logbtn, setLogbtn]=useState("login");
    //let logbtn = "login"
    const status = useOnlineStatus();
    const {loggedinUser} = useContext(userContext);
    // console.log(loggedinUser)

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
          <li><Link to="/Cart">Cart</Link></li>
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