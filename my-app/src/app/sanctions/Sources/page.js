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
                    onClick={() => router.push('/sanctions/')}
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
                            <li style={{ marginBottom: '8px', textAlign: 'left' }}>Source 1: United Nations Charter, Art. 41, No. 1, Acts of the United Nations, 1945 (UN).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 2: (International Court of Justice), <a href="https://www.icj-cij.org/case/164" style={{ color: '#0066cc', textDecoration: 'underline' }}>https://www.icj-cij.org/case/164</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'left' }}>Source 3: (Human Rights Watch), Economic Causes of Afghanistan's Humanitarian Crisis, HUMAN RIGHTS WATCH (Aug. 4, 2022), <a href="https://www.hrw.org/news/2022/08/04/economic-causes-afghanistans-humanitarian-crisis" style={{color:'#0066cc', textDecoration:'underline'}}>https://www.hrw.org/news/2022/08/04/economic-causes-afghanistans-humanitarian-crisis</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'left' }}>Source 4: (European Parliamentary Research Service), Briefing: EPRS_BRI(2023)749765, EUROPEAN PARLIAMENT (2023)</li>
                            <li style={{ marginBottom: '16px', textAlign: 'left' }}><a href="https://www.europarl.europa.eu/thinktank/en/document/EPRS_BRI(2023)749765"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.europarl.europa.eu/thinktank/en/document/EPRS_BRI(2023)749765</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 5: (BBC News), Ukraine Conflict: Moscow Says Troops Pulling Back After Drills, BBC (Jan. 18, 2022),</li>
                            <li style={{ marginBottom: '16px', textAlign: 'justify' }}><a href="https://www.bbc.com/news/world-europe-60125659"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.bbc.com/news/world-europe-60125659</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 6: (Alan Rappeport), U.S. Treasury Imposes New Sanctions on Chinese Entities, N.Y. TIMES (Jan. 3, 2025),</li>
                            <li style={{ marginBottom: '16px', textAlign: 'justify' }}><a href="https://www.nytimes.com/2025/01/03/us/politics/treasury-chinese-sanctions.html"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.nytimes.com/2025/01/03/us/politics/treasury-chinese-sanctions.html</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 7: (BBC News), The Impact of Climate Change on Global Food Security, BBC (Mar. 24, 2025),</li>
                            <li style={{ marginBottom: '16px', textAlign: 'justify' }}><a href="https://www.bbc.com/news/articles/c4gmd3g2nzqo"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.bbc.com/news/articles/c4gmd3g2nzqo</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 8: (World Trade Organization), WTO Staff Working Paper ERSD-2020-04, WTO (2020),</li>
                            <li style={{ marginBottom: '16px', textAlign: 'justify' }}><a href="https://www.wto.org/english/res_e/reser_e/ersd202004_e.htm"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.wto.org/english/res_e/reser_e/ersd202004_e.htm</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 9: (World Trade Organization), Dispute Settlement Archive: United Kingdom, WTO,</li>
                            <li style={{ marginBottom: '16px', textAlign: 'justify' }}><a href="https://www.wto.org/english/news_e/archive_e/country_subj_arc_e.htm?country1=GBR&subject1=DISP "
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.wto.org/english/news_e/archive_e/country_subj_arc_e.htm?country1=GBR&subject1=DISP</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 10: (European Union), Sanctions Map, EUROPEAN UNION,</li>
                            <li style={{ marginBottom: '16px', textAlign: 'justify' }}><a href="https://www.sanctionsmap.eu/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.sanctionsmap.eu/</a></li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default SourcesPage;
