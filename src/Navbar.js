import React from "react";
import './Navbar.css';
// import NavComponents from "./NavComponents";
import SearchIcon from "@material-ui/icons/Search";
// import HomeIcon from "@material-ui/icons/Home";
// import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
// import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import ChatIcon from "@material-ui/icons/ChatIcon";


function Navbar(){
    return(
        <div className="NavContainer">
            <div className="NavLeft">
                <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt=""/>
                <div className="SearchBox">
                    <SearchIcon/>
                    <input type="text"  placeholder="Search"/>
                </div>
            </div>
            <div className="NavRight">
                {/* <NavComponents Icon={HomeIcon} title="Home"/> */}
            </div>

        </div>
    )
}

export default Navbar;