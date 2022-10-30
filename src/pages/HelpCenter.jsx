import React from "react";
import { Footer } from "../components";
import Navbar from "../components/Navbar";
import { FaNewspaper, FaSearch } from "react-icons/fa";

const HelpCenter = () => {
  return (
    <div>
      <Navbar location="Home" />
      <div className="px-4 pt-28">
        <div className="w-full">
          <h2 className="text-2xl text-white text-center font-semibold">
            Help Center
          </h2>
          <div className="w-full flex flex-row-reverse justify-center mb-8 mt-4">
            <input
              type="text"
              placeholder=" How can I help, Lord ? "
              className="w-3/5 py-2 rounded-r-lg"
            />
            <div className="text-[#777] bg-white flex items-center px-3 text-xl rounded-l-lg">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] w-full px-4 py-6">
        <b className="text-lg font-bold">Hello there</b>
        <p className="mt-2">Recommend for you</p>
        <div className="md:flex items-center justify-between">
          <div className="bg-white  p-4 w-full md:w-[30%] shadow-lg flex items-center gap-4 cursor-pointer hover:bg-[#eee]">
            <div className="text-2xl">
              <FaNewspaper />
            </div>
            <p className="font-semibold">Cara menjaga keamanan akun</p>
          </div>
          <div className="bg-white  p-4 w-full md:w-[30%] my-4 shadow-lg flex items-center gap-4 cursor-pointer hover:bg-[#eee]">
            <div className="text-2xl">
              <FaNewspaper />
            </div>
            <p className="font-semibold">Kontrol orang tua di Netflix Clone</p>
          </div>
          <div className="bg-white  p-4 w-full md:w-[30%] shadow-lg flex items-center gap-4 cursor-pointer hover:bg-[#eee]">
            <div className="text-2xl">
              <FaNewspaper />
            </div>
            <p className="font-semibold">Cara mengubah paket</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] px-4 py-6">
        <p className="font-bold text-lg mb-6">Ingin menghubungi kami?</p>
        <div className="flex justify-between gap-4">
          <button className="py-2 w-1/2 bg-[#fafafa] border-2 border-[#777] text-[#777] hover:bg-[#f2f2f2] cursor-pointer">
            HUBUNGI KAMI
          </button>
          <button className="py-2 w-1/2 bg-[#fafafa] border-2 border-[#777] text-[#777 hover:bg-[#f2f2f2] cursor-pointer">
            MULAI OBROLAN LANGSUNG
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
