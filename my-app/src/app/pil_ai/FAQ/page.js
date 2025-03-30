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
                    backgroundColor: '#bae7ff',
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
        { question: 'Is there any legally binding treaty on AI governance?', answer: 'Currently, most AI governance frameworks are non-binding, but the Council of Europe’s Framework Convention on AI and Human Rights is the first international legally binding AI treaty.' },
        { question: "Which countries have signed the EU's AI treaty?", answer: 'The treaty is open to 46 Council of Europe member states, the European Union, and 11 non-member states, including the United States, Canada, Japan, and Australia.' },
        { question: 'Can AI be regulated under existing international law?', answer: 'Yes, international human rights law, humanitarian law, and arms control treaties provide some constraints, but AI-specific legal frameworks may be required.' },
        { question: 'How does the United Nations contribute to AI governance?', answer: 'The UN has launched the Advisory Body on AI Governance and discussions on a potential global AI regulatory framework.'},
        { question: 'Can AI be classified as a weapon under international law?', answer: 'AI itself is not classified as a weapon, but its use in autonomous weapons systems raises concerns under international humanitarian law.'},
        { question: 'What legal mechanisms can ensure AI treaty compliance?', answer: 'Compliance could be enforced through domestic laws, international monitoring bodies, and economic sanctions for violations.'},
        { question: 'How do export controls relate to AI governance?', answer: 'Countries like the United States have imposed AI chip export bans, setting a precedent for international agreements controlling AI-related industrial inputs.'},
        { question: 'What challenges exist in establishing a global AI treaty?', answer: 'Key challenges include gaining broad state participation, ensuring private sector compliance, and balancing AI innovation with risk mitigation'}
    ];
    
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 py-8">
            <div className="max-w-600px mx-auto p-4 mb-4 flex relative">
                <h1 className="text-2xl font-bold mx-auto">Frequntly Asked Questions</h1>
                <button 
                    onClick={() => router.push('/pil_ai/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 absolute right-4"
                >
                    Back to Main
                </button>
            </div>
            
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f0f5ff' }}>
                {faqs.map((faq, index) => (
                    <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}
