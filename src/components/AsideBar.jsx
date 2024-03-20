import React from "react";
import { NavLink } from "react-router-dom";

const AsideBar = () => {
  return (
    <section className="AsideBar">
      <div className="links">
        <NavLink to={"/users"} >
          All Users
        </NavLink>
        <NavLink to={"/users/createusers"} >
          Create User
        </NavLink>
      </div>
    </section>
  );
};

export default AsideBar;
