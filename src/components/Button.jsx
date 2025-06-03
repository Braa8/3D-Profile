import React from "react";

const ScrollButton = () => {
  const handleScroll = () => {
    const middle = document.body.scrollHeight / 2;
    window.scrollTo({ top: middle, behavior: "smooth" });
  };

  return (
    <div className=" ps-4">
      <button
        onClick={handleScroll}
        className="cta-button px-6 py-3 bg-white rounded-2xl shadow-lg hover:bg-white-50 transition duration-300 text-sm sm:text-base md:text-lg text-black"
      >
        
        <div className="cta-wrapper flex flex-row justify-center gap-2">
          See More
        <img className="wrapper" src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </button>
    </div>
  );
};

export default ScrollButton;
