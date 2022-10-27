import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalSessionPage, Navbar } from "../components";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const { logIn, email, password } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (error) {
      const errorCode = error.code.slice(5).replace(/-/g, " ");
      setError(errorCode);
    }
  };
  return (
    <div>
      <Navbar location="SessionPage" />
      <div className="w-full h-screen relative">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/83b58a62-6624-4188-8119-8bdf395dae3f/ID-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="w-full h-screen bg-black/50 absolute top-0 left-0 z-10 flex items-center justify-center">
          <ModalSessionPage
            title="Sign In"
            anotherTitle="Sign Up"
            page="signin"
            anotherPage="signup"
            action={handleSubmit}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
