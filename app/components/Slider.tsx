"use client";
import { useState } from "react";

const Slider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none ${
          currentIndex === 0 ? "hidden" : ""
        }`}
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none ${
          currentIndex === children.length - 1 ? "hidden" : ""
        }`}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
