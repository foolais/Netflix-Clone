import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { FaBookmark } from "react-icons/fa";

const Bookmark = () => {
  const [book, setBook] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const fetchBookmarks = async () => {
      await onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        setBook(doc.data()?.bookmarks);
      });
    };
    fetchBookmarks();
  }, [user?.email]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteBookmarks = async (passedID) => {
    try {
      const res = book.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        bookmarks: res,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar location="Home" />
      <div className="px-4 py-28">
        <h2 className="text-2xl text-white font-bold">Bookmarks</h2>
        {book.map((item) => (
          <div className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] inline-block p-2 relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${item?.img}`}
              alt={item?.title}
            />
            <div
              data-modal-toggle="defaultModal"
              className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100 cursor-pointer"
            >
              <p className="text-white flex items-center justify-center h-full font-semibold text-xs md:text-base">
                {truncateString(item?.title, 27)}
              </p>
              <p
                onClick={() => deleteBookmarks(item.id)}
                className="absolute text-white top-4 left-4"
              >
                <FaBookmark />
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Bookmark;
