import React from "react";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const FaqQuestion = (props) => {
  const { title, subtitle1, subtitle2 } = props;
  const [modal, setModal] = useState(false);
  return (
    <>
      <div
        className="w-full bg-[#303030] py-4 px-6 flex items-center justify-between mb-2 cursor-pointer lg:w-4/5 lg:mx-auto"
        onClick={() => setModal(!modal)}
      >
        <p className="text-xl lg:text-2xl">{title}</p>
        {modal ? (
          <FaTimes className="text-xl " />
        ) : (
          <FaPlus className="text-xl" />
        )}
      </div>
      {modal ? (
        <div className="w-full bg-[#303030] py-2 px-6 border-t-2 border-t-black mb-2 lg:w-4/5 lg:mx-auto ">
          <div className="w-11/12 py-3">
            {subtitle2 ? (
              <>
                <p className="text-lg mb-6">{subtitle1}</p>
                <p className="text-lg">{subtitle2}</p>
              </>
            ) : (
              <>
                <p className="text-lg">{subtitle1}</p>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FaqQuestion;
