import React from "react";
import { FaAngleRight } from "react-icons/fa";

const GetStarted = () => {
  return (
    <form>
      <div className="w-full lg:relative">
        <input
          type="email"
          className="w-full p-4 text-black outline-none"
          placeholder="Email address"
        />
        <div className="flex justify-center my-4 lg:my-0">
          <button className="bg-primaryColor py-3 px-4 rounded flex items-center justify-center gap-2 lg:text-2xl lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:rounded-none">
            Get Started
            <FaAngleRight />
          </button>
        </div>
      </div>
    </form>
  );
};

export default GetStarted;
