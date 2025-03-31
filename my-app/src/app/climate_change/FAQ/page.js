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
        { question: 'What are the key components of the international climate change regime?', answer: 'The international climate change regime is centered around the UNFCCC, Kyoto Protocol, and Paris Agreement, establishing a framework for global action. The UNFCCC set the stage, the Kyoto Protocol introduced binding targets, and the Paris Agreement focuses on nationally determined contributions.' },
        { question: "What are the main challenges in achieving effective climate action?", answer: 'Challenges include insufficient NDCs, weak enforcement mechanisms, and political and economic considerations that hinder strong climate policies. Geopolitical tensions and the balance between national interests and climate commitments also pose challenges.' },
        { question: 'How does climate change impact human rights?', answer: 'Climate change impacts the rights to life, health, food, water, housing, and culture, disproportionately affecting vulnerable populations. The right to a clean, healthy, and sustainable environment is increasingly recognized as a fundamental human right.' },
        { question: 'What is the role of international trade and investment law in climate action?', answer: 'International trade and investment law significantly influence climate change, with trade liberalization potentially increasing emissions. CBAMs and ISDS mechanisms can impact climate policies, creating both opportunities and challenges.'},
        { question: 'How can international investment law be reformed to better align with climate goals?', answer: 'Reforming international investment law involves treaty revisions, clarifying investor protections, and allowing greater regulatory flexibility for climate-related measures. The key is to design a system that promotes low-emission investments and supports a just transition.'},
        { question: 'Can economic sanctions be challenged in court?', answer: 'Yes, individuals and entities subject to sanctions can challenge them in international and regional courts, such as the European Court of Justice and the ICJ, particularly on human rights and due process grounds.'}
    ];
    
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 py-8">
            <div className="max-w-600px mx-auto p-4 mb-4 flex relative">
                <h1 className="text-2xl font-bold mx-auto">Frequently Asked Questions</h1>
                <button 
                    onClick={() => router.push('/climate_change/')}
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
