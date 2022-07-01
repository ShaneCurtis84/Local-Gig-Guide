import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

  function Navigation() {

     (
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
  

  return (
  

      <nav>
        {Navigation()}
      </nav>

  );
}

export default NavBar;