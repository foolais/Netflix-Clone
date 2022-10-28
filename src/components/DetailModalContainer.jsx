import React, { useState } from "react";
import { FaTimes, FaPlay, FaCheck, FaPlus } from "react-icons/fa";

const DetailModalContainer = (props) => {
  const { item, closeModal } = props;
  const [save, setSave] = useState(false);

  return (
    <>
      <div className="fixed w-full h-full py-8 top-0 z-[99] bg-black/10">
        <div className="w-11/12 mx-auto bg-[#181818] h-full rounded-xl relative md:w-3/4 lg:w-4/6 xl:w-1/2 ">
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] ">
            <div className="w-full h-full">
              <div className="bg-gradient-to-t from-[#181818] w-full absolute top-0 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"></div>
              <img
                className="object-cover object-top w-full h-full rounded-xl"
                src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div
                onClick={closeModal}
                className="absolute top-0 right-0 text-2xl p-1 m-4 bg-black rounded-full text-white cursor-pointer"
              >
                <FaTimes />
              </div>
            </div>
          </div>
          <div className="absolute top-[35%] w-full px-16">
            <p className="text-white text-2xl font-semibold mb-6">
              {item?.title}
            </p>
            <div className="mb-14 flex items-center gap-4">
              <button className="bg-white hover:bg-gray-300 rounded-md px-7 py-2 font-semibold flex items-center gap-2">
                <FaPlay />
                Play
              </button>
              <div onClick={() => setSave(!save)}>
                {save ? (
                  <button className="border-2 border-white text-white p-2 rounded-full hover:bg-white hover:text-black">
                    <FaCheck />
                  </button>
                ) : (
                  <button className="border-2 border-white text-white p-2 rounded-full hover:bg-white hover:text-black">
                    <FaPlus />
                  </button>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2/3 text-white">
                <p className="mb-4 text-green-500">
                  Rating {item?.vote_average}
                </p>
                <p className="text-sm lg:text-base">{item?.overview}</p>
              </div>
              <div className="text-white text-sm ">
                <p>
                  <span className="text-[#777]">Language : </span>
                  {item?.original_language}
                </p>
                <p className="my-2">
                  <span className="text-[#777] text-sm">Released : </span>
                  {item?.release_date}
                </p>
                <p>
                  <span className="text-[#777] text-sm">Genre : </span>
                  {item?.genre_ids
                    .map((id, item) => <span key={id}>{item}</span>)
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailModalContainer;
