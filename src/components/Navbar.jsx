import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = ({ location }) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signup");
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
              <>
                <button
                  onClick={handleLogout}
                  className="bg-primaryColor text-white ml-4 py-2 px-6 rounded-sm normal-case hover:bg-red-800"
                >
                  Logout
                </button>
              </>
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
