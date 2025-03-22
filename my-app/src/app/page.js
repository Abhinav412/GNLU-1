"use client";

import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    "PIL & AI",
    "PIL in Daily Life",
    "PIL & Recent Developments in War",
    "PIL & Economic Sanctions",
    "PIL & Climate Change",
  ];

  const images = [
    "url('/images/pil_ai.jpg')", // Replace with actual image paths
    "url('/images/daily_life.jpg')",
    "url('/images/pil_war.png')",
    "url('/images/next.svg')",
    "url('/images/climate_change.jpg')", // Add the provided image here
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen gap-5 relative`}
      style={{ backgroundImage: images[currentIndex], backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <div
        className="w-[1000px] h-[250px] p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center"
      >
        <h1 className="text-xl font-bold text-black">{cards[currentIndex]}</h1>
      </div>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"
        onClick={handleNext}
      >
        &#8594;
      </button>
      <div className="flex gap-2 mt-5">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-teal-800" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
