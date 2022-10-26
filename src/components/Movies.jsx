import React from "react";

const Movies = ({ item }) => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] inline-block p-2 relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100 cursor-pointer">
        <p className="text-white flex items-center justify-center h-full font-semibold text-xs md:text-base">
          {truncateString(item?.title, 32)}
        </p>
      </div>
    </div>
  );
};

export default Movies;
