import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">Logo</div>
      <div className="navlink">
        <Link to={"/home/Login"}>Login</Link>
        <Link to={"/home/register"}>Register</Link>
        <Link to={"/home/about"}>About</Link>
      </div>
    </div>
  );
};

export default NavBar;
