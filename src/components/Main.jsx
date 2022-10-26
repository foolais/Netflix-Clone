import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import request from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(request.popularMovies).then((res) => {
        setMovies(res.data.results);
      });
    };
    fetchData();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[650px] text-white">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[650px] bg-gradient-to-r bg-gradient-to-t from-black"></div>
        <img
          className="object-cover object-top w-full h-full"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[20%] lg:top-[30%] p-4 gap-2">
          <h2 className="text-3xl mb-4 tracking-wider lg:text-5xl">
            {movie?.title}
          </h2>
          <button className="border bg-gray-300 text-black px-5 py-2 hover:bg-gray-400 hover:border-gray-400 lg:px-8 lg:py-3">
            Play
          </button>
          <button className="border border-gray-300 text-gray-300 px-5 py-2 ml-4 hover:bg-gray-300 hover:text-black mb-6 lg:px-8 lg:py-3">
            Watch Later
          </button>
          <p className="text-sm text-gray-400 mb-2 lg:text-lg">
            Released {movie?.release_date}
          </p>
          <p className="text-xl tracking-wide lg:max-w-[60%]">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
