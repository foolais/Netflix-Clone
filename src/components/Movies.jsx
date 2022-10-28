import React from "react";
import { UserAuth } from "../context/AuthContext";

const Movies = ({ item }) => {
  const { setModal, setMoviesData } = UserAuth();

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleModal = () => {
    setModal(true);
    setMoviesData(item);
  };

  return (
    <>
      <div className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] inline-block p-2 relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div
          onClick={handleModal}
          data-modal-toggle="defaultModal"
          className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100 cursor-pointer"
        >
          <p className="text-white flex items-center justify-center h-full font-semibold text-xs md:text-base">
            {truncateString(item?.title, 27)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movies;
