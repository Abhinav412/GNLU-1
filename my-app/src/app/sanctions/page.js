"use client";

import { useRouter } from "next/navigation";

export default function PilAI() {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-3xl font-bold mb-5 font-serif">
        PIL & Economic Sanctions
      </h1>
      <div className="flex gap-5">
        <div
          className="w-[300px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleCardClick("/sanctions/Analysis")}
        >
          <h2 className="text-lg font-bold">Analysis</h2>
        </div>
        <div
          className="w-[300px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleCardClick("/sanctions/FAQ")}
        >
          <h2 className="text-lg font-bold">FAQ</h2>
        </div>
        <div
          className="w-[300px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleCardClick("/sanctions/Sources")}
        >
          <h2 className="text-lg font-bold">Sources</h2>
        </div>
      </div>
    </div>
  );
}
