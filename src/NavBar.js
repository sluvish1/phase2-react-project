import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "hotpink",
  textDecoration: "none",
  color: "pink",
}; 

function NavBar() {
    return (
      <nav className="navbar">
        {/* <NavLink to="/bookform" exact style={linkStyles}>
          Book Form
        </NavLink> */}
        <NavLink to="/bookslist" exact style={linkStyles}>
          Books List
        </NavLink>
        <NavLink to="/readlater" exact style={linkStyles}>
          Read Later
        </NavLink>
        <NavLink to="/booksread" exact style={linkStyles}>
          Books Read
        </NavLink>
      </nav>
    );
}

export default NavBar