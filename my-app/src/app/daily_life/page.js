"use client";

import { useRouter } from "next/navigation";

export default function DailyLife() {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300">
      <h1 className="text-3xl font-bold mb-5 font-serif">
        Daily Life
      </h1>
      <div className="flex gap-5">
        <div
          className="w-[300px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleCardClick("/daily_life/Analysis")}
        >
          <h2 className="text-lg font-bold">Analysis</h2>
        </div>
        <div
          className="w-[300px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleCardClick("/daily_life/Sources")}
        >
          <h2 className="text-lg font-bold">Sources</h2>
        </div>
      </div>
    </div>
  );
}
