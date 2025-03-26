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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="w-full p-4 bg-white bg-opacity-10 flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Sources</h1>
                <button 
                    onClick={() => router.push('/pil_ai/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Back to Main
                </button>
            </div>
            
            {showBibliography && (
                <>
                    <h2 style={{ fontSize: '22px', marginBottom: '16px', fontWeight: 'bold' }}>Bibliography</h2>
                    <div className="bibliography" style={{ 
                        backgroundColor: '#ffffff', 
                        padding: '20px', 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                        maxWidth: '600px',
                        maxHeight: '60vh',
                        overflowY: 'auto',
                        fontSize: '14px'
                    }}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '8px' }}>Source 1: INTERNATIONAL LAW AND ADVANCED AI: EXPLORING THE LEVERS FOR 'HARD' CONTROL - INSTITUTE FOR LAW & AI INSTITUTE FOR LAW & AI</li>
                            <li style={{ marginBottom: '8px' }}>Link: <a 
                                href="https://law-ai.org/international-law-and-advanced-ai/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#0066cc', textDecoration: 'underline' }}
                            >
                                https://law-ai.org/international-law-and-advanced-ai/
                            </a></li>
                            <li style={{ marginBottom: '8px' }}>Source 2: Tripti Bhushan, Artificial Intelligence, Cyberspace and International Law, 21 INDONESIAN JOURNAL OF INTERNATIONAL LAW 3 (2024)</li>
                            <li style={{ marginBottom: '8px' }}>Link: <a href="https://scholarhub.ui.ac.id/ijil/vol21/iss2/3"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://scholarhub.ui.ac.id/ijil/vol21/iss2/3</a></li>
                            <li style={{ marginBottom: '8px' }}>Source 3: RECOMMENDATION ON THE ETHICS OF ARTIFICIAL INTELLIGENCE - UNESCO DIGITAL LIBRARY</li>
                            <li style={{ marginBottom: '8px' }}>Link: <a href="https://unesdoc.unesco.org/ark:/48223/pf0000381137"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://unesdoc.unesco.org/ark:/48223/pf0000381137</a></li>
                            <li style={{ marginBottom: '8px' }}>Source 4: AI GOVERNANCE IN THE AGE OF UNCERTAINTY: INTERNATIONAL LAW AS A STARTING POINT</li>
                            <li style={{ marginBottom: '8px' }}>Link: <a href="https://www.justsecurity.org/90903/ai-governance-in-the-age-of-uncertainty-international-law-as-a-starting-point/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.justsecurity.org/90903/ai-governance-in-the-age-of-uncertainty-international-law-as-a-starting-point/</a></li>
                            <li style={{ marginBottom: '8px' }}>Source 5: COUNCIL OF EUROPE ADOPTS FIRST INTERNATIONAL TREATY ON ARTIFICIAL INTELLIGENCE - PORTAL</li>
                            <li style={{ marginBottom: '8px' }}>Link: <a href="https://www.coe.int/en/web/portal/-/council-of-europe-adopts-first-international-treaty-on-artificial-intelligence"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.coe.int/en/web/portal/-/council-of-europe-adopts-first-international-treaty-on-artificial-intelligence</a></li>
                            <li style={{ marginBottom: '8px' }}>Source 6: Anita Banerjee et al., The Transformative Power of AI: Projected Impacts on the Global Economy by 2030, 4 REVIEW OF ARTIFICIAL INTELLIGENCE IN EDUCATION e020 (2023) INTERNATIONAL AI TREATY - CENTER FOR AI AND DIGITAL POLICY</li>
                            <li style={{ marginBottom: '8px' }}>Link: <a href="https://www.caidp.org/resources/coe-ai-treaty/"
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.caidp.org/resources/coe-ai-treaty/</a></li>
                            <li style={{ marginBottom: '8px' }}>Source 7: LANDMARK AI SAFETY TREATY, AND MORE DIGITAL TECH STORIES | WORLD ECONOMIC FORUM</li>
                            <li style={{ marginBottom: '8px' }}>Link: <a href="https://www.weforum.org/stories/2024/09/ai-deepfake-digital-news-september-2024/ "
                            target="_blank" rel="noopender noreferrer" style={{color:'#0066cc',textDecoration: 'underline'}}>https://www.weforum.org/stories/2024/09/ai-deepfake-digital-news-september-2024/ </a></li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default SourcesPage;
