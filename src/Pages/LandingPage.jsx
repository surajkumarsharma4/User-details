import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <section className="start">
      <Link to={"/home"}>Get Started</Link>
    </section>
  );
};

export default LandingPage;
