'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import YouTube from 'react-youtube';

const Page = () => {
    const router = useRouter();
    
    // YouTube options for responsive design
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="w-full p-4 bg-white bg-opacity-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Analysis</h1>
                <button 
                    onClick={() => router.push('/sanctions/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Back to Main
                </button>
            </div>
            
            <div className="flex bg-white overflow-y-auto">
                {/* Table of Contents - Only main headings */}
                <aside className="w-1/4 p-4 border-r border-gray-300 sticky top-0 h-screen">
                    <h2 className="text-lg font-bold mb-4">Table of contents</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#section1" className="text-blue-500 hover:underline">The Legal Basis for Economic Sanctions</a>
                        </li>
                        <li>
                            <a href="#section2" className="text-blue-500 hover:underline">Effectiveness and Compliance with International Law</a>
                        </li>
                        <li>
                            <a href="#section3" className="text-blue-500 hover:underline">Humanitarian and Economic Consequences</a>
                        </li>
                        <li>
                            <a href="#section4" className="text-blue-500 hover:underline">Using Apps and Streaming Content Anywhere</a>
                        </li>
                        <li>
                            <a href="#section5" className="text-blue-500 hover:underline">Watching Live Events From Anywhere</a>
                        </li>
                        <li>
                            <a href="#section6" className="text-blue-500 hover:underline">International Law and Global Health: Lessons from Covid-19</a>
                        </li>
                        <li>
                            <a href="#section7" className="text-blue-500 hover:underline">Travel Made Easy</a>
                        </li>
                        <li>
                            <a href="#section9" className="text-blue-500 hover:underline">Conclusion</a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content - Remove max-height and overflow to fix scrolling */}
                <main className="w-3/4 p-4">
                    <section id="section1" className="mb-8">
                        <h1 className="text-xl font-bold mb-4">The Legal Basis for Economic Sanctions</h1>
                        <h3 className="text-md font-semibold mt-6 mb-2">Sanctions Under the UN Charter</h3>
                        <p className="mb-4 text-justify">Economic sanctions derive their legitimacy from a variety of legal sources, including the United Nations (UN) Charter, regional treaties, and unilateral state actions. Under Article 41 of the UN Charter, the Security Council has the authority to impose measures that do not involve armed force to maintain or restore international peace and security. Under Article 41 of the UN Charter, the Security Council has the authority to impose measures that do not involve armed force to maintain or restore international peace and security. Such sanctions can include trade restrictions, asset freezes, and financial prohibitions targeting states, individuals, or organizations involved in unlawful activities, such as aggression, terrorism, or human rights violations.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">India's Legal Position on Economic Sanctions</h3>
                        <p className="mb-4 text-justify">India traditionally follows a policy of strategic autonomy and does not impose unilateral economic sanctions. Instead, it abides by UN-mandated sanctions while maintaining diplomatic flexibility. India has often expressed concerns regarding unilateral sanctions imposed by other nations, particularly those affecting its trade and energy security. A key example is India's response to U.S. sanctions on Iran, where India sought waivers to continue oil imports. Furthermore, India's legal framework, including the Foreign Exchange Management Act (FEMA) and the Customs Act, governs compliance with international sanctions within the country.</p>
                    </section>
                    
                    <section id="section2" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Effectiveness and Compliance with International Law</h2>
                        <h3 className="text-md font-semibold mt-6 mb-2">Iran v. United States (2018)</h3>
                        
                        {/* YouTube Video Embed */}
                        <div className="my-6">
                            <h3 className="text-md font-semibold mb-3">Video Explainer: Economic Sanctions in International Law</h3>
                            <div className="aspect-w-16 aspect-h-9">
                                <YouTube
                                    videoId="Iqvmcz7-e5w" // Replace with your actual YouTube video ID
                                    opts={opts}
                                    className="w-full"
                                />
                            </div>
                            <p className="text-sm text-gray-600 mt-2">Video: Understanding how economic sanctions operate under international law</p>
                        </div>
                        
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/usa.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">The legality of economic sanctions is also a subject of debate, particularly regarding unilateral measures. The principle of non-intervention under customary international law prohibits states from interfering in the internal affairs of others. Unilateral sanctions imposed without UN authorization, such as those by the U.S. against Cuba, have been challenged as violations of sovereignty and extraterritorial overreach. The International Court of Justice (ICJ) has adjudicated disputes concerning economic sanctions, as seen in cases like Iran v. United States (2018), where Iran contested U.S. measures as violations of international treaties.</p>
                    </section>
                    
                    <section id="section3" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Humanitarian and Economic Consequences</h2>
                        <h3 className="text-md font-semibold mt-6 mb-2">Afghanistan Sanctions and Humanitarian Crisis</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/gps.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">Whether you’re driving to a new city or tracking a food delivery, Global Positioning System (GPS) is at your service. But did you know GPS wouldn’t be so widely available without international agreements?</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Origins of GPS Technology</h3>
                        <p className="mt-4 text-justify">GPS was developed by the United States Department of Defense, with key contributions from scientist Bradford Parkinson, who is often called the "father of GPS." Originally designed for military navigation in the 1970s, GPS technology was later opened for civilian use in the 1980s, revolutionizing the way people navigate.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Global Accessibility</h3>
                        <p className="mt-4 text-justify">Today, GPS relies on a constellation of at least 24 satellites in Earth’s orbit, continuously sending signals that allow receivers to determine precise locations. The International Telecommunications Union (1865) and the 1967 Outer Space Treaty prevent any single country from claiming exclusive rights over satellite locations in geostationary orbit. This ensures equal access to satellite navigation systems, keeping our maps, weather forecasts, and emergency response services functioning worldwide.</p>
                    </section>
                    
                    <section id="section4" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Using Apps and Streaming Content Anywhere</h2>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/content.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">Ever wondered how your favourite apps and streaming services work across different countries? The World Intellectual Property Organization Copyright Treaty (1996) protects digital content, ensuring that creators maintain their rights while allowing users worldwide to enjoy the same software, movies, and music with legal safeguards.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Challenges of Digital Piracy</h3>
                        <p className="mt-4 text-justify">Before these agreements, digital piracy and unauthorized distribution posed a significant challenge for content creators. International copyright treaties now help companies like Netflix, Spotify, and Apple Music to operate across different jurisdictions while ensuring fair compensation for artists and developers.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Global Accessibility</h3>
                        <p className="mt-4 text-justify">This is why you can access popular apps and services seamlessly, whether you're at home or traveling abroad.</p>
                    </section>
                    
                    <section id="section5" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Watching Live Events From Anywhere</h2>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/live.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">Want to watch breaking news, international sports, or live concerts from the other side of the world? You can, thanks to international agreements on satellite communications. The UN General Assembly Resolution 1721 (1961) ensures equal access to the international satellite network, making real-time global broadcasting possible on TVs and mobile devices.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Evolution of Satellite Broadcasting</h3>
                        <p className="mt-4 text-justify">Before these agreements, live international broadcasts were a challenge due to limited satellite coverage and signal restrictions.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Impact on Global Connectivity</h3>
                        <p className="mt-4 text-justify">Today, we take for granted the ability to watch a football match happening thousands of miles away or get real-time updates on global events. Whether it’s the Olympics, international news, or entertainment programs, international law ensures that people across the world stay informed and connected.</p>
                    </section>
                    
                    <section id="section6" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">International Law and Global Health: Lessons from Covid-19</h2>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/covid.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">The COVID-19 pandemic showed us just how interconnected our world is—and how essential international cooperation is during crises. The World Health Organization (WHO) leads global efforts in managing health emergencies, setting regulations for disease tracking, vaccine distribution, and medical research sharing.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Role of WHO</h3>
                        <p className="mt-4 text-justify">The WHO plays a crucial role in ensuring that pandemics are controlled through coordinated global efforts. Its International Health Regulations (IHR) require countries to report outbreaks promptly, enabling a faster response to global health threats.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Global Collaboration</h3>
                        <p className="mt-4 text-justify">The Nagoya Protocol ensures that genetic resources and medical discoveries benefit all nations, fostering global collaboration in developing treatments.</p>
                    </section>
                    
                    <section id="section7" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Travel Made Easy</h2>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/travel.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">Planning a vacation or business trip? Your ability to move across borders seamlessly is largely thanks to international agreements.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Visa-Free Travel</h3>
                        <p className="mt-4 text-justify">Visa-free travel? That’s the result of bilateral and multilateral agreements between nations. For example, the Schengen Agreement allows free movement across much of Europe, while similar agreements exist in other regions.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Standardized Security Features</h3>
                        <p className="mt-4 text-justify">The security features in your passport? Regulated by the International Civil Aviation Organization (ICAO) to prevent fraud and ensure smooth border crossings.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Passenger Rights</h3>
                        <p className="mt-4 text-justify">The Montreal Convention (1999) establishes passenger rights, ensuring compensation for flight delays, lost baggage, and air accidents, protecting travelers across international borders.</p>
                    </section>
                    
                    <section id="section9" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Conclusion</h2>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/conclusion.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">We often take for granted how smoothly modern life functions—until something disrupts it. Whether it's setting your clock, following GPS directions, streaming your favorite TV series, or boarding an international flight, international law is the invisible force that keeps our world interconnected.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Impact on Daily Life</h3>
                        <p className="mt-4 text-justify">These agreements don’t just exist for governments and corporations—they impact you every day, shaping how you work, travel, and stay informed.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Appreciating International Law</h3>
                        <p className="mt-4 text-justify">So next time you book a flight, check your GPS, or stream your favorite movie, take a moment to appreciate the role international law plays in making it all possible. It’s the silent architect of a globally connected world, ensuring that life runs as smoothly as possible, no matter where you are.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Page;
