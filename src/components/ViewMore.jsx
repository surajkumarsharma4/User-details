import React from "react";
import { useLocation } from "react-router-dom";

const ViewMore = () => {
  let { state } = useLocation();

  return <div className="data">ViewMore</div>;
};

export default ViewMore;
