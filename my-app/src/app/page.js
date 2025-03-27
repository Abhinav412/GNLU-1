"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Head from "next/head"; // Import Head for adding global styles

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // Initialize router
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
    "url('/images/sanctions.jpg')",
    "url('/images/climate_change.jpg')", // Add the provided image here
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
  };

  const handleCardClick = () => {
    if (cards[currentIndex] === "PIL & AI") {
      router.push("/pil_ai");
    } else if (cards[currentIndex] === "PIL in Daily Life") {
      router.push("/daily_life");
    }
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`body { font-family: 'Inter', sans-serif; }`}</style>
      </Head>
      <div
        className={`flex flex-col items-center justify-center h-screen gap-5 relative`}
        style={{ backgroundImage: images[currentIndex], backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-700 transition"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <div
          className="w-[1000px] h-[250px] p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center text-center cursor-pointer"
          onClick={handleCardClick} // Add click handler
        >
          {cards[currentIndex] === "PIL & AI" ? (
            <>
              <h1
                className="text-xl font-bold text-blue-600 underline cursor-pointer"
                onClick={() => router.push("/pil_ai")}
              >
                {cards[currentIndex]}
              </h1>
              <p
                className="text-black mt-2"
                style={{ fontFamily: "'Apple Color Emoji', sans-serif" }}
              >
                {`Artificial Intelligence (AI) transcends geographical boundaries, influencing individual lives and shaping societies worldwide. AI impacts a broad spectrum of activities, from determining credit scores and curating social media feeds to developing advanced weapons and influencing global information systems. Given these widespread applications, AI governance cannot be confined to corporate responsibility alone; it requires active participation from all states.
AI governance is an inherently complex challenge that necessitates cooperation among diverse stakeholders with varying cultural, social, and political perspectives. Private enterprises, civil society organizations, academic institutions, and governments must collaborate to create effective governance frameworks. International law provides a well-established foundation upon which global AI governance can be built, offering a common language for legal and ethical discourse.`}
              </p>
            </>
          ) : cards[currentIndex] === "PIL in Daily Life" ? (
            <>
              <h1
                className="text-xl font-bold text-blue-600 underline cursor-pointer"
                onClick={() => router.push("/daily_life")}
              >
                {cards[currentIndex]}
              </h1>
              <p
                className="text-black mt-2"
                style={{ fontFamily: "'Apple Color Emoji', sans-serif" }}
              >
                {`Public International Law (PIL) permeates our daily lives in ways often overlooked. From the regulations governing international travel and commerce to the standards that ensure the safety of imported products, PIL establishes frameworks that directly impact individuals worldwide. These laws facilitate cross-border communication, protect intellectual property across national boundaries, and ensure basic human rights regardless of citizenship.

When we use the internet, purchase goods manufactured abroad, or travel internationally, we encounter the practical applications of treaties, conventions, and customary international law. PIL also influences environmental regulations, labor standards, and health protocols that protect our communities. Understanding how these international legal frameworks shape our everyday experiences helps us appreciate the interconnected nature of our global society and the importance of international cooperation.`}
              </p>
            </>
          ) : (
            <h1 className="text-xl font-bold text-black">{cards[currentIndex]}</h1>
          )}
        </div>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-yellow-500 text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-700 transition"
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
    </>
  );
}
