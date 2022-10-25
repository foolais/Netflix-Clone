import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-primaryColor text-4xl cursor-pointer font-bebasNue">
        Netflix
      </h1>
      <div>
        <button className="text-white pr-4 hover:text-primaryColor duration-200">
          Sign In
        </button>
        <button className="bg-primaryColor text-white ml-4 py-2 px-6 rounded-sm normal-case hover:bg-red-800">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
