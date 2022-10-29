import React from "react";
import { Footer } from "../components";
import Navbar from "../components/Navbar";

const HelpCenter = () => {
  return (
    <div>
      <Navbar location="Home" />
      <h2 className="text-4xl text-white py-20 px-4">HelpCenter</h2>
      <Footer />
    </div>
  );
};

export default HelpCenter;
