'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from "react";

export default function Warpage() { 
    const router = useRouter();
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="w-full p-4 bg-white bg-opacity-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Analysis</h1>
                <button 
                    onClick={() => router.push('/war/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Back to Main
                </button>
            </div>
            
            <div className="flex bg-white">
                {/* Table of Contents */}
                <aside className="w-1/4 p-4 border-r border-gray-300">
                    <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
                    <ul className="space-y-2">
                        <li><a href="#section1" className="text-blue-500 hover:underline">Israel's Right to Self Defence</a></li>
                        <li><a href="#section2" className="text-blue-500 hover:underline">Ukraine War</a></li>
                        <li><a href="#section3" className="text-blue-500 hover:underline">Conflict in Ethiopia</a></li>
                        <li><a href="#section4" className="text-blue-500 hover:underline">Conflict in the Sahel Region</a></li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="w-3/4 p-4 max-h-screen overflow-y-auto">
                    {/* Section 1 */}
                    <section id="section1" className="mb-8">
                        <h1 className="text-xl font-bold mb-4">Israel's Right to Self Defence</h1>
                        <div className="flex justify-center my-4">
                            <Image src="/images/israel.png" alt="Israel Conflict" width={450} height={400} className="rounded-lg shadow-md" />
                        </div>
                        <p className="text-justify"><p className="mb-4 text-justify">The ongoing conflict between Israel and Hamas has ignited a heated debate in the international 
community regarding the legitimacy of Israel's actions under international law. The right to 
self-defence is a fundamental principle in international law, allowing a sovereign state to 
defend itself against armed attacks. Article 51 of the Charter of the United Nations enshrines 
this right, affirming that "Nothing in the present Charter shall impair the inherent right of 
individual or collective self-defence if an armed attack occurs against a Member of the United 
Nations".  This right comes into force when a state experiences an armed attack, justifying the 
use of necessary and proportionate force to repel aggression and restore security.  
 
The central controversy lies in the classification of Israel's military actions in the occupied 
Palestinian territories, especially Gaza, as legitimate acts of self-defence. Israel has maintained 
military control over these territories since 1967, a situation marked by frequent violations of 
international humanitarian law. The International Court of Justice (ICJ) has even deemed the 
Israeli occupation illegal. 
Several legal experts argue that Israel, as an occupying power, cannot invoke the right to self
defence against attacks originating from the territories it occupies.  UN Special Rapporteur on 
human rights in the occupied Palestinian territories, Francesca Albanese, asserts that Israel 
cannot claim self-defence because attacks come from within the territory it occupies. The ICJ's 
2004 advisory opinion on the construction of a wall in the West Bank reinforces this view, 
stating that Israel cannot use self-defence to justify actions against threats from areas under its 
control. South Africa's legal team, in the genocide case against Israel at the ICJ, argues that 
Israel's actions in Gaza enforce its occupation, thereby invalidating the applicability of self
defence under Article 51 of the UN Charter.</p> 
<p className="mt-4 text-justify">Conversely, some experts argue that the scale and nature of attacks by Hamas, such as those 
on October 7, constitute an "armed attack" that triggers Israel's right to self-defence under 
Article 51. Eric A. Heinze, a professor at the University of Oklahoma, argues that the attacks 
met the level of violence required to qualify as an "armed attack," justifying military response. 
Furthermore, it is argued that a state has the right to defend its citizens from attacks. 
A critical point of contention is whether Gaza remains an occupied territory. Israel contends 
that it withdrew its settlements and military presence from Gaza in 2005, ending its occupation. 
However, many human rights groups and the international community assert that Israel 
continues to control Gaza's borders, airspace, and territorial waters. The ICJ has reaffirmed that 
Gaza remains under occupation from a legal standpoint. 

Even if Israel's actions are considered self-defence, they must comply with international 
humanitarian law, specifically the principles of necessity and proportionality. These principles 
require that any military response be limited to legitimate military objectives and not cause 
excessive harm to civilians or civilian infrastructure.  Critics argue that Israel's actions in Gaza, 
such as mass starvation, destruction of healthcare infrastructure, and the killing of journalists, 
constitute collective punishment and violate international law. 
The acceptance or rejection of Israel's self-defence claim has significant consequences. 
Unchallenged acceptance could absolve Israel of its responsibilities as an occupying power and 
allow for expanded military control. Conversely, rejection could embolden further actions 
against Israel.</p>

<p className="mt-4 text-justify">Under the UN Charter, Israel, as a member, has the right to self-defence against armed attacks, 
but only until the UNSC acts to maintain peace. Principles like proportionality and necessity 
limit this right. Israel's actions, particularly its attacks on Gaza, have sparked debate about 
whether they adhere to these limits. Foreign Affairs Minister Eli Cohen's statement about 
eliminating Hamas has led to accusations, including South Africa's ICJ case, that Israel's 
actions constitute genocide, violating a fundamental principle of international law (jus cogens). 

The international community's response is crucial in identifying violations of international law. 
The G7, while acknowledging Israel's right to self-defence, called for "humanitarian pauses," 
emphasizing the need to protect civilians under international law. Joint statements from the 
US, France, UK, Germany, and Italy supported Israel's right to self-defence but also stressed 
adherence to international humanitarian laws. These statements suggest an implicit consensus 
that Israel's right to self-defence is limited by international law. UN General Assembly 
resolutions, like the one passed on October 26, 2023, highlight the need to uphold principles 
of distinction, necessity, proportionality, and precaution. Despite the lack of unanimous 
condemnation in the UNSC, most UN members have shown their acceptance of the limitations 
on the right to self-defence, making the tenets of international law and its violations clearer. 

The right to self-defence in both international and criminal law allows the justified use of force 
to counter an attack or imminent threat. In international law, self-defence is governed by jus ad 
bellum (use of force) and jus in bello (conduct in war). Article 2(4) of the UN Charter prohibits 
force against another state, except under Article 51, which permits self-defence until the UN 
Security Council intervenes. This principle is a jus cogens norm in customary international 
law.</p> 

<p className="mt-4 text-justify">The scope of self-defence raises complex questions, particularly regarding actions taken 
after an attack has ceased or in anticipation of future threats. Theories such as the halting and 
repelling theory, trigger theory, and future attack theory illustrate differing views on legitimate 
self-defence. A key distinction exists between lawful self-defence and unlawful armed 
reprisals, with factors like proportionality and necessity determining legality.  
In the Israel-Hamas conflict, Israel, as an occupying power, is responsible for maintaining law 
and order in the West Bank and Gaza. Under international law, it may not use military force in 
occupied territories but must rely on police action. Scholar Noura Erakat highlights the 
distinction between "self-defence" and "defence," questioning whether an occupier can claim 
self-defence while controlling the territory. Hamas’ Operation Al-Aqsa Flood is framed as 
retaliation for Israeli actions, complicating the perception of Israel as a victim state. 

Even if Israel has a right to self-defence, it must adhere to International Humanitarian Law 
(IHL) and the principle of proportionality, ensuring force is necessary and does not cause 
excessive harm. However, Israel’s blockade of Gaza, cutting off essential supplies, and 
indiscriminate airstrikes on civilian infrastructure violate these principles. Attacks on hospitals, 
places of worship, refugee camps, and journalists highlight breaches of IHL and potential war 
crimes under the Rome Statute. The use of starvation as a weapon and the deliberate targeting 
of civilians contravene the Geneva Conventions and other humanitarian laws. IHL mandates 
civilian protection during armed conflicts, prohibiting indiscriminate attacks. Israel’s military 
actions raise concerns about the proportionality and necessity of its force, potentially 
constituting war crimes. The excessive civilian casualties and destruction call into question the 
legitimacy of Israel’s claim to self-defence under international law.</p>  </p>
                    </section>

                    {/* Section 2 */}
                    <section id="section2" className="mb-8">
                        <h1 className="text-xl font-bold mb-4">Ukraine War</h1>
                        <div className="flex justify-center my-4">
                            <Image src="/images/unga.png" width={700} height={500} className="rounded-lg shadow-md" />
                        </div>
                        <p className="text-justify">The United Nations General Assembly passed two different resolutions on the Ukraine war, 
highlighting divisions within the transatlantic alliance regarding the approach to peace. One 
resolution, proposed by the United States, avoided directly condemning Russian aggression 
and was only adopted after EU-backed amendments were included, leading the US to abstain 
from its own motion and vote against the Ukrainian resolution. Despite this, the original US 
text was later approved by the Security Council—the first such resolution since Russia’s full
scale invasion of Ukraine on February 24, 2022.  
Before this, the Security Council had been unable to reach a consensus due to Russia's veto 
power as a permanent member. The two General Assembly resolutions had the common goal 
of ending the war but differed in their framing. Ukraine's resolution, titled *"Advancing a 
Comprehensive, Just, and Lasting Peace in Ukraine"*, was co-sponsored by several European 
nations. It reaffirmed Ukraine’s sovereignty and territorial integrity and stressed the importance 
of accountability for crimes under international law. It also noted the war's ongoing 
humanitarian and global consequences.</p> 
<p className="mt-4 text-justify">The US introduced its own resolution, "Path to Peace", which was more neutral. It expressed 
sorrow over the loss of life on both sides, emphasized the UN’s role in maintaining global 
peace, and called for an end to the conflict. Russia proposed an amendment referencing the 
“root causes” of the war, while the EU sought to incorporate language recognizing Russia’s 
full-scale invasion and Ukraine’s territorial integrity. 
 
In the vote, Ukraine’s resolution was approved with 93 votes in favor, 18 against, and 65 
abstentions. The US, which had supported a similar resolution in 2023, unexpectedly voted 
against it, marking a shift in its stance. Meanwhile, the US resolution also passed with 93 votes 
in favor, eight against, and 73 abstentions, though EU amendments were included despite US 
opposition. Russia’s proposed amendment was rejected.</p>  

<div className="flex justify-center my-4">
                            <Image src="/images/tweet.png" width={450} height={400} className="rounded-lg shadow-md" />
                            </div>
 
<p className="mt-4 text-justify">Ukraine’s Deputy Foreign Minister, Mariana Betsa, stated that how the world responds to 
Russia’s actions will shape the future of Ukraine, Europe, and global stability. She warned that 
any peace agreement rewarding aggression would set a dangerous precedent. Later in the day, 
the focus shifted to the Security Council, where the US resolution was up for a vote. Although 
some members attempted to introduce amendments similar to those in the General Assembly, 
these were rejected. The resolution passed without modifications, with 10 votes in favor, none 
against, and five abstentions. 
Following the vote, US Ambassador Dorothy Shea expressed gratitude for the Council's 
support, calling it a step toward peace. Meanwhile, Rosemary DiCarlo, head of UN Political 
Affairs, briefed the Security Council on the situation in Ukraine. She emphasized that Russia’s 
invasion undermined the global order and reported that over 12,600 Ukrainian civilians, 
including 673 children, had died since the war began. She stressed that any peace settlement 
must align with the UN Charter, international law, and the General Assembly's resolutions. 
The vote coincided with a meeting between Trump and French President Emmanuel Macron 
at the White House, where they, along with G7 leaders, discussed potential peace negotiations 
and growing tensions between Washington and European capitals over NATO’s future.</p> 
<p className="mt-4 text-justify">Friedrich Merz, Germany’s likely next chancellor, emphasized the need for Europe to 
strengthen its independence from the United States, stating that achieving self-sufficiency 
should be a top priority. Macron described the G7 discussions as “perfect” but did not disclose 
details, while Trump claimed that all G7 members expressed a desire for peace and insisted the 
war would not have occurred had he been president. Trump has also initiated direct negotiations 
with Putin, bypassing Ukraine, and is pushing Kyiv into a “critical minerals and rare-earths 
deal” to offset the cost of US aid to Ukraine over the past three years.  
In a statement on Monday, Trump said he was engaged in serious talks with Putin about ending 
the war and forging major economic agreements between the US and Russia, adding that 
discussions were progressing well. The UN resolutions were largely symbolic. The US 
resolution, which was only three paragraphs long, did not mention Russian aggression. Instead, 
it called for an end to the conflict and urged lasting peace between Ukraine and Russia. Russia’s 
ambassador to the UN praised the US resolution as a “good move.” According to US 
Ambassador Dorothy Shea, the American proposal was meant to be a “simple, historic 
statement” that focused on looking forward rather than revisiting past events. She emphasized 
that the US opposed introducing another resolution and could not support Ukraine’s version, 
urging its withdrawal in favor of a broad commitment to ending the war. 
Unlike Ukraine’s resolution, the US proposal did not call for a ceasefire or any specific actions, 
as Washington believed such provisions would meet resistance from both Russia and Ukraine. 
When asked whether the US was seeking global backing for a vague peace proposal, a State 
Department official confirmed that was the intention, stating, “That’s what the UN is all about.” 
Another official clarified that the resolution was a way to acknowledge the war’s approaching 
conclusion. The US had attempted to prevent the Ukrainian-backed resolution from advancing, 
with American diplomats pressuring EU and Ukrainian officials to withdraw it before the vote. 
Diplomatic cables and media reports revealed that US embassies actively lobbied foreign 
capitals over the weekend to garner support for its resolution instead.</p> 
<div className="flex justify-center my-4">
                            <Image src="/images/press.png" width={450} height={400} className="rounded-lg shadow-md" />
                            </div>
<p className="mt-4 text-justify">Hours before a vote in the UN Security Council, the US was still in discussions with the UK 
and France regarding a peace-focused resolution that Ukraine and its European allies have 
dismissed as an attempt to downplay Russia’s role in the invasion. US Secretary of State Marco 
Rubio defended Trump’s approach, stating that the president was committed to ending the war 
with a lasting peace rather than a temporary ceasefire. He urged all UN member states to 
support the US resolution as a way to establish a clear path toward peace. The UN vote was 
preceded by intense diplomatic efforts from both the US and EU, with officials reaching out to 
nations across Africa, Asia, and South America. According to a State Department 
representative, many countries that initially co-sponsored Ukraine’s resolution withdrew their 
support in favor of the US proposal due to ongoing diplomatic engagement. This diplomatic 
push, the official added, would continue until the final vote was cast.</p>
                    </section>

                    {/* Section 3 */}
                    <section id="section3" className="mb-8">
                        <h1 className="text-xl font-bold mb-4">Conflict in Ethiopia</h1>
                        <div className="flex justify-center my-4">
                            <Image src="/images/gang.png" width={450} height={400} className="rounded-lg shadow-md" />
                        </div>
                        <p className="text-justify">Ethiopia’s Tigray region is witnessing escalating tensions that could potentially reignite armed 
conflict between Ethiopia and Eritrea, further destabilizing the already fragile Horn of Africa.  
The political and military dispute involves the Tigray People’s Liberation Front (TPLF) and 
the Tigray Interim Administration (TIA), which was established in 2023 by Ethiopian Prime 
Minister Abiy Ahmed as part of the Pretoria Agreement, a peace deal aimed at ending the 
devastating civil war that took place from 2020 to 2022. 
The growing divisions within Tigray have resulted in violent clashes, with TPLF-aligned forces 
regaining control over key territories. Reports indicate that Eritrea has been backing dissident 
factions within the TPLF, which could obstruct Ethiopia’s ambitions of gaining direct access 
to a seaport.  Additionally, the incomplete execution of the Pretoria Agreement has exacerbated 
tensions, particularly regarding the disarmament of the Tigray Defense Forces and the 
continued military presence of Eritrean troops inside Ethiopian territory. These factors have 
heightened fears of a renewed war between Ethiopia and Eritrea, which would have widespread 
humanitarian and geopolitical consequences. </p>
<h3 className="mt-4 text-lg font-bold">Background</h3>
<p className="mt-4 text-justify">The 2020–2022 Tigray War was one of the deadliest conflicts in recent history, causing an 
estimated 600,000 deaths and widespread human rights abuses.  The war stemmed from 
Ethiopia’s deep-rooted ethnic and political divisions. The TPLF, once the dominant political 
force in Ethiopia, lost power in 2018 after widespread protests led to the rise of Abiy Ahmed. 
His initial reforms won international praise, earning him a Nobel Peace Prize in 2019 for ending 
Ethiopia’s long-standing standoff with Eritrea. However, tensions grew as Tigray resisted 
federal control, culminating in armed conflict in November 2020 when Ethiopian forces 
launched an offensive against the TPLF. 
 
Eritrea, a former enemy of Ethiopia, joined the fight on the government’s side, while regional 
militias also took part in the conflict. The war saw severe ethnic violence, especially against 
Tigrayans, prompting international condemnation and UN investigations into war crimes. After 
intense battles, Tigrayan forces regained control of their regional capital, Mekelle, in mid-2021, 
but the federal government later pushed them back. The Pretoria Agreement, signed in 
November 2022, was meant to end the war by reintegrating Tigray under federal rule and 
disarming TPLF forces. However, key provisions have yet to be fully implemented. Eritrean 
troops remain in the region, and disputes over land, power, and political control persist.</p>
<div className="flex justify-center my-4">
                            <Image src="/images/tank.png" width={450} height={400} className="rounded-lg shadow-md" />
                            </div>
<h3 className="mt-4 text-lg font-bold">Recent Developments</h3>
<p className="mt-4 text-justify">By 2023, tensions between Ethiopia and Eritrea escalated as Ethiopia sought access to the Red 
Sea, a crucial move for economic and strategic reasons.  Ethiopia, landlocked since Eritrea 
gained independence in 1993, has openly stated its need for sea access, sparking fears that it 
may resort to military action. In early 2024, Ethiopia signed a deal with Somaliland, offering 
to recognize its independence in exchange for access to a section of the Gulf of Aden. This 
provoked a sharp reaction from Somalia, which considers Somaliland part of its territory and 
threatened war in response. 
Meanwhile, insurgencies in Ethiopia’s Amhara and Oromia regions have intensified. The Fano 
militia in Amhara launched fresh offensives against government forces, while the Oromo 
Liberation Army (OLA) remains active in Oromia. Federal forces have struggled to contain 
these threats, leading to widespread displacement and violence. 
In Tigray, political divisions deepened in 2024 when the TPLF excluded interim administrator 
Getachew Reda from its leadership, effectively rejecting federal authority. This led to renewed 
clashes, with the TPLF seizing control of major cities, including Mekelle and Ad Gudan. 
Thousands have been displaced, and Ethiopian forces have been unable to regain control. 
Eritrea and Ethiopia have mobilized troops along their border, raising fears of war over control 
of strategic Red Sea ports.</p>
<h3 className="mt-4 text-lg font-bold">Regional and International Implications</h3>
<p className="mt-4 text-justify">Ethiopia’s internal strife has broader consequences for the Horn of Africa, a region already 
grappling with conflict in Sudan, South Sudan, and Somalia. Ethiopia’s tensions with Sudan 
remain high over the disputed Al Fashaga region, which has long been contested and was 
further inflamed by Sudan’s past support for the TPLF. Additionally, the dispute over the 
Grand Ethiopian Renaissance Dam (GERD) has strained relations with both Sudan and Egypt, 
as Ethiopia continues to control the Nile’s water flow despite opposition from its northern 
neighbours. If Ethiopia and Eritrea go to war, it could trigger a wider regional crisis, drawing 
in neighbouring countries and worsening humanitarian conditions. The region already faces 
severe food shortages, internal displacement, and ongoing conflicts, making renewed hostilities 
a significant threat to stability.</p>

                        </section>

                    {/* Section 4 */}
                    <section id="section4" className="mb-8">
                        <h1 className="text-xl font-bold mb-4">Conflict in the Sahel Region</h1>
                        <div className="flex justify-center my-4">
                            <Image src="/images/smoke.png" width={450} height={400} className="rounded-lg shadow-md" />
                        </div>
                        <h2 className="mt-4 text-lg font-bold">Background</h2>
                        <p className="text-justify">The Sahel region, stretching from Senegal to Eritrea between the Sahara Desert and African 
tropics, has faced complex security and humanitarian challenges for decades. Following 
independence in the 1960s, countries in this area have struggled with violent extremism 
stemming from ineffective governance, economic difficulties, and worsening climate impacts. 
Violence has intensified in the past decade, crossing borders and creating significant challenges 
both within and outside the region. The Sahel serves as a primary migration route from sub
Saharan Africa to northern coastal states and Europe, with increased violence potentially 
accelerating displacement and migration rates. The primary crisis zones are the Liptako
Gourma and Lake Chad Basin areas.  
Liptako-Gourma, situated at the borders of Burkina Faso, Mali, and Niger, experienced 
growing instability after Libya's 2011 collapse, which distributed weapons and fighters 
throughout the region. Extremists entering northern Mali rekindled the Tuareg rebellion in 
2012. The Tuareg people, comprising only 10% of Mali's population, sought autonomy under 
the MNLA and initially aligned with Islamist groups to expel government forces.  A coup 
deposed President Touré in March 2012, causing state institutions to collapse in the north and 
allowing the MNLA to seize major regional capitals and declare the independent state of 
Azawad by April. The MNLA soon broke with al-Qaeda and other Islamist allies when they 
tried to establish Islamic law.</p> 
<div className="flex justify-center my-4">
                            <Image src="/images/soldier.png" width={450} height={400} className="rounded-lg shadow-md" />
                            </div> 
<p className="mt-4 text-justify"> 
Following a brief period of stability, the situation deteriorated in January 2013 when Islamist 
groups advanced southward. Mali transitioned back to civilian leadership under Ibrahim 
Boubacar Keïta in August, eventually signing a peace agreement with Tuareg independence 
groups in 2015 that excluded Islamist organizations. These groups used this opportunity to 
expand into central Mali and neighboring countries.  Hotel attacks in Mali, Burkina Faso, and 
Ivory Coast in 2015-2016 demonstrated the expanding threat. ISGS emerged in Burkina Faso 
in 2016, while several al-Qaeda affiliates combined to form JNIM in 2017, intensifying 
violence across the region. Currently, JNIM controls territory in northern and central Mali, 
while ISGS operates in northern Burkina Faso and western Niger. 
In the Lake Chad Basin, Boko Haram resurfaced in northern Nigeria during this period. 
Founded in 2002, the group was suppressed in 2009 after police killed hundreds of members 
including its founder. It reemerged in 2011 with suicide attacks and gained worldwide attention 
after abducting 276 girls from Chibok in 2014. In 2015, Boko Haram pledged loyalty to ISIS 
and rebranded as ISWAP. By 2021, ISWAP had eliminated a rival faction and established 
control over northeastern Nigeria and parts of Niger.</p>  
<p className="mt-4 text-justify">Experts attribute extremism's growth to weak governance, corruption, democratic 
deterioration, and human rights violations. Power in these countries often concentrates in 
southern urban areas while northern rural regions remain underdeveloped and vulnerable to 
extremist recruitment.  The region has experienced numerous coups, with military takeovers in 
Mali during 2020-2021 triggering similar events in Burkina Faso, Chad, and Niger. Chadian 
President Déby's death in April 2021 created a leadership vacuum in regional counterterrorism 
efforts. Previously established security coalitions included the Multinational Joint Task Force 
(activated in 2014) and the G5 Sahel Force (created in 2017). However, human rights abuses 
by security forces undermined these initiatives. 
International involvement began in 2013 when French forces entered Mali, launching 
Operations Serval and later Barkhane. This was followed by the UN mission MINUSMA and 
EU-led Task Force Takuba. The US provided support while deploying troops and establishing 
a drone base in Niger. Despite increased international presence, extremism spread across the 
Sahel, leading France to announce Operation Barkhane's end in 2021 and withdraw from Mali 
in 2022. </p>
<h3 className="mt-4 text-lg font-bold">Recent Developments</h3>
<p className="mt-4 text-justify">In January 2023, UN experts called for investigations into potential war crimes by government 
forces and Wagner Group in Mali. Despite Wagner's failed rebellion in Russia in June 2023, 
Russian operations in Africa have continued. Security forces in Mali and Burkina Faso face 
accusations of civilian massacres, while armed groups increasingly target civilian volunteer 
forces. Niger's July 2023 coup significantly undermined counterterrorism efforts in the Sahel. 
Despite pressure from ECOWAS, the coup leaders have maintained power and formed a new 
government, announcing plans to prosecute deposed President Bazoum for treason. Military 
regimes in Guinea, Burkina Faso, and Mali have backed the junta, with the latter two pledging 
to treat any intervention as a declaration of war. In September, the military leaders of Mali, 
Burkina Faso, and Niger signed a mutual defence pact, strengthening their alliance against 
external intervention.</p>  

<div className="flex justify-center my-4">
                            <Image src="/images/jeep.png" width={450} height={400} className="rounded-lg shadow-md" />
                            </div> 
 
<p className="mt-4 text-justify">Niger had served as the West's final major counterterrorism partner in the region following 
coups in neighbouring countries. Shortly after taking power, the coup leaders ended military 
cooperation with France, which completed its withdrawal in October 2023. The US has pursued 
a pragmatic approach with Niger's military government while suspending aid, though it 
maintains troops in the country and has resumed counterterrorism operations. Concerns persist 
about Wagner Group's expanding regional influence. Violence has escalated across the Sahel, 
with the first seven months of 2023 seeing approximately 7,800 civilian deaths, a significant 
increase from 2022. This contradicts military juntas' claims of effectively addressing 
insecurity. 
Mali faces potential civil war as Islamist groups and Tuareg rebels consolidate power in the 
north. Violence has increased dramatically since UN peacekeepers began withdrawing, with 
attacks more than doubling. JNIM has exploited this situation by blockading Timbuktu and 
launching numerous attacks. Meanwhile, Mali has redeployed forces to confront Tuareg rebels 
in the northeast, with Wagner Group reportedly leading offensive operations against rebel 
strongholds in Kidal. Recent violence has spilled into neighboring countries, with deadly 
attacks on soldiers and volunteer fighters in Burkina Faso and Niger. Growing instability has 
contributed to democratic backsliding as military governments struggle to maintain control 
without international support.</p>
<h3 className="mt-4 text-lg font-bold">How Has Russia Gotten Involved?</h3>
<p className="mt-4 text-justify">Despite limited investment in Africa, Russia is steadily advancing its presence across various 
nations. This engagement provides favourable publicity that undermines Western isolation 
efforts. While Russia's success has been mixed—achieving most gains in internationally 
isolated Sahelian states while struggling in several African democracies—Moscow has 
demonstrated skill in exploiting governance weaknesses, instability, and security gaps across 
the continent. 
In 2017, after securing an exemption to the UN Security Council's arms embargo on the Central 
African Republic (CAR), Russia quickly deployed weapons and Wagner Group military 
trainers. Previously, CAR had been under strong French influence for decades, though this 
relationship failed to achieve significant stability, security, or economic progress. Moscow 
capitalized on France's 2017 military withdrawal from CAR during ongoing rebel activity. 
Since then, Wagner support has helped strengthen CAR's government and contained rebel 
expansion. Wagner's entry represented an opportunistic move by Russia to exploit French 
failures and favourable conditions for a new security partner. Today, Wagner serves as the 
Kremlin's primary proxy in CAR, providing government security, facilitating Russian political 
influence, and accessing valuable mining resources. Despite Russia's increased presence, large
scale violence persists and humanitarian conditions remain dire. 
Moscow is now exploiting similar opportunities in the Sahel, embracing military regimes in 
Mali and Burkina Faso with security assistance, diplomatic support, and information 
operations. Russian military advisers arrived in Mali after its second military coup in late 2021. 
Through Wagner, Moscow has supplied approximately 400 mercenaries to combat jihadist 
groups and delivered arms shipments in mid-2022. Nevertheless, Mali's security situation 
continues to deteriorate with expanding insurgency.</p>
<p className="mt-4 text-justify">
While Mali's government doesn't officially acknowledge Wagner's presence, mounting 
evidence of Russian mercenary activities and atrocities confirms Wagner or similar Russian 
groups are operating there. In spring 2022, Wagner and local forces conducted an anti-terror 
operation killing approximately 400 civilians. Civilian casualties have increased 
disproportionately since Wagner's arrival, following patterns of violence against local 
populations seen in CAR, Libya, Syria, and Ukraine. 
U.S. officials worry Wagner aims to replicate this approach in Burkina Faso, where anti-French 
and pro-Russian sentiment has grown recently. With France withdrawing its remaining troops 
by February 2023, Burkina Faso faces a choice about establishing a privileged relationship 
with Russia centered on Wagner Group activities. While the extent of Russian involvement in 
Burkina Faso remains unclear, Ghana's president has expressed alarm about Wagner forces 
operating there. 
African, European, and U.S. officials have also warned about Wagner's expansion into Chad, 
strategically positioned in central Sahel with open borders to CAR, Libya, and Sudan where 
Russian mercenaries operate. Wagner has reportedly provided support to rebels seeking to 
destabilize Chad's interim government. 
U.S. Deputy Ambassador to the UN Richard Mills has expressed concern that Russian 
mercenary activities increase suffering without addressing instability's root causes: poor 
governance, broken institutions, displacement, and armed group proliferation. He argues for 
greater focus on mitigating humanitarian catastrophe, addressing governance issues, and 
preventing instability from spreading. Meanwhile, neighbouring African and Western 
countries have yet to invest resources that might disrupt Russia's regional foothold. 
While aligning with African military regimes offers limited long-term power for Russia, it 
effectively unsettles the United States, France, and Sahel neighbours. Wagner leader Yevgeny 
Prigozhin likely values the commercial benefits from African mercenary activities, but his main 
potential gains relate to Wagner's unique role in Ukraine, which strengthens his financial and 
political position amid Russian elite infighting. </p>
<h3 className="mt-4 text-lg font-bold">The International Stand</h3>
<p className="mt-4 text-justify">Washington and its Sahel partners face difficult decisions. Despite its rhetoric, the Biden 
administration appears unwilling and unable to expel Russia from the region—a reality U.S. 
policymakers may not have fully accepted. Traditional approaches, like France's 
counterterrorism operation, have failed. Currently, the U.S. maintains a modest military 
presence in countries including Djibouti, Kenya, and particularly Niger, where American 
drones and intelligence have supported regional anti-terror operations. However, there is little 
appetite for expanding the U.S. military footprint in Africa. 
While blaming Russia for the Sahel's problems is understandable given Wagner's brutality and 
brazenness, the concept of direct competition with Russia in Africa as part of great-power 
rivalry warrants careful examination. Removing Russia from Mali and Burkina Faso would 
unlikely alleviate the region's underlying problems. African nations, including those in the 
Sahel, desire greater autonomy in managing their foreign, political, and economic affairs rather 
than having partners imposed by Western powers. Recent rhetoric from Western capitals about 
zero-sum geopolitical competition exacerbates this issue. Similarly, various African 
governments have resisted U.S. and European pressure to take sides in the Russia-Ukraine 
conflict—pressure that has ironically fueled the resentments Russia now exploits. 
For regional populations, the primary concern isn't Russia but improved security and 
socioeconomic conditions. While Wagner may offer quick fixes and regime consolidation, 
addressing the true causes of regional instability—poor governance, human suffering, climate 
change impacts, and armed jihadist groups—requires well-resourced, multilateral solutions. 
Strengthening neighboring states' resilience against spreading instability must also be 
prioritized, including greater diplomatic and technical support for ECOWAS-facilitated 
civilian rule transitions in Mali and Burkina Faso.</p>
<h3 className="mt-4 text-lg font-bold">Conclusion</h3>
<p className="mt-4 text-justify">The Ukraine war hasn't diminished Russia's opportunistic global engagement, particularly in 
Africa. In fact, the Putin regime's break with the West has empowered Moscow's outreach to 
multiple parts of the continent. In early February, Russian Foreign Minister Sergei Lavrov told 
his ruling party's foreign affairs committee that American and French colonialism were 
primarily responsible for global inequities and Western dominance in international affairs. 
Lavrov stated that Moscow supports Africans' resistance against Western influence, with 
countering "European colonialism" now officially part of Russia's foreign policy. While 
Lavrov's rhetoric is self-serving, many in the region are receptive to such narratives due to 
frustration with failed Western—especially French—policies in Africa. 
Meanwhile, actors like Wagner often exploit regional instability in destructive ways that 
typically worsen civilian security conditions and damage Russia's international reputation. This 
reality deserves emphasis, particularly for populations disillusioned by deteriorating conditions 
and harboring deep resentment toward France's colonial legacy. Repressive Sahelian regimes 
have eagerly partnered with Moscow but will likely discover that Russian groups like Wagner 
are no more effective at reclaiming insurgent-controlled territories—ultimately spelling bad 
news for people across the Sahel.   </p>    
                    </section>
                </main>
            </div>
        </div>
    );
}