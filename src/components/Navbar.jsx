import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {
  FaAngleDown,
  FaRegUser,
  FaRegQuestionCircle,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";

const Navbar = ({ location }) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [accModal, setAccModal] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[99] absolute w-full">
      <Link to={user ? "/dashboard" : "/"}>
        <h1 className="text-primaryColor text-5xl cursor-pointer font-bebasNue">
          Netflix
        </h1>
      </Link>
      <div>
        {location === "Home" ? (
          <>
            {/* dashboard */}
            {user?.email ? (
              <div className="relative">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setAccModal(!accModal)}
                >
                  <img
                    className="w-10 object-cover"
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e"
                    alt="/"
                  />
                  <div className="text-white text-xl">
                    <FaAngleDown />
                  </div>
                </div>
                {accModal ? (
                  <div className="w-max bg-zinc-800 absolute right-0 mr-2 mt-4 flex flex-col text-white text-sm gap-2 rounded-md overflow-hidden">
                    <Link to="/account">
                      <div className="cursor-pointer hover:bg-zinc-700 py-2 px-4 flex items-center gap-2">
                        <FaRegUser />
                        Account
                      </div>
                    </Link>
                    <Link to="/dashboard">
                      <div className="cursor-pointer hover:bg-zinc-700 py-2 px-4 flex items-center gap-2">
                        <FaHome />
                        Dashboard
                      </div>
                    </Link>
                    <Link to="/help-center">
                      <div className="cursor-pointer hover:bg-zinc-700 py-2 px-4 flex items-center gap-2">
                        <FaRegQuestionCircle />
                        Help Center
                      </div>
                    </Link>
                    <div
                      onClick={handleLogout}
                      className="cursor-pointer hover:bg-zinc-700 py-2 px-4 flex items-center gap-2"
                    >
                      <FaSignOutAlt />
                      Logout
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <>
                <Link to="/signin">
                  <button className="text-white pr-4 hover:text-primaryColor duration-200">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-primaryColor text-white ml-4 py-2 px-6 rounded-sm normal-case hover:bg-red-800">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </>
        ) : location === "SessionPage" ? null : location === "LandingPage" ? (
          <>
            <Link to="/signin">
              <button className="bg-primaryColor text-white ml-4 py-2 px-6 rounded-sm normal-case hover:bg-red-800">
                Sign In
              </button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
