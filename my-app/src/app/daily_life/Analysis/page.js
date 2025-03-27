'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
    const router = useRouter();
    
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="w-full p-4 bg-white bg-opacity-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Analysis</h1>
                <button 
                    onClick={() => router.push('/daily_life/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Back to Main
                </button>
            </div>
            
            <div className="flex bg-white">
                {/* Table of Contents */}
                <aside className="w-1/4 p-4 border-r border-gray-300">
                    <h2 className="text-lg font-bold mb-4">Table of contents</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#section1" className="text-blue-500 hover:underline">How International Law Shapes Your Everyday Life</a>
                        </li>
                        <li>
                            <a href="#section2" className="text-blue-500 hover:underline">A Unified Global Clock: Telling Time Together</a>
                        </li>
                        <li>
                            <a href="#section3" className="text-blue-500 hover:underline">Navigate the World with GPS</a>
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

                {/* Main Content */}
                <main className="w-3/4 p-4 max-h-screen overflow-y-auto">
                    <section id="section1" className="mb-8">
                        <h1 className="text-xl font-bold mb-4">How International Law Shapes Your Everyday Life</h1>
                        <p className="mb-4 text-justify">We often think of international law as something reserved for diplomats, courtrooms, and treaties. But did you know it plays a vital role in your daily routine? From telling time to traveling the world, global agreements ensure smooth coordination between nations—making modern life more convenient and connected than ever.</p>   
                    </section>
                    <section id="section2" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">A Unified Global Clock: Telling Time Together</h2>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/time.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">Imagine a world where every country set its own unique time zones without coordination. Chaos, right? Thanks to international agreements, we have a standardized system for measuring time.</p>
                        <p className='mt-4 text-justify'>Imagine a world where every country set its own unique time zones without coordination. Chaos, right? Thanks to international agreements, we have a standardized system for measuring time.</p>
                        <p className='mt-4 text-justify'>In 1884, the Final Act of the International Meridian Conference established the Prime Meridian in Greenwich, leading to Greenwich Mean Time (GMT)—now known as Universal Time (UTC). This global standard ensures synchronized clocks across continents, keeping everything from flight schedules to stock markets running smoothly. Without this agreement, global coordination would be nearly impossible, affecting businesses, communication, and transportation worldwide.</p>
                    </section>
                    <section id="section3" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Navigate the World with GPS</h2>
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
                        <p className='mt-4 text-justify'>GPS was developed by the United States Department of Defense, with key contributions from scientist Bradford Parkinson, who is often called the "father of GPS." Originally designed for military navigation in the 1970s, GPS technology was later opened for civilian use in the 1980s, revolutionizing the way people navigate.</p>
                        <p className='mt-4 text-justify'>Today, GPS relies on a constellation of at least 24 satellites in Earth’s orbit, continuously sending signals that allow receivers to determine precise locations. The International Telecommunications Union (1865) and the 1967 Outer Space Treaty prevent any single country from claiming exclusive rights over satellite locations in geostationary orbit. This ensures equal access to satellite navigation systems, keeping our maps, weather forecasts, and emergency response services functioning worldwide. Without these agreements, GPS technology could be restricted, affecting transportation, logistics, and even emergency response systems.</p>
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
                        <p className='mt-4 text-justify'>Before these agreements, digital piracy and unauthorized distribution posed a significant challenge for content creators. International copyright treaties now help companies like Netflix, Spotify, and Apple Music to operate across different jurisdictions while ensuring fair compensation for artists and developers. This is why you can access popular apps and services seamlessly, whether you're at home or traveling abroad.</p>
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
                        <p className='mt-4 text-justify'>Before these agreements, live international broadcasts were a challenge due to limited satellite coverage and signal restrictions. Today, we take for granted the ability to watch a football match happening thousands of miles away or get real-time updates on global events. Whether it’s the Olympics, international news, or entertainment programs, international law ensures that people across the world stay informed and connected.</p>
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
                        <p className='mt-4 text-justify'>The WHO plays a crucial role in ensuring that pandemics are controlled through coordinated global efforts. Its International Health Regulations (IHR) require countries to report outbreaks promptly, enabling a faster response to global health threats. The Nagoya Protocol ensures that genetic resources and medical discoveries benefit all nations, fostering global collaboration in developing treatments.</p>
                        <p className='mt-4 text-justify'>From vaccine rollouts to travel restrictions, international law shapes how governments respond to public health threats, keeping communities safe. Without these agreements, medical research could be hoarded, limiting global access to life-saving treatments. The pandemic highlighted the importance of fair vaccine distribution and the need for countries to work together rather than in isolation.</p>
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
                        <p className='mt-4 text-justify'>Visa-free travel? That’s the result of bilateral and multilateral agreements between nations. For example, the Schengen Agreement allows free movement across much of Europe, while similar agreements exist in other regions. Without these treaties, every international traveler would need separate visas for each country they visit, complicating travel immensely.</p>
                        <p className='mt-4 text-justify'>The security features in your passport? Regulated by the International Civil Aviation Organization (ICAO) to prevent fraud and ensure smooth border crossings. Even the Chicago Convention on International Civil Aviation (1944) lays the foundation for global air travel, ensuring planes from one country can safely land in another. These regulations standardize aviation safety, aircraft certification, and air traffic management, making international travel safer and more efficient.</p>
                        <p className='mt-4 text-justify'>The Montreal Convention (1999) establishes passenger rights, ensuring compensation for flight delays, lost baggage, and air accidents, protecting travelers across international borders. The Customs Convention on the ATA Carnet (1961) simplifies customs procedures, allowing professionals to carry equipment, samples, and exhibition goods across multiple countries with a single document, facilitating smooth business operations. Meanwhile, the International Air Transport Agreement (IATA Agreement, 1944) regulates airline tariffs and route allocations, promoting fair competition among airlines and maintaining global air connectivity.</p>
                        <p className='mt-4 text-justify'>Furthermore, the ease of booking a flight and checking in at the airport is governed by international aviation laws. Thanks to agreements between airlines and governments, travelers can enjoy seamless connections, baggage transfers, and standardized security procedures, making flying a hassle-free experience.</p>
                    </section>
                    <section id="section9" className="mb-8">
                        <h2 className='text-lg font-bold mb-4'>Conclusion</h2>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/conclusion.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">We often take for granted how smoothly modern life functions—until something disrupts it. Whether it's setting your clock, following GPS directions, streaming your favorite TV series, or boarding an international flight, international law is the invisible force that keeps our world interconnected. These agreements don’t just exist for governments and corporations—they impact you every day, shaping how you work, travel, and stay informed.</p>
                        <p className='mt-4 text-justify'>So next time you book a flight, check your GPS, or stream your favorite movie, take a moment to appreciate the role international law plays in making it all possible. It’s the silent architect of a globally connected world, ensuring that life runs as smoothly as possible, no matter where you are.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Page;
