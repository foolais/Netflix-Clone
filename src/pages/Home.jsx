import React from "react";
import { Navbar, Main } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <p className="text-white sm:text-primaryColor">Main</p>
    </div>
  );
};

export default Home;
