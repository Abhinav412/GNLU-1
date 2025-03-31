'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px', backgroundColor: '#e6f7ff' }}>
            <div
                onClick={toggleAnswer}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    cursor: 'pointer',
                    backgroundColor: '#e6f8ff',
                    borderBottom: isOpen ? '1px solid #ccc' : 'none',
                }}
            >
                <span>{question}</span>
                <span style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                    ➤
                </span>
            </div>
            {isOpen && (
                <div style={{ padding: '10px', backgroundColor: '#ffffff' }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

export default function FAQPage() {
    const faqs = [
        { question: 'Are economic sanctions legally binding under international law?', answer: 'Yes, sanctions imposed by the UN Security Council are legally binding on all member states under the UN Charter. Unilateral sanctions, however, often face legal challenges regarding their legitimacy under customary international law.' },
        { question: "What are the primary types of economic sanctions?", answer: 'Sanctions typically include trade embargoes, asset freezes, financial restrictions, travel bans, and arms embargoes. Targeted or "smart" sanctions focus on individuals and specific entities rather than entire populations.' },
        { question: 'Can economic sanctions violate human rights?', answer: 'Yes, broad sanctions that lead to economic deprivation and humanitarian crises may be viewed as violating fundamental human rights. International bodies, including the ICJ, have reviewed cases where sanctions disproportionately impacted civilian populations.' },
        { question: 'How do countries evade economic sanctions?', answer: 'Sanctioned states often use alternative financial systems, cryptocurrency, front companies, and smuggling networks to bypass restrictions. Countries like Iran and North Korea have developed sophisticated evasion mechanisms.'},
        { question: 'What role does the Financial Action Task Force (FATF) play in sanctions enforcement?', answer: 'The FATF helps combat illicit financial activities related to sanctions evasion by setting global standards for anti-money laundering and counter-terrorist financing.'},
        { question: 'Can economic sanctions be challenged in court?', answer: 'Yes, individuals and entities subject to sanctions can challenge them in international and regional courts, such as the European Court of Justice and the ICJ, particularly on human rights and due process grounds.'},
        { question: 'What are secondary sanctions?', answer: 'Secondary sanctions target third-party states or entities that do business with sanctioned countries, thereby expanding the enforcement reach of the sanctioning state.'},
        { question: 'Do economic sanctions always achieve their objectives?', answer: 'Not necessarily. While sanctions have successfully pressured states into compliance, such as Iran’s nuclear deal negotiations, they have also failed in cases like North Korea, where the regime remains resistant despite extensive sanctions.'}
    ];
    
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 py-8">
            <div className="max-w-600px mx-auto p-4 mb-4 flex relative">
                <h1 className="text-2xl font-bold mx-auto">Sanctions and International Law: Key Takeaways</h1>
                <button 
                    onClick={() => router.push('/sanctions/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 absolute right-4"
                >
                    Back to Main
                </button>
            </div>
            
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
                {faqs.map((faq, index) => (
                    <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}
