import React, { useState } from "react";
import { FaGlobe, FaAngleDown } from "react-icons/fa";

const LanguagePicker = () => {
  const [modal, setModal] = useState(false);
  const [language, setLanguage] = useState("English");
  return (
    <>
      <div
        onClick={() => setModal(!modal)}
        className="border-[1px] border-[#737373] mt-9 w-64 flex items-center justify-between p-4 cursor-pointer rounded relative text-white"
      >
        <div className="flex items-center gap-4">
          <FaGlobe />
          <p>{language}</p>
        </div>
        <FaAngleDown />
      </div>
      {modal ? (
        <div className="border-[.5px] border-[#737373] w-64 rounded text-white">
          <div
            className="py-1 pl-12 cursor-pointer hover:bg-blue-500"
            onClick={() => setLanguage("Bahasa Indonesia")}
          >
            <p>Bahasa Indonesia</p>
          </div>
          <div
            className="pb-1 pl-12 cursor-pointer hover:bg-blue-500"
            onClick={() => setLanguage("English")}
          >
            <p>English</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LanguagePicker;
