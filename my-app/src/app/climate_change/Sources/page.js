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
                    onClick={() => router.push('/climate_change/')}
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
                            <li style={{ marginBottom: '8px', textAlign: 'left' }}>Source 1: United Nations Framework Convention on Climate Change, May 9, 1992, 1771 U.N.T.S. 107.</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 2: Paris Agreement, Dec. 12, 2015, T.I.A.S. No. 16-1104.</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 3: Request for Advisory Opinion on Climate Obligations (Pending), Int'l Ct. Justice.</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 4: Urgenda Foundation v. Netherlands, Hoge Raad der Nederlanden [HR] Dec. 20, 2019, ECLI:NL:HR:2019:2007 (Neth.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 5: G.A. Res. 48/13, The Human Right to a Clean, Healthy and Sustainable Environment (Oct. 8, 2021).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 6: WTO Dispute Settlement Body, EU Carbon Border Adjustment Mechanism - Legal Challenges (2024).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 7: Intergovernmental Panel on Climate Change (IPCC), Sixth Assessment Report (AR6) (2023).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 8: Climate Hughes, Public International Law and Climate Change (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 9: Law Climate Atlas, Public International Law and Climate Change (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 10: UNFCCC Secretariat, The Paris Agreement, available at <a href="https://unfccc.int" style={{ color: 'blue', textDecoration: 'underline' }}>https://unfccc.int</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 11: Lewis & Clark Law School Library, International Climate Change Law: International Agreements (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 12: Columbia Law School, Changing International Law for a Changing Climate (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 13: European Parliament, The Normative Status of Climate Change Obligations under International Law (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 14: Brooklyn Law School Library, Climate Change and Environmental Law Guide: International Agreements (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 15: Science Direct, “Climate Change Damages: Conceptualization of a Legal Notion with Implications for Liability” (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 16: Harvard Law School, Climate Change and Health: Mobilizing Public International Law into Action (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 17: "Climate Change: International Law and Global Governance," in JSTOR Volumes I-II (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 18: United Nations Office of Legal Affairs, Paris Agreement (n.d.).</li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 19: United Nations Framework Convention on Climate Change Secretariat, Key Aspects of the Paris Agreement, available at <a href="https://unfccc.int" style={{ color: 'blue', textDecoration: 'underline' }}>https://unfccc.int</a></li>
                            <li style={{ marginBottom: '8px', textAlign: 'justify' }}>Source 20: Natural Resources Defense Council (NRDC), “Paris Climate Agreement: Everything You Need to Know” (n.d.).</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default SourcesPage;
