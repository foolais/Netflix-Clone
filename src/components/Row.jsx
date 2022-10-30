import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Movies from "./Movies";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import PreviewModalMovies from "./PreviewModalMovies";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const { modal, setModal, moviesData } = UserAuth();

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(fetchURL).then((res) => {
        setMovies(res.data.results);
      });
    };
    fetchData();
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      {modal ? (
        <PreviewModalMovies
          item={moviesData}
          closeModal={() => setModal(false)}
        />
      ) : null}
      <h2 className="text-white font-semibold text-lg lg:text-xl p-4 mt-11 ">
        {title}
      </h2>
      <div className="relative flex items-center px-4 group">
        <FaAngleLeft
          className="absolute left-3 bg-white rounded-full z-10 opacity-70 hover:opacity-100 cursor-pointer hidden group-hover:block"
          size={30}
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full left-0 overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth"
        >
          {movies
            .filter((item) => item?.backdrop_path)
            .map((item, id) => (
              <Movies key={id} item={item} />
            ))}
        </div>
        <FaAngleRight
          className="absolute right-3 bg-white rounded-full z-10 opacity-70 hover:opacity-100 cursor-pointer hidden group-hover:block"
          size={30}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Row;
