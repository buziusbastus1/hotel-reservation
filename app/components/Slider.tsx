"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // let mobileIndex = 2;
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 2);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 2);
  };

  const swipesPerScreen = isMobile ? 1.5 : 3;
  // const swipeOffset = isMobile ? 2 : 0;

  return (
    <div className="relative w-full overflow-hidden sm:mb-4 md:mb-6">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * (100 / children.length)}%)`,
          width: `${children.length * 50}%`,
        }}
      >
        {children.map((child, index: number) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{
              width: `${
                isMobile
                  ? 200 / (children.length * 2)
                  : 100 / (children.length * 2)
              }%`,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      <button
        className={` outline absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none 
        ${currentIndex === 0 ? "hidden" : ""}`}
        onClick={handlePrev}
      >
        <FaChevronLeft className="text-2xl" />
      </button>

      <button
        className={`outline absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none 
        ${
          currentIndex >= Math.ceil(children.length / swipesPerScreen) - 1
            ? "hidden"
            : ""
        }`}
        onClick={handleNext}
      >
        <FaChevronRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
