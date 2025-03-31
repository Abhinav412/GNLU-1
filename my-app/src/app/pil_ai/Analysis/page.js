'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
    const router = useRouter();
    
    // Disable body scrolling when component mounts
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    
    return (
        <div className="h-screen w-full flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
            <div className="w-full p-4 bg-white bg-opacity-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Analysis</h1>
                <button 
                    onClick={() => router.push('/pil_ai/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Back to Main
                </button>
            </div>
            
            <div className="flex flex-1 bg-white overflow-hidden">
                {/* Table of Contents */}
                <aside className="w-1/4 p-4 border-r border-gray-300 overflow-y-auto">
                    <h2 className="text-lg font-bold mb-4">Table of contents</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#section1" className="text-blue-500 hover:underline">The Global Impact of AI and the need for Governance</a>
                        </li>
                        <li>
                            <a href="#section2" className="text-blue-500 hover:underline">The Role of International Law in AI regulation</a>
                        </li>
                        <li>
                            <a href="#section3" className="text-blue-500 hover:underline">Debating the Necessity of an AI treaty</a>
                        </li>
                        <li>
                            <a href="#section4" className="text-blue-500 hover:underline">Regulating AI system development</a>
                        </li>
                        <li>
                            <a href="#section5" className="text-blue-500 hover:underline">Structural challenges in AI Governance</a>
                        </li>
                        <li>
                            <a href="#section6" className="text-blue-500 hover:underline">The European Union's AI Governance Framework</a>
                        </li>
                        <li>
                            <a href="#section7" className="text-blue-500 hover:underline">Appropriate Forums and Institutional Mechanisms for AI Governance</a>
                        </li>
                        <li>
                            <a href="#section8" className="text-blue-500 hover:underline">UNESCO Recommendation on the Ethics of Artificial Intelligence</a>
                        </li>
                        <li>
                            <a href="#section9" className="text-blue-500 hover:underline">Conclusion</a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="w-3/4 p-4 overflow-y-auto">
                    <section id="section1" className="mb-8">
                        <h1 className="text-xl font-bold mb-4">The Global Impact of AI and the need for Governance</h1>
                        <p className="mb-4 text-justify">Artificial Intelligence (AI) transcends geographical boundaries, 
                            influencing individual lives and shaping societies worldwide. 
                            AI impacts a broad spectrum of activities, 
                            from determining credit scores and curating social media feeds to developing advanced weapons and 
                            influencing global information systems. 
                            Given these widespread applications, AI governance cannot be confined to corporate responsibility alone; 
                            it requires active participation from all states.</p>
                        <p className="mb-4 text-justify">AI governance is an inherently complex challenge that necessitates cooperation among diverse stakeholders 
                            with varying cultural, social, and political perspectives. Private enterprises, civil society organizations, 
                            academic institutions, and governments must collaborate to create effective governance frameworks. 
                            International law provides a well-established foundation upon which global AI governance can be built, 
                            offering a common language for legal and ethical discourse.</p>    
                    </section>
                    <section id="section2" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">The role of International Law in AI regulation</h2>
                        <p className="text-justify">International law is not merely a theoretical framework; it is a binding legal system that 
                            applies to the use of AI technologies by states, corporations, and, in some cases, individuals. 
                            States adhere to numerous treaties, customary international laws, and general legal principles. 
                            Corporations, while not directly bound by international treaties, have social and legal responsibilities 
                            to uphold human rights standards. Individuals, too, must comply with international laws and avoid 
                            contributing to AI-related crimes.</p>
                        <p className='mt-4 text-justify'>One of the strengths of international law is its technology-neutral nature. 
                            This means that legal principles and regulations apply universally to both traditional and 
                            emerging technologies. For example, the International Court of Justice has affirmed that 
                            prohibitions against the use of force and regulations under international humanitarian law apply 
                            to all weapons, irrespective of their technological underpinnings. Although AI is not inherently a weapon, 
                            its applications span multiple sectors, necessitating legal oversight wherever relevant.</p>
                        <p className='mt-4 text-justify'>Historically, international law has regulated specific technologies such as radio broadcasting. 
                            However, most international legal frameworks are flexible enough to accommodate new technological advancements. 
                            This process, known as evolutionary interpretation, allows legal principles to be adapted to emerging societal 
                            phenomena. Given AI's speed, scale, and versatility, international law must be interpreted in ways that account 
                            for its unique characteristics while ensuring continued applicability.</p>
                    </section>
                    <section id="section3" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Debating the Necessity of an AI treaty</h2>
                        <p className="text-justify">Despite the applicability of existing international laws, the question remains whether 
                            a specialized AI treaty is required. AI does not exist in a legal vacuum; general legal 
                            protections and prohibitions continue to be relevant. Before drafting new treaties, it is 
                            crucial for states to evaluate the sufficiency of current legal frameworks and identify any 
                            gaps that leave certain values or vulnerable populations unprotected.</p>
                        <p className='mt-4 text-justify'>Key considerations for AI treaties include assessing whether existing legal 
                            frameworks are adequate for regulating AI applications, identifying gaps in addressing AI's 
                            societal and ethical implications, and determining the need for greater specificity or 
                            granularity in AI-related regulations. Additionally, policymakers must consider which forums 
                            should be used to facilitate international discussions on AI governance and how diverse perspectives, 
                            including those from the Global South, female leaders, and next-generation policymakers, can be meaningfully 
                            integrated into AI negotiations.</p>
                        <p className='mt-4 text-justify'>Developing treaties is a slow, resource-intensive process that often struggles to 
                            keep pace with technological advancements. Additionally, treaty negotiations risk diluting existing 
                            legal standards to accommodate broader consensus, potentially undermining well-established human rights protections.</p>
                    </section>
                    <section id="section4" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Regulating AI System Development</h2>
                        <p className="text-justify">Given the risks associated with AI malfunctions, some experts advocate for 
                            direct regulation of AI development. Instead of focusing on specific applications, 
                            this approach would establish international oversight mechanisms for AI systems' creation.</p>
                        <p className='mt-4 text-justify'>Several enforcement strategies could be applied. Regulations might include 
                            mandatory cybersecurity protections, requiring developers to prevent key AI components 
                            from being stolen or leaked. AI models could also be subject to pre-release safety evaluations, 
                            ensuring compliance with agreed-upon standards. Another option is implementing an international 
                            notification system, requiring states to inform treaty members before training large-scale AI models.</p>
                        <p className='mt-4 text-justify'>While such measures would enhance security, this approach also presents challenges. 
                            Given that smaller AI models generally pose lower risks, regulatory thresholds would need to be defined 
                            to avoid stifling innovation. Furthermore, given AI's economic potential, any restrictions must 
                            balance safety with continued AI advancements.</p>
                        <p className='mt-4 text-justify'>A third regulatory approach would target AI's supply chain, particularly computing 
                            power—the core industrial input for AI development. Unlike data or algorithms, AI chips are tangible, 
                            traceable, and controllable through export restrictions. The global AI semiconductor industry is highly 
                            concentrated, making it feasible for states to regulate access to these critical components.</p>
                        <p className='mt-4 text-justify'>International agreements governing the distribution of AI chips could be structured in several ways. 
                            Restrictions on AI chip exports could reinforce broader AI governance frameworks by denying access to states that 
                            violate international agreements. Alternatively, AI chip distribution could be structured to shape AI 
                            development in specific ways, reducing reliance on downstream use-based regulations.</p>
                        <p className='mt-4 text-justify'>Export control laws provide a precedent for such measures. The United States has already 
                            imposed AI chip export bans on China, aiming to limit its access to advanced AI hardware. 
                            A broader international semiconductor export control agreement could be modeled on Cold War-era export 
                            restrictions, such as the COCOM framework and its successor, the Wassenaar Arrangement.</p>
                    </section>
                    <section id="section5" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Structural Challenges in AI Governance</h2>
                        <p className="text-justify">While binding AI regulations offer potential benefits, they also present significant structural challenges, including compliance by private sector AI labs, state participation, and equitable AI benefit distribution.</p>
                        <p className='mt-4 text-justify'>Unlike earlier technological breakthroughs that were primarily state-driven, today’s most powerful AI models are developed by private corporations using commercial cloud infrastructure. Any AI treaty would need to ensure compliance from these entities, either through domestic legal obligations imposed on corporations or by establishing direct international obligations for private firms.</p>
                        <p className='mt-4 text-justify'>AI innovation is currently concentrated in a handful of countries. While agreements among leading AI nations may be easier to negotiate, a comprehensive global treaty would provide greater legitimacy. Given that AI risks affect all nations, broad international participation would be necessary for long-term success.</p>
                    </section>
                    <section id="section6" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">The European Union's AI Governance Framework</h2>
                        <p className="text-justify">The Council of Europe has introduced the first legally binding international treaty aimed at upholding human rights, the rule of law, and democratic principles in the application of artificial intelligence (AI) systems. This treaty, which is also accessible to non-European nations, establishes a comprehensive legal framework that governs the entire lifecycle of AI systems. It seeks to mitigate the risks associated with AI while fostering responsible innovation. The framework adopts a risk-based approach, ensuring that AI’s design, development, use, and decommissioning are conducted with careful consideration of potential negative consequences.</p>
                        <p className='mt-4 text-justify'>The Council of Europe Framework Convention on Artificial Intelligence, Human Rights, Democracy, and the Rule of Law was officially adopted in Strasbourg during the annual ministerial meeting of the Council of Europe’s Committee of Ministers. This gathering includes the Ministers for Foreign Affairs of the 46 member states of the Council of Europe.</p>
                        <p className='mt-4 text-justify'>The Secretary General of the Council of Europe, Marija Pejčinović, emphasized the significance of this treaty, describing it as a first-of-its-kind global agreement designed to safeguard individuals' rights. She stated that the convention addresses the need for an international legal standard that is supported by states across different continents with shared values. The goal is to maximize the benefits of AI while mitigating its associated risks, ensuring that AI systems operate in accordance with democratic principles, human rights, and the rule of law.</p>
                        <p className='mt-4 text-justify'>This treaty is the result of two years of negotiations led by an intergovernmental body known as the Committee on Artificial Intelligence (CAI). The drafting process involved participation from the 46 member states of the Council of Europe, the European Union, and 11 non-member countries, including Argentina, Australia, Canada, Costa Rica, the Holy See, Israel, Japan, Mexico, Peru, the United States, and Uruguay. Additionally, representatives from the private sector, civil society, and academic institutions contributed as observers.</p>
                        <p className='mt-4 text-justify'>The treaty applies to both the public and private sectors, including companies operating on behalf of the government. It provides signatory states with two pathways for compliance with its principles and obligations concerning private sector AI regulation. Nations may either be directly bound by the treaty’s provisions or implement alternative measures that align with the treaty’s requirements while ensuring full adherence to international human rights, democracy, and rule of law obligations. This flexible approach accommodates diverse legal systems worldwide.</p>
                        <p className='mt-4 text-justify'>To enhance transparency and oversight, the treaty mandates tailored measures depending on specific contexts and risks. It requires signatories to adopt policies that facilitate the identification, assessment, prevention, and mitigation of AI-related risks. In cases where AI applications pose risks that conflict with human rights standards, parties must evaluate the necessity of moratoriums, outright bans, or other appropriate regulatory actions.</p>
                        <p className='mt-4 text-justify'>Accountability is a central component of the convention. Parties must establish mechanisms to ensure responsibility for any adverse effects caused by AI systems. This includes safeguards to uphold equality, gender equity, anti-discrimination protections, and privacy rights. Additionally, signatories must provide legal recourse for victims of human rights violations resulting from AI use. The treaty also mandates procedural safeguards, such as informing individuals when they are interacting with an AI system.</p>
                        <p className='mt-4 text-justify'>Regarding democratic stability, the treaty compels signatories to take steps ensuring that AI systems are not misused to undermine democratic institutions and processes. This includes safeguarding the separation of powers, judicial independence, and access to justice.</p>
                        <p className='mt-4 text-justify'>National security-related activities are not required to comply with the treaty’s provisions. However, signatory nations must ensure that their security-related AI applications respect international law and democratic norms. The treaty also excludes military defense matters and research & development activities from its scope, except in cases where AI testing may interfere with human rights, democracy, or the rule of law.</p>
                        <p className='mt-4 text-justify'>To guarantee the treaty's effective implementation, it establishes a Conference of the Parties, which serves as a follow-up mechanism to monitor adherence to its provisions. Furthermore, each signatory must create an independent oversight body to ensure compliance, promote public awareness, and facilitate inclusive discussions on the ethical use of AI. The treaty also encourages multistakeholder engagement, ensuring that diverse perspectives are considered in shaping AI policies.</p>
                        <p className='mt-4 text-justify'>The Framework Convention on Artificial Intelligence is set to open for signature in Vilnius, Lithuania, on September 5, coinciding with a conference of Ministers of Justice.</p>
                    </section>
                    <section id="section7" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Appropriate Forums and Institutional Mechanisms for AI Governance</h2>
                        <p className="text-justify">Beyond determining how international law applies to AI, it is essential to assess which institutions should oversee its governance. Different international organizations already have mandates covering AI applications. The United Nations Human Rights Council, the International Telecommunication Union (ITU), and the World Trade Organization (WTO) each address various aspects of AI regulation.</p>
                        <p className='mt-4 text-justify'>International law also provides remedies for AI-related legal violations. The United Nations Security Council, for instance, can impose sanctions and countermeasures against AI misuse. However, if new institutions are deemed necessary, states may look to existing models such as the Intergovernmental Panel on Climate Change (IPCC) for climate science or the International Civil Aviation Organization (ICAO) for air traffic regulation to establish oversight bodies for AI governance.</p>
                    </section>
                    <section id="section8" className="mb-8">
                        <h2 className="text-lg font-bold mb-4">UNESCO Recommendation on the Ethics of Artificial Intelligence</h2>
                        <p className="text-justify">The UNESCO Recommendation on the Ethics of Artificial Intelligence, adopted on November 23, 2021, is the first and only global normative instrument addressing AI ethics and governance. The framework applies to all 194 UNESCO Member States and serves as an international guideline for ensuring AI technologies are developed, deployed, and governed ethically and responsibly. The recommendation acknowledges that AI is rapidly evolving and touches every aspect of human activity, including education, healthcare, governance, and employment. Rather than defining AI in fixed terms, UNESCO focuses on its ethical dimensions, emphasizing fairness, accountability, and transparency in AI applications.</p>
                        <p className='mt-4 text-justify'>A core objective of the recommendation is to protect human rights and dignity by embedding ethical considerations into AI systems. It calls for policies that prevent AI from exacerbating existing inequalities and ensure that AI-driven decisions respect privacy, security, and freedom of expression. The framework also highlights the need to close the AI divide between technologically advanced nations and developing countries. UNESCO urges governments to foster international collaboration to ensure equitable AI benefits, particularly for low- and middle-income countries (LMICs). </p>
                        <p className='mt-4 text-justify'>The recommendation outlines key values and principles that should guide AI development. These include human rights, inclusiveness, diversity, and environmental sustainability. It emphasizes the importance of cultural pluralism, ensuring that AI systems do not reinforce harmful biases or discrimination. Additionally, AI development should align with environmental sustainability goals, minimizing the carbon footprint and reducing energy-intensive processes in AI model training. Transparency and accountability are also central, requiring governments and corporations to implement mechanisms that clarify AI decision-making processes and establish liability for harm caused by AI.</p>
                        <p className='mt-4 text-justify'>To operationalize these principles, UNESCO sets out 11 core policy areas for AI governance. First, AI systems must undergo an Ethical Impact Assessment before deployment, ensuring that potential societal risks are thoroughly evaluated. Second, AI governance should be structured through national AI ethics frameworks, with oversight bodies ensuring compliance with ethical guidelines. Third, data policies must align with existing privacy laws, preventing AI from being misused for mass surveillance or discriminatory profiling. Fourth, the recommendation advocates for international cooperation, encouraging countries to collaborate in AI research and share technological advancements.</p>
                        <p className='mt-4 text-justify'>Other crucial policy areas include the environment and ecosystems, ensuring that AI does not contribute to ecological harm. UNESCO promotes AI applications that support climate action, biodiversity conservation, and responsible resource consumption. The recommendation also prioritizes gender equality, urging the elimination of biases in AI models that disproportionately harm women and marginalized groups. Another major area is cultural preservation, where AI should respect and promote linguistic and cultural diversity, rather than imposing dominant narratives. AI education and research must also be strengthened, integrating AI ethics training into school curricula and university programs.</p>
                        <p className='mt-4 text-justify'>UNESCO stresses the importance of communication and information integrity, where AI should help combat misinformation rather than amplify false narratives. It suggests developing AI systems that promote factual, unbiased reporting and protect democratic institutions from manipulation. In economic and labor policies, UNESCO urges governments to mitigate AI-driven job displacement, ensuring that AI technologies complement human labor rather than replace it outright. Lastly, in health and social well-being, AI should enhance medical decision-making and improve healthcare access, particularly in underserved communities.</p>
                        <p className='mt-4 text-justify'>To monitor the implementation of its recommendations, UNESCO proposes a global AI ethics oversight mechanism. Governments are encouraged to establish independent ethics commissions, conduct regular transparency audits, and implement legal safeguards to protect individuals from AI-related harm. These efforts should be complemented by public engagement, ensuring that citizens have a say in how AI is used in their societies.</p>
                        <p className='mt-4 text-justify'>The global impact of the UNESCO AI Ethics Recommendation is significant. Since its adoption, multiple countries have aligned their AI strategies with UNESCO’s guidelines. The recommendation influences AI regulations in regions such as Europe, Africa, Asia, and Latin America, where governments are adapting AI policies to reflect ethical and human rights considerations. African nations, in particular, have been urged to integrate AI ethics into their national digital strategies, ensuring that AI is used to support sustainable development, digital literacy, and technological sovereignty. It has also contributed to regional AI treaties, such as the Council of Europe’s AI framework, which integrates UNESCO’s ethical principles into legally binding agreements.</p>
                        <p className='mt-4 text-justify'>In conclusion, the UNESCO AI Ethics Recommendation is a pioneering global framework that provides a foundation for ethical AI governance. By emphasizing human rights, environmental responsibility, and international cooperation, UNESCO aims to ensure that AI technologies are used for the benefit of all humanity. The recommendation serves as a roadmap for governments, businesses, and civil society to shape AI in a way that prioritizes fairness, safety, and sustainability.</p>
                    </section>
                    <section id="section9" className="mb-8">
                        <h2 className='text-lg font-bold mb-4'>Conclusion</h2>
                        <p className="text-justify">The future of AI governance remains uncertain. While binding regulations are not yet in place, shifting geopolitical and technological dynamics could necessitate rapid policy action. Historical precedents suggest that negotiating international agreements of this magnitude takes years, but AI’s rapid evolution may demand faster solutions. Policymakers and legal experts must proactively shape AI governance discussions to ensure that emerging regulations are both effective and equitable.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Page;
