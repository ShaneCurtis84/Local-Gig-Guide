import React from "react";
import Auth from '../utils/auth';
import { Link } from "react-router-dom";

function NavBar() {

  function Navigation() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to="/">
              Check out the local gigs
            </Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
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