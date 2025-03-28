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
                            <a href="#section4" className="text-blue-500 hover:underline">Enforcement and Evasion Mechanisms</a>
                        </li>
                        <li>
                            <a href="#section5" className="text-blue-500 hover:underline">Trade Wars and Economic Sanctions</a>
                        </li>
                        <li>
                            <a href="#section6" className="text-blue-500 hover:underline">Global Governance and Future Challenges</a>
                        </li>
                        <li>
                            <a href="#section7" className="text-blue-500 hover:underline">Conclusion</a>
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
                        <div className="my-6">
                            <div className="aspect-w-16 aspect-h-9">
                                <YouTube
                                    videoId="Iqvmcz7-e5w"
                                    opts={opts}
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <p className="text-justify">A major criticism of economic sanctions is their impact on civilian populations. Broad-based sanctions, particularly trade embargoes, can lead to severe economic hardship, shortages of essential goods, and deteriorating living conditions. The sanctions on Iraq in the 1990s, for instance, were linked to widespread malnutrition and health crises, prompting calls for targeted, or "smart," sanctions that minimize humanitarian harm. The shift towards asset freezes and travel bans on individuals, rather than comprehensive embargoes, reflects efforts to mitigate these adverse effects.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">Sanctions on Syria and Humanitarian Aid Access</h3>
                        <p className="mt-4 text-justify">From an economic perspective, sanctions disrupt global trade and financial flows, affecting not only targeted states but also businesses and third-party countries. The imposition of secondary sanctions, which penalize entities that engage with sanctioned parties, creates complex legal and economic challenges.</p>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/syria.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="mt-4 text-justify">From an economic perspective, sanctions disrupt global trade and financial flows, affecting not only targeted states but also businesses and third-party countries. The imposition of secondary sanctions, which penalize entities that engage with sanctioned parties, creates complex legal and economic challenges.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">Sanctions Amidst the Russia-Ukraine Conflict</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/russia.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="mt-4 text-justify">The Russia-Ukraine conflict has intensified debates over the collateral effects of economic sanctions, as Western restrictions on Russian energy exports have triggered broader supply chain disruptions and inflationary pressures worldwide.</p>
                        <div className="my-6">
                            <div className="aspect-w-16 aspect-h-9">
                                <YouTube
                                    videoId="xCqb55GK7iA"
                                    opts={opts}
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-justify">International legal bodies, including the United Nations and the European Court of Justice, have played a significant role in shaping the legal landscape of these sanctions. While the UN Security Council has not imposed collective sanctions due to vetoes from Russia and China, regional bodies such as the EU have enacted legally binding restrictions. Additionally, lawsuits challenging the legality of asset freezes and trade bans have emerged in international courts, testing the limits of economic warfare under international law.</p>
                        <p className="mt-4 text-justify">The impact of these sanctions has been profound, causing economic downturns in Russia while also disrupting global markets, particularly in energy and agriculture. The sanctions have prompted Russia to seek alternative trade alliances, notably with China, India, and other non-Western economies, demonstrating the geopolitical shift induced by economic restrictions.</p>
                        <p className="mt-4 text-justify">The Russia-Ukraine conflict has intensified debates over the collateral effects of economic sanctions, as Western restrictions on Russian energy exports have triggered broader supply chain disruptions and inflationary pressures worldwide.</p>
                    </section>
                    
                    <section id="section4" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Enforcement and Evasion Mechanisms</h2>
                        <p className="mt-4 text-justify">Ensuring compliance with economic sanctions remains a challenge due to the emergence of sophisticated evasion tactics. Targeted states often circumvent restrictions through illicit trade networks, alternative financial systems, and strategic alliances. Iran and North Korea, for example, have employed methods such as cryptocurrency transactions, front companies, and barter trade to bypass financial restrictions.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">US Sanctions on Chinese Technology Firms</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/china.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">International legal mechanisms seek to enhance enforcement, with entities like the Financial Action Task Force (FATF) playing a crucial role in combating illicit financial flows linked to sanction evasion. Additionally, international tribunals have addressed cases of sanctions violations, reinforcing the legal consequences of non-compliance. The evolving nature of global finance necessitates continuous adaptation of legal frameworks to prevent sanctions circumvention effectively.</p>
                    </section>
                    
                    <section id="section5" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Trade Wars and Economic Sanctions</h2>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/trade.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">Trade wars, while distinct from economic sanctions, often overlap in their legal and geopolitical implications. Unlike sanctions, which are imposed as punitive measures for violations of international norms, trade wars typically arise from economic disputes over tariffs, subsidies, and market access. The U.S.-China trade war, for example, escalated through a series of retaliatory tariffs that disrupted global supply chains and raised legal questions regarding World Trade Organization (WTO) commitments.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">US-China Trade War and WTO Involvement</h3>
                        <p className="mt-4 text-justify">The trade war between the United States and China, initiated in 2018, saw both countries imposing tariffs worth hundreds of billions of dollars on each other's goods. The WTO played a role in adjudicating disputes arising from these tariffs, ruling in 2020 that certain U.S. tariffs violated international trade rules. Despite this ruling, enforcement challenges highlighted the limitations of the WTO in resolving large-scale economic conflicts.</p>
                        
                        <h3 className="text-md font-semibold mt-6 mb-2">EU Trade Disputes with the UK Post-Brexit</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/brexit.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="mt-4 text-justify">Following Brexit, trade tensions between the European Union and the United Kingdom intensified, particularly regarding Northern Ireland’s trade arrangements. The role of international law, including dispute resolution mechanisms under the Brexit withdrawal agreement, has been pivotal in mediating trade-related conflicts.</p>
                    </section>
                    
                    <section id="section6" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Global Governance and Future Challenges</h2>
                        <p className="mt-4 text-justify">The increasing reliance on economic sanctions raises fundamental questions about their role in international governance. As multipolarity intensifies, the fragmentation of sanctioning regimes—where different blocs impose conflicting restrictions—risks undermining global economic stability. The emergence of alternative financial systems, such as China’s Cross-Border Interbank Payment System (CIPS), challenges the dominance of Western-led sanctioning mechanisms.</p>
                        <p className="mt-4 text-justify">Moreover, the potential for misuse of sanctions for political ends necessitates stronger oversight mechanisms. Calls for greater accountability and judicial review of sanctioning decisions have grown, particularly in cases where individuals or entities challenge their designation.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">European Court of Justice and Sanctions on Belarus</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/court.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-justify">The European Court of Justice has played a notable role in reviewing EU sanctions, ensuring compliance with human rights and due process standards. The Court has intervened in several high-profile cases where sanctioned individuals and entities have challenged restrictive measures. For example, in the case of Rosneft v. Council (2017), the Court upheld EU sanctions against the Russian oil giant, reinforcing the legality of targeted sanctions under EU law. Additionally, the ECJ has been instrumental in overturning sanctions where due process was violated, as seen in the case of Kadi v. Council (2008), where financial restrictions imposed on an individual were lifted due to lack of procedural safeguards. These rulings highlight the ECJ’s role in balancing security concerns with fundamental rights, setting important precedents for sanction-related disputes.</p>
                    </section>
                    
                    <section id="section7" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Conclusion</h2>
                        <p className="text-justify">Economic sanctions remain a powerful yet controversial instrument of international law. While they offer a non-military means of enforcing global norms, their efficacy and legality continue to be scrutinized. The challenge for international law lies in balancing the need for effective enforcement with the imperative of minimizing humanitarian and economic fallout. Future developments will likely shape the contours of sanctioning regimes, determining their legitimacy and role in maintaining international peace and security.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Page;
