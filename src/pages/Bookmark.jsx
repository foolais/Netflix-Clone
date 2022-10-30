import React from "react";
import { Footer, Navbar } from "../components";

const Bookmark = () => {
  return (
    <div>
      <Navbar location="Home" />
      <div className="px-4 py-28">
        <h2 className="text-2xl text-white font-bold">Bookmark</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Bookmark;
