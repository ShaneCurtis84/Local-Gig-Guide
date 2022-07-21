import React from "react";
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import "./navbarstyle.css";

function NavBar() {

  // Handle sidebar open and close
  window.onload = function(){ 
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};
  }

  function Navigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar">
               <i className="bx bx-menu"></i>
          <div className="logo">
          <Link to="/">
            Local Gig Guide
          </Link>
          </div>
          <div className="nav-links">
          <div className="sidebar-logo">
              <span className="logo-name">Local Gig Guide</span>
              <i className="bx bx-x"></i>
            </div>

        <ul className="links">
   
          <li>
            <Link to="/gigguide">
              Gig Guide
            </Link>
          </li>
          <li>
            <Link to="/addgig">
             Add Gig
            </Link>
          </li>
          <li>
           
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <i className="bx bx-menu"></i>
          <div className="logo">
          <Link to="/">
            Local Gig Guide
          </Link>
          </div>
          <div className="nav-links">
          <div className="sidebar-logo">
              <span className="logo-name">Local Gig Guide</span>
              <i className="bx bx-x"></i>
            </div>
        <ul className="links">

        <li>
            <Link to="/gigguide">
              Gig Guide
            </Link>
          </li>
       
          <li>
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
        </div>
        </div>
      );
    }
  }

  return (
  
     
      <nav>
        {Navigation()}
      </nav>
      

  );
}

export default NavBar;