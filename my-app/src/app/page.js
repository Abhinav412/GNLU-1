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
    } else if (cards[currentIndex]== "PIL & Recent Developments in War") {
      router.push("/war");
    }
    else if (cards[currentIndex] === "PIL & Economic Sanctions") {
      router.push("/sanctions");
    } else if (cards[currentIndex] === "PIL & Climate Change") {
      router.push("/climate_change");
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
                className="text-black mt-2 text-justify"
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
                className="text-black mt-2 text-justify"
                style={{ fontFamily: "'Apple Color Emoji', sans-serif" }}
              >
                {`Public International Law (PIL) permeates our daily lives in ways often overlooked. From the regulations governing international travel and commerce to the standards that ensure the safety of imported products, PIL establishes frameworks that directly impact individuals worldwide. These laws facilitate cross-border communication, protect intellectual property across national boundaries, and ensure basic human rights regardless of citizenship.

When we use the internet, purchase goods manufactured abroad, or travel internationally, we encounter the practical applications of treaties, conventions, and customary international law. PIL also influences environmental regulations, labor standards, and health protocols that protect our communities. Understanding how these international legal frameworks shape our everyday experiences helps us appreciate the interconnected nature of our global society and the importance of international cooperation.`}
              </p>
            </>
          ) : cards[currentIndex] === "PIL & Recent Developments in War" ? (
            <>
              <h1
                className="text-xl font-bold text-blue-600 underline cursor-pointer"
                onClick={() => router.push("/war")}
              >
                {cards[currentIndex]}
              </h1>
              <p
                className="text-black mt-2 text-justify"
                style={{ fontFamily: "'Apple Color Emoji', sans-serif" }}
              >
                {`Public International Law (PIL) faces unprecedented challenges in modern warfare contexts. Traditional laws of armed conflict must now address autonomous weapons systems, cyberwarfare, and non-state actors operating across borders. Recent conflicts have highlighted tension between sovereignty principles and humanitarian intervention, while raising questions about proportionality and distinction in asymmetric warfare.

The evolving nature of warfare demands continuous reexamination of legal frameworks established by the Geneva Conventions and customary international law. As technology advances and conflict patterns shift, the international community must adapt PIL to ensure it remains relevant and effective in regulating modern warfare while protecting civilians and maintaining international peace and security.`}
              </p>
            </>
          ) : cards[currentIndex] === "PIL & Economic Sanctions" ? (
            <>
              <h1
                className="text-xl font-bold text-blue-600 underline cursor-pointer"
                onClick={() => router.push("/sanctions")}
              >
                {cards[currentIndex]}
              </h1>
              <p
                className="text-black mt-2 text-justify"
                style={{ fontFamily: "'Apple Color Emoji', sans-serif" }}
              >
                {`Economic sanctions are among the most powerful tools in global diplomacy—leveraged to uphold international law, deter aggression, and punish human rights violations. Yet their use sits at the crossroads of legal legitimacy, humanitarian consequences, and geopolitical strife. Public International Law (PIL) governs the application of sanctions, from UN Security Council resolutions to unilateral measures, while grappling with critical questions: Do sanctions effectively enforce compliance, or do they inflict undue harm on civilians? Can they coexist with principles of sovereignty and non-intervention?  

Recent conflicts, such as the Russia-Ukraine war and U.S.-Iran tensions, highlight the double-edged nature of sanctions—disrupting economies, reshaping alliances, and sparking legal battles in international courts. Meanwhile, the rise of alternative financial systems and evasion tactics challenges their enforcement. This examination delves into the legal foundations of sanctions, their real-world impact, and the ongoing tension between coercive diplomacy and ethical accountability in a fractured world order.`}
              </p>
            </>
          ) : cards[currentIndex] === "PIL & Climate Change" ? (
            <>
              <h1
                className="text-xl font-bold text-blue-600 underline cursor-pointer"
                onClick={() => router.push("/climate_change")}
              >
                {cards[currentIndex]}
              </h1>
              <p
                className="text-black mt-2 text-justify"
                style={{ fontFamily: "'Apple Color Emoji', sans-serif" }}
              >
                {`Climate change presents unprecedented challenges to Public International Law frameworks, requiring innovative legal approaches to a truly global crisis. International environmental agreements like the Paris Agreement establish binding commitments, but questions of enforcement, compliance, and differentiated responsibilities continue to challenge the international community. PIL must address complex issues of transboundary pollution, climate migration, and climate justice while balancing development needs with environmental protection.

As climate impacts intensify, legal mechanisms for loss and damage compensation, technology transfer, and equitable burden-sharing become increasingly important. PIL serves as the foundation for international climate governance, providing structures for cooperation, dispute resolution, and progressive development of environmental norms that transcend national boundaries to address this existential global challenge.`}
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
