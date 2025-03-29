'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
    const router = useRouter();
    
    return (
        <div className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col overflow-hidden">
            <div className="w-full p-4 bg-white bg-opacity-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Analysis</h1>
                <button 
                    onClick={() => router.push('/climate_change')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Back to Main
                </button>
            </div>
            
            <div className="flex bg-white flex-grow overflow-hidden">
                {/* Table of Contents */}
                <aside className="w-1/4 p-4 border-r border-gray-300 overflow-y-auto">
                    <h2 className="text-lg font-bold mb-4">Table of contents</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#section1" className="text-blue-500 hover:underline">The Critical Role of Public International Law in Addressing Climate Change</a>
                        </li>
                        <li>
                            <a href="#section2" className="text-blue-500 hover:underline">Legal Foundations of International Climate Action</a>
                        </li>
                        <li>
                            <a href="#section3" className="text-blue-500 hover:underline">Customary International Law and Climate Action</a>
                        </li>
                        <li>
                            <a href="#section4" className="text-blue-500 hover:underline">National Perspectives: India's Climate Law and Policy Approach</a>
                        </li>
                        <li>
                            <a href="#section5" className="text-blue-500 hover:underline">Enforcement Challenges and Legal Innovations</a>
                        </li>
                        <li>
                            <a href="#section6" className="text-blue-500 hover:underline">Emerging Legal Mechanisms</a>
                        </li>
                        <li>
                            <a href="#section7" className="text-blue-500 hover:underline">Conclusion: The Path Forward</a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="w-3/4 p-4 overflow-y-auto">
                    <section id="section1" className="mb-8">
                        <h1 className="text-xl font-bold mb-4">The Critical Role of Public International Law in Addressing Climate Change</h1>
                        <p className="mb-4 text-justify">Public International Law (PIL) has emerged as a crucial mechanism for addressing climate change, a complex transboundary challenge that demands unprecedented global cooperation. The escalating environmental crisis, characterized by increasingly extreme weather events, rising global temperatures, and accelerating biodiversity loss, underscores the urgent necessity for comprehensive legal frameworks that can effectively mitigate environmental degradation and hold states accountable for their actions.</p>
                        <p className="mb-4 text-justify">The complexity of climate change requires an integrated approach that transcends national boundaries, leveraging international legal instruments, diplomatic negotiations, and multilateral agreements to create meaningful and enforceable mechanisms for environmental protection and sustainable development.</p>    
                    </section>
                    <section id="section2" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Legal Foundations of International Climate Action</h2>
                        <p className="mb-4 text-justify">The legal framework for international climate action is built upon a sophisticated network of treaties, customary international law, and evolving diplomatic agreements. These legal instruments collectively establish the principles and mechanisms for global climate governance.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">United Nations Framework Convention on Climate Change (UNFCCC)</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/unfccc.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="mb-4 text-justify">Established in 1992, the UNFCCC serves as the cornerstone of international climate law. This landmark convention established fundamental principles and a collaborative framework for addressing climate change, acknowledging the critical need to stabilize greenhouse gas concentrations in the atmosphere to prevent dangerous anthropogenic interference with the global climate system.</p>
                        <h3 className="text-sm font-semibold italic mt-6 mb-2">Key principles embedded in the UNFCCC include:</h3>
                        <p className="mb-4 text-justify"><strong>Common but Differentiated Responsibilities (CBDR):</strong> This principle recognizes the historical emissions burden of developed nations and mandates that they provide financial and technological support to developing countries. While all nations must contribute to climate action, their responsibilities are calibrated according to their economic capacities and historical emission profiles.</p>
                        <p className="mb-4 text-justify"><strong>Integrational Equity:</strong>This principle imposes a profound ethical obligation on current states to consider the long-term environmental consequences of their policies. It emphasizes the need for immediate and decisive climate action to protect future generations from the most severe impacts of climate change.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">Kyoto Protocol and Paris Agreement</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/kyoto.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="mb-4 text-justify">The Kyoto Protocol (1997) represented the first internationally binding treaty setting specific emissions reduction targets for industrialized nations. Although its impact was limited by the non-participation of major economies like the United States, it established a critical precedent for legally mandated climate action.</p>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/paris.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="mb-4 text-justify">The Paris Agreement (2015) marked a significant evolution in international climate diplomacy by introducing a more flexible, inclusive approach.</p>
                        <p className="mb-4 text-justify">Key features include:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li className="text-justify">Voluntary nationally determined contributions (NDCs)</li>
                            <li className="text-justify">A global goal to limit temperature increase to well below 2°C above pre-industrial levels.</li>
                            <li className="text-justify">A framework requiring all parties to prepare, communicate, and maintain successive NDCs</li>
                        </ul>
                    </section>
                    <section id="section3" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Customary International Law and Climate Action</h2>
                        <p className="mb-4 text-justify">Beyond formal treaties, customary international law plays a pivotal role in shaping climate governance with these rules and principles.</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li className="text-justify">The No-Harm Rule: Originating from the 1941 Trail Smelter Arbitration, this principle establishes that states must prevent transboundary environmental harm, thereby creating a legal foundation for holding nations accountable for activities that damage other countries' environments.</li>
                            <li className="text-justify">The Precautionary Principle: This principle enables preventive action even in the absence of complete scientific certainty, providing legal justification for implementing greenhouse gas regulations to prevent potentially irreversible environmental damage.</li>
                        </ul>
                    </section>
                    <section id="section4" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">National Perspectives: India's Climate Law and Policy Approach</h2>
                        <p className="mb-4 text-justify">As a developing economy highly vulnerable to climate impacts, India exemplifies the complex balance between economic growth and environmental sustainability. The country's climate policy is articulated through multiple strategic documents and international commitments.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">International Commitments</h3>
                        <p className="mb-4 text-justify">India has demonstrated significant commitment to global climate action by:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li className="text-justify">Ratifying the Paris Agreement</li>
                            <li className="text-justify">Pledging to reduce emissions intensity of GDP by 45% by 2030 (from 2005 levels)</li>
                            <li className="text-justify">Committing to generate 50% of cumulative electric power from non-fossil fuel sources by 2030</li>
                            <li className="text-justify">Founding the International Solar Alliance to promote renewable energy development</li>
                        </ul>
                        <h3 className="text-md font-semibold mt-6 mb-2">Domestic Legislative Framework</h3>
                        <p className="mb-4 text-justify">The Environment Protection Act (EPA) of 1986 is a comprehensive piece of legislation that serves as the primary framework for environmental regulation in India. Enacted in the aftermath of the Bhopal gas tragedy, the EPA provides a legal basis for the protection and improvement of the environment, as well as the prevention of hazards to human beings, other living creatures, plants, and property. In the context of Public International Law (PIL), the EPA enables India to implement its obligations under various international environmental agreements, including those related to climate change. It empowers the central government to establish standards for environmental quality, regulate industrial activities, and take measures to protect and improve environmental conditions. The Act facilitates the enforcement of environmental norms and standards, ensuring that India meets its international commitments regarding environmental protection. The EPA acts as an umbrella legislation, providing the government with the authority to take action on a wide range of environmental issues, including those that directly relate to climate change.</p>
                        <p className="mb-4 text-justify">The National Action Plan on Climate Change (NAPCC), launched in 2008, outlines India's strategy for addressing climate change through eight national missions that focus on both mitigation and adaptation. These missions are designed to promote sustainable development while simultaneously addressing the challenges posed by climate change. Each mission has specific goals and strategies, encompassing areas such as solar energy, energy efficiency, water conservation, sustainable agriculture, and strategic knowledge for climate change. In the context of PIL, the NAPCC demonstrates India's commitment to contributing to global efforts to combat climate change, aligning with the principles and objectives of the UNFCCC, the Kyoto Protocol, and the Paris Agreement. While the NAPCC itself is not legally binding, it provides a policy framework that guides India's actions in mitigating greenhouse gas emissions and adapting to the impacts of climate change. It acts as a roadmap for achieving India's climate goals and fulfilling its obligations under international law.</p>
                        <h3 className="text-sm font-semibold italic mt-6 mb-2">Key principles embedded in the UNFCCC include:</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li className="text-justify">National Solar Mission: Promotes the use of solar energy to reduce reliance on fossil fuels.</li>
                            <li className="text-justify">National Mission for Enhanced Energy Efficiency: Aims to improve energy efficiency in various sectors, reducing energy consumption and emissions.</li>
                            <li className="text-justify">National Mission on Sustainable Habitat: Focuses on promoting sustainable urban development and improving energy efficiency in buildings.</li>
                            <li className="text-justify">National Water Mission: Works to conserve water resources, improve water use efficiency, and manage water resources sustainably.</li>
                            <li className="text-justify">National Mission for Sustaining the Himalayan Ecosystem: Seeks to protect the fragile Himalayan ecosystem and adapt to the impacts of climate change in the region.</li>
                            <li className="text-justify">National Mission for a Green India: Aims to increase forest cover and promote afforestation to enhance carbon sequestration.</li>
                            <li className="text-justify">National Mission for Sustainable Agriculture: Focuses on promoting sustainable agricultural practices that are resilient to climate change.</li>
                            <li className="text-justify">National Mission on Strategic Knowledge for Climate Change: Aims to build knowledge and capacity for addressing climate change through research, education, and training.</li>
                        </ul>
                    </section>
                    <section id="section5" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Enforcement Challenges and Legal Innovations</h2>
                        <p className="text-justify">International climate law struggles with enforcement despite broad ratification of agreements like the Paris Agreement. Climate litigation and innovative legal mechanisms are emerging to strengthen climate governance and accountability. Enforcement mechanisms in international climate agreements are often weak, relying more on transparency and peer pressure than legally binding penalties. Climate litigation has emerged as a crucial tool for holding governments and corporations accountable, driving climate action, and providing redress for climate-related harm.</p>
                        <p className='mt-4 text-justify'>Unlike earlier technological breakthroughs that were primarily state-driven, today’s most powerful AI models are developed by private corporations using commercial cloud infrastructure. Any AI treaty would need to ensure compliance from these entities, either through domestic legal obligations imposed on corporations or by establishing direct international obligations for private firms.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">Urgenda Foundation v. Netherlands (2019)</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/urgenda.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className='mt-4 text-justify'>The Dutch Supreme Court mandated emissions reductions, ordering the government to cut emissions by 25% by 2020, citing human rights obligations under the European Convention on Human Rights (ECHR). The court affirmed that the Dutch government was responsible for managing carbon dioxide emissions and was bound to protect human rights.</p>
                        <h3 className="text-justify font-semibold mt-6 mb-2">Torres Strait Islanders v. Australia (2022)</h3>
                        <div className="flex justify-center my-4">
                            <Image 
                                src="/images/aussie.png" 
                                alt="Global Clock Representation" 
                                width={250} 
                                height={200} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="mt-4 text-justify">The UN Human Rights Committee ruled that Australia's failure to adequately protect indigenous Torres Strait Islanders against climate change impacts violated their rights to enjoy their culture and be free from arbitrary interferences with their private life, family, and home under Articles 17 and 27 of the ICCPR. The Committee emphasized the close, spiritual connection of the islanders to their traditional lands and the dependence of their cultural integrity on the health of their surrounding ecosystems.</p>
                    </section>
                    <section id="section6" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Emerging Legal Mechanisms</h2>
                        <h3 className="text-md font-semibold mt-6 mb-2">Proposals to criminalize "ecocide" under international law</h3>
                        <p className='mt-4 text-justify'>"Ecocide" is defined as unlawful or wanton acts committed with knowledge that there is a substantial likelihood of severe and either widespread or long-term damage to the environment being caused by those acts. Criminalizing ecocide under the Rome Statute could deter corporations responsible for climate change, although others argue that it will not address the root causes of the climate crisis.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">EU's Corporate Sustainability Due Diligence Directive (CSDDD)</h3>
                        <p className='mt-4 text-justify'>The CSDDD sets out a corporate due diligence duty for large companies to identify and address adverse human rights impacts and environmental impacts in their own operations, those of their subsidiaries, and in their "chain(s) of activities". The CSDDD requires companies to integrate due diligence into corporate policies and risk management systems, identify and assess adverse human rights and environmental impacts, prevent, cease, or minimize actual and potential adverse impacts, assess the effectiveness of measures, communicate, and provide remediation.</p>
                        <h3 className="text-md font-semibold mt-6 mb-2">Financial Action Task Force's (FATF) monitoring of climate-related financial crimes</h3>
                        <p className='mt-4 text-justify'>The FATF is focusing on the link between environmental crime and money laundering to raise awareness about the financial flows that fuel environmental crime and how they are laundered. The World Bank Group (WBG) is working with countries to increase their capacity to tackle illicit financial flows from environmental crimes.</p>
                    </section>
                    <section id="section7" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Conclusion: The Path Forward</h2>
                        <p className="text-justify">Public international law provides essential frameworks for addressing climate change, but significant challenges remain in ensuring effective implementation and enforcement. As the climate crisis intensifies, future legal developments must focus on several critical areas to create a more robust and responsive international legal regime. Establishing binding emission targets with meaningful sanctions is paramount to holding states accountable and ensuring that global emissions are reduced in line with the goals of the Paris Agreement. This requires transitioning from voluntary pledges to legally enforceable commitments, coupled with mechanisms that impose consequences for non-compliance, such as financial penalties or trade restrictions. Creating legal protections for climate-displaced populations is essential to address the growing humanitarian crisis resulting from climate change impacts, recognizing climate-induced migration as a distinct form of displacement and providing a framework for the protection of those forced to move. This includes addressing the legal status of climate refugees, ensuring access to essential services, and providing opportunities for resettlement and integration. Developing robust financial mechanisms to ensure climate justice is critical for supporting developing countries in their mitigation and adaptation efforts, recognizing that they bear a disproportionate burden of climate change impacts despite contributing the least to the problem. This involves fulfilling commitments to provide financial assistance, promoting technology transfer, and addressing loss and damage resulting from climate-related disasters. Finally, integrating climate considerations across international legal regimes is necessary to ensure a comprehensive and coordinated approach to addressing climate change, embedding climate-related obligations into areas such as trade, investment, human rights, and maritime law to create a holistic framework that promotes sustainable development and environmental protection. The global community must continue to evolve legal frameworks that are adaptive, comprehensive, and capable of responding to the rapidly changing environmental landscape, fostering international cooperation and solidarity in the face of the climate crisis.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Page;
