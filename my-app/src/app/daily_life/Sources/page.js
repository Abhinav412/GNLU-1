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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400">
            <div className="w-full p-4 flex justify-end items-center mb-6">
                <button 
                    onClick={() => router.push('/daily_life/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 absolute right-4"
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
                            <li style={{ marginBottom: '8px', textAlign: 'left' }}>Source 1: AMERICAN SOCIETY OF INTERNATIONAL LAW, INTERNATIONAL LAW 100 WAYS IT SHAPES OUR LIVES</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 2: INTERNATIONAL LAW IN EVERYDAY LIFE: MORE RELEVANT THAN YOU THINK - GLOBAL NEW LIGHT OF MYANMAR</li>
                            <li style={{ marginBottom: '16px', textAlign: 'left' }}>Link: <a href="https://www.gnlm.com.mm/international-law-in-everyday-life-more-relevant-than-you-think/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.gnlm.com.mm/international-law-in-everyday-life-more-relevant-than-you-think/</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 3: INTERNATIONAL LAW IN EVERYDAY LIFE: MORE RELEVANT THAN YOU THINK | STATE ADMINSTRATION COUNCIL</li>
                            <li style={{ marginBottom: '16px', textAlign: 'justify' }}>Link: <a href="https://sacministry.gov.mm/en/article/3759"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://sacministry.gov.mm/en/article/3759</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 4:  WAYS INTERNATIONAL LAW SHAPE OUR LIVES AND THE PRINCIPLE RESPONSIBILITY TO PROTECT (R2P) UNIVERSITY OF ECONOMICS AND FINANCE</li>
                            <li style={{ marginBottom: '16px', textAlign: 'left' }}>Link: <a href="https://www.uef.edu.vn/fir/academic-activities/webinar-ways-international-law-shape-our-lives-and-the-principle-responsibility-to-protect-r2p-14933"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.uef.edu.vn/fir/academic-activities/webinar-ways-international-law-shape-our-lives-and-the-principle-responsibility-to-protect-r2p-14933</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 5: INTERNATIONAL LAW: 50 WAYS IT HARMS OUR LIVES</li>
                            <li style={{ marginBottom: '16px', textAlign: 'justify' }}>Link: <a href="https://www.law.nyu.edu/sites/default/files/ECM_PRO_065322.pdf"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.law.nyu.edu/sites/default/files/ECM_PRO_065322.pdf</a></li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default SourcesPage;
