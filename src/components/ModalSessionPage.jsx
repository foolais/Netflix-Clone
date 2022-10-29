import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ModalSessionPage = (props) => {
  const { title, page, anotherTitle, anotherPage, action, error } = props;
  const { setEmail, setPassword } = UserAuth();
  return (
    <div className="w-[350px] lg:w-[400px] h-[500px] bg-black/80 p-12 rounded text-white">
      <h2 className=" text-2xl lg:text-3xl text-left font-semibold mb-4">
        {title}
      </h2>
      <form onSubmit={action}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-3 px-5 my-3 bg-[#333] rounded  outline-none"
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full py-3 px-5 my-3 bg-[#333] rounded  outline-none"
          type="password"
          placeholder="Password"
          required
        />
        <button className="w-full p-3 bg-primaryColor  rounded mt-8 mb-4">
          {title}
        </button>
        {error ? <p className="text-yellow-400 text-sm">{error}</p> : null}
      </form>
      {page === "signin" ? (
        <>
          <p className=" text-sm mt-4">
            <span className="text-[#737373]">New to Netflix?</span>
            <Link to={`/${anotherPage}`}>{" " + anotherTitle}</Link>
          </p>
        </>
      ) : page === "signup" ? (
        <>
          <p className=" text-sm mt-4">
            <span className="text-[#737373]">Subscribe to Netflix?</span>
            <Link to={`/${anotherPage}`}>{" " + anotherTitle}</Link>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default ModalSessionPage;
