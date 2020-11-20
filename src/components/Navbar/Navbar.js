import React from "react";
import { MenuItems } from "./Menuitems";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">React</h1>

      <div className="menu-icon"> </div>

      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
