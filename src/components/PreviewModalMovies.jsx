import React, { useState } from "react";
import { FaBookmark, FaPlay, FaRegBookmark, FaTimes } from "react-icons/fa";

const PreviewModalMovies = (props) => {
  const { item, closeModal } = props;
  const [save, setSave] = useState(false);
  return (
    <div className="w-full bg-black/20 fixed top-0 left-0 right-0 bottom-0 z-[99] overflow-y-auto">
      <div className="w-11/12 h-full z-[99] mx-auto py-4 md:w-3/4 lg:w-4/6 xl:w-1/2">
        <div className="w-full mx-auto my-8 rounded-t-xl">
          {/* image */}
          <div className="relative ">
            <div className="bg-gradient-to-t from-[#181818] w-full h-full absolute top-0 z-[100] ">
              <div className="absolute top-[65%] w-full px-16">
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
                        <FaBookmark />
                      </button>
                    ) : (
                      <button className="border-2 border-white text-white p-2 rounded-full hover:bg-white hover:text-black">
                        <FaRegBookmark />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <img
              className="object-cover w-full h-full rounded-xl relative"
              src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
              alt={item?.title}
            />
            <div
              onClick={closeModal}
              className="text-white absolute top-2 right-2 z-[101] bg-[#181818] p-1 rounded-full cursor-pointer"
            >
              <FaTimes />
            </div>
          </div>
          {/* text */}
          <div className="flex gap-4 px-16 pb-12 bg-[#181818]">
            <div className="w-2/3 text-white">
              <p className="mb-4 text-green-500">Rating {item?.vote_average}</p>
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
          <div className="bg-current w-full h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModalMovies;
