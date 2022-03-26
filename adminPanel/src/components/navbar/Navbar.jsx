import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchIcon />
        </div>

        <div className="items">
          <div className="item">
            <ExitToAppIcon className="icon" />
          </div>
          <div className="item">
            <NotificationAddIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="avatar"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
