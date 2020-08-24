import React from "react";
import {  BrowserRouter as Router,  Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";

const SideBar = () => {
  return (
    <div className="no-padding col-md-3">
      <div className="side-bar">
        <div className="logo">
          <img
            src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
            alt=""
          />
        </div>
          <ul className="navbar-sidebar">
            <li>
              <Link to="/">
                <FontAwesome name="fas fa-cog" size="2x" />
                Dashboard 
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FontAwesome name="fas fa-cog" size="2x" />
                login
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
};
export default SideBar;
