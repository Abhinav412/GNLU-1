"use client";

import { useRouter } from "next/navigation";

export default function PilAI() {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-3xl font-bold mb-5 font-serif text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
        PIL & AI
      </h1>
      <p className="text-lg text-center max-w-3xl mb-10">
        {/* Public Interest Litigation (PIL) and Artificial Intelligence (AI) intersect in fascinating ways.
        AI technologies are increasingly being used to analyze legal data, predict case outcomes, and
        assist in drafting legal documents. This page explores the implications of AI in the realm of
        public interest litigation, including ethical considerations and potential benefits. */}
      </p>
      <div className="flex gap-5">
        <div
          className="w-[300px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleCardClick("/pil_ai/Analysis")}
        >
          <h2 className="text-lg font-bold">Analysis</h2>
        </div>
        <div
          className="w-[300px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleCardClick("/pil_ai/topic2")}
        >
          <h2 className="text-lg font-bold">FAQ</h2>
        </div>
        <div
          className="w-[300px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition"
          onClick={() => handleCardClick("/pil_ai/topic3")}
        >
          <h2 className="text-lg font-bold">Sources</h2>
        </div>
      </div>
    </div>
  );
}
