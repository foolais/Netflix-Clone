import React from "react";

const StoryCard = (props) => {
  const { title, subtitle, image, align } = props;
  return (
    <div className="text-white h-screen lg:h-1/2  border-y-4 border-y-[#222]">
      <div
        className={`text-center w-4/5 mx-auto py-20 lg:w-full lg:py-10 lg:flex lg:items-center lg:justify-end lg:text-left ${
          align === "right" ? "lg:flex-row-reverse" : null
        }`}
      >
        <div
          className={`lg:w-1/2  ${
            align === "left"
              ? "lg:pl-44"
              : align === "right"
              ? "lg:pr-44"
              : null
          } `}
        >
          <h2 className="text-4xl font-semibold mb-4 lg:text-5xl lg:mb-6">
            {title}
          </h2>
          <h3 className="text-xl lg:text-2xl">{subtitle}</h3>
        </div>
        <div className="lg:w-1/2">
          <img className="w-[500px] mx-auto lg:w-[500px]" src={image} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
