"use client";

import { useRouter } from "next/navigation";

export default function PilAI() {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 relative">
      <button 
        className="absolute top-5 left-5 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        onClick={() => router.push("/")}
      >
        <span className="text-2xl">←</span>
      </button>
      <h1 className="text-3xl font-bold mb-5 font-serif">
        PIL & Climate Change
      </h1>
      <div className="flex gap-5">
        <div
          className="w-[300px] h-[200px] bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-white/90 transition"
          onClick={() => handleCardClick("/climate_change/Analysis")}
        >
          <h2 className="text-lg font-bold">Analysis</h2>
        </div>
        <div
          className="w-[300px] h-[200px] bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-white/90 transition"
          onClick={() => handleCardClick("/climate_change/FAQ")}
        >
          <h2 className="text-lg font-bold">FAQ</h2>
        </div>
        <div
          className="w-[300px] h-[200px] bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-white/90 transition"
          onClick={() => handleCardClick("/climate_change/Sources")}
        >
          <h2 className="text-lg font-bold">Sources</h2>
        </div>
      </div>
    </div>
  );
}
