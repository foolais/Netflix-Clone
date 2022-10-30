import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { Footer } from "../components";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();
  const [change, setChange] = useState(false);
  console.log(user);

  return (
    <div>
      <Navbar location="Home" />
      <div className="px-4 py-28">
        <div className="flex gap-6">
          <h2 className="text-2xl text-white font-semibold">Account</h2>
          <div className="text-primaryColor text-2xl flex items-center gap-3">
            <FaUsers />
            <p className="text-white text-sm font-semibold">
              Anggota sejak Oktober 2022
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-white flex justify-between">
          <div className="text-xl font-semibold text-[#777]">DETAIL AKUN</div>
          <div>
            {change ? (
              <form onSubmit={alert("Function Maintance")}>
                <div className="w-full relative">
                  <input
                    type="email"
                    placeholder={user.email}
                    className="text-black py-2 px-4 outline-none w-full rounded-md"
                  />
                  <div>
                    <button className="p-2 bg-primaryColor absolute top-0 bottom-0 right-0 rounded-r-md hover:bg-red-700 ">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <>
                <p>{user.email}</p>
              </>
            )}
          </div>
          <div className="text-blue-500">
            <div
              onClick={() => setChange(!change)}
              className="cursor-pointer hover:underline-offset-2"
            >
              Change email
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-white flex justify-between">
          <div className="text-xl font-semibold text-[#777]">DETAIL PACKET</div>
          <div>
            <p>Premium ULTRA HD</p>
          </div>
          <div className="text-blue-500">
            <div className="cursor-pointer hover:underline-offset-2">
              Change Packet
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      <Footer />
    </div>
  );
};

export default Account;
