import React from "react";
import AsideBar from "./AsideBar";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="alldata">
      <AsideBar />
      <Outlet />
    </div>
  );
};

export default Users;
