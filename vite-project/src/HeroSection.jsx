import React from "react";
import img1 from "./imges/my.jpg.png";

const HeroSection = () => {
  return (
    <section className="bg-[#fdf9f3] py-20 flex flex-col items-center md:flex-row md:justify-center px-6 md:px-20">
      <div className="text-center md:text-left max-w-lg">
        <h1
          style={{ fontFamily: "'Boogaloo', cursive" }}
          className="text-6xl md:text-6xl lg:text-6xl font-bold text-black leading-tight"
        >
          Get 1000 hours <br /> of world-class <br /> stories,{" "}
          <span className="text-black">free.</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          From our multi-Emmy® winning storytellers.
        </p>
        <button className="mt-6 bg-[#ff2e63] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#e50050] transition">
          Download the free app
        </button>
      </div>
      <div className="relative mt-10 md:mt-0 md:ml-10">
        <img src={img1} alt="App Preview" className="w-[800px]" />
      </div>
    </section>
  );
};

export default HeroSection;
