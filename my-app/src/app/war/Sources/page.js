'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SourcesPage = () => {
    const [showBibliography, setShowBibliography] = useState(true);
    const router = useRouter();

    const handleCardClick = () => {
        setShowBibliography(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300">
            <div className="w-full p-4 flex justify-end items-center mb-6">
                <button 
                    onClick={() => router.push('/war/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 absolute right-4 top-8"
                >
                    Back to Main
                </button>
            </div>
            
            {showBibliography && (
                <>
                    <h2 style={{ fontSize: '30px', marginBottom: '24px', fontWeight: 'bold', color: '#2d2b52' }}>Sources</h2>
                    <div style={{ 
                        width: '80%', 
                        maxWidth: '800px',
                        padding: '0 20px'
                    }}>
                        <ul style={{ 
                            listStyleType: 'none', 
                            padding: 0,
                            fontSize: '20px',
                            color: '#2d2b52'
                        }}>
                            <li style={{ marginBottom: '8px', textAlign: 'left' }}>Source 1: ‘Does Israel Have the Right to Self-Defence in Gaza?’ (Al Jazeera, 2023)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.aljazeera.com/news/2023/11/17/does-israel-have-the-right-to-self-defence-in-gaza"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.aljazeera.com/news/2023/11/17/does-israel-have-the-right-to-self-defence-in-gaza</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 2: ‘Tensions in Tigray Could Spark War Between Ethiopia and Eritrea’ (Chatham House, 2025)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.chathamhouse.org/2025/03/tensions-tigray-could-spark-war-between-ethiopia-and-eritrea-disaster-must-be-avoided"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.chathamhouse.org/2025/03/tensions-tigray-could-spark-war-between-ethiopia-and-eritrea-disaster-must-be-avoided</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 3: Abdallah Fayyad, ‘What Does Israel’s “Right to Self-Defense” Actually Mean?’ (Vox, 2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.vox.com/world-politics/403719/israel-right-to-self-defense-gaza-palestine-international-law"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.vox.com/world-politics/403719/israel-right-to-self-defense-gaza-palestine-international-law</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 4: Africa File Special Edition: Tigray Threatens to Spark the Next Conflict’ (Institute for the Study of War, 2025)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://understandingwar.org/backgrounder/africa-file-special-edition-tigray-threatens-spark-next-eritrean-ethiopian-war-and"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://understandingwar.org/backgrounder/africa-file-special-edition-tigray-threatens-spark-next-eritrean-ethiopian-war-and</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 5: Al Jazeera Staff, ‘Are Ethiopia and Eritrea Hurtling Towards War?’ (Al Jazeera, 2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.aljazeera.com/news/2025/3/25/are-ethiopia-and-eritrea-on-the-brink-of-war"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.aljazeera.com/news/2025/3/25/are-ethiopia-and-eritrea-on-the-brink-of-war</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 6: BBC News: Sahel Conflict’ (BBC, 2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.bbc.com/news/topics/cl07v7lz9zzt"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.bbc.com/news/topics/cl07v7lz9zzt</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 7: Chapter VII: Article 51 — Charter of the United Nations — Repertory’ (United Nations, 2016)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://legal.un.org/repertory/art51.shtml"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://legal.un.org/repertory/art51.shtml</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 8: Conflict in Ethiopia’ (Global Conflict Tracker, Council on Foreign Relations, 2025)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.cfr.org/global-conflict-tracker/conflict/conflict-ethiopia"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.cfr.org/global-conflict-tracker/conflict/conflict-ethiopia</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 9: Focus on the Sahel’ (Inter-Parliamentary Union, 2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.ipu.org/content/focus-sahel"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.ipu.org/content/focus-sahel</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 10: Fred Harter, ‘Power Struggle Leads to Coup in Tigray as War Looms’ (The Guardian, 2025)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.theguardian.com/global-development/2025/mar/21/tigray-mekelle-coup-war-ethiopia-eritrea-assab-port-abiy-ahmed"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.theguardian.com/global-development/2025/mar/21/tigray-mekelle-coup-war-ethiopia-eritrea-assab-port-abiy-ahmed</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 11: <a href="https://www.jurist.org/commentary/2023/12/7-10-the-question-of-israels-right-to-self-defense-under-international-law/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc', textDecoration:'underline'}}>https://www.jurist.org/commentary/2023/12/7-10-the-question-of-israels-right-to-self-defense-under-international-law/</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 12: Ibid at 15</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 13: Ibid</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 14: Ibid</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 15: International Law, Self-Defense, and the Israel-Hamas Conflict’ (US Army War College, 2024)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://publications.armywarcollege.edu/News/Display/Article/3706538/international-law-self-defense-and-the-israel-hamas-conflict/."
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://publications.armywarcollege.edu/News/Display/Article/3706538/international-law-self-defense-and-the-israel-hamas-conflict/</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 16: Mali and the Responsibility to Protect’ (Global Centre for the Responsibility to Protect, 2025)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.globalr2p.org/countries/mali/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.globalr2p.org/countries/mali/</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 17: Newly Restructured: The Islamic State in the Sahel Aims for Regional Expansion’ (ACLED, 2024)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://acleddata.com/2024/09/30/newly-restructured-the-islamic-state-in-the-sahel-aims-for-regional-expansion/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://acleddata.com/2024/09/30/newly-restructured-the-islamic-state-in-the-sahel-aims-for-regional-expansion/</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 18: Russia’s Growing Footprint in Africa’s Sahel Region’ (Carnegie Endowment for International Peace, 2023) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://carnegieendowment.org/2023/02/28/russia-s-growing-footprint-in-africa-s-sahel-region-pub-89135"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://carnegieendowment.org/2023/02/28/russia-s-growing-footprint-in-africa-s-sahel-region-pub-89135</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 19: Sarthak Gupta, ‘Israel’s Right to Self-Defense Under International Law’ (Jurist, 2023)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.jurist.org/commentary/2023/12/7-10-the-question-of-israels-right-to-self-defense-under-international-law/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.jurist.org/commentary/2023/12/7-10-the-question-of-israels-right-to-self-defense-under-international-law/</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 20: Self-Defence Under International Law: Lessons from the Israel-Gaza Conflict’ (NLS, 2023)</li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.nls.ac.in/blog/self-defence-under-international-law-lessons-from-the-israel-gaza-conflict/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.nls.ac.in/blog/self-defence-under-international-law-lessons-from-the-israel-gaza-conflict/</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 21: The Sahel in Crisis’ (Africa Center for Strategic Studies, 2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://africacenter.org/in-focus/the-sahel/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://africacenter.org/in-focus/the-sahel/</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 22: UN General Assembly: Russia-Ukraine War’ (The Guardian, 2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.theguardian.com/world/2025/feb/24/un-general-assembly-russia-ukraine-war"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.theguardian.com/world/2025/feb/24/un-general-assembly-russia-ukraine-war</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 23: UN News’ (United Nations, 2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://news.un.org/en/story/2025/02/1160456"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://news.un.org/en/story/2025/02/1160456</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 24: United Nations General Assembly Passes Two Resolutions on the War in Ukraine’ (2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://unipd-centrodirittiumani.it/en/news/united-nations-general-assembly-passes-two-resolutions-on-the-war-in-ukraine"
                            target='_blank' rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://unipd-centrodirittiumani.it/en/news/united-nations-general-assembly-passes-two-resolutions-on-the-war-in-ukraine</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 25: Violent Extremism in the Sahel’ (Global Conflict Tracker, 2025) </li>
                            <li style={{ marginBottom: '8px' }}><a href="https://www.cfr.org/global-conflict-tracker/conflict/violent-extremism-sahel"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.cfr.org/global-conflict-tracker/conflict/violent-extremism-sahel</a></li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default SourcesPage;
