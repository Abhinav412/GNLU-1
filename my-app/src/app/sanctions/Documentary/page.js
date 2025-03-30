'use client'; // Using client component for interactive elements

import React from 'react';

export default function Documentary() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400">
      <div className="px-8 py-8 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-black mb-6">Documentary</h1>
        <button 
            onClick={() => router.push('/sanctions/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 absolute right-2 top-4"
        >
            Back to Main
        </button>
        <div className="my-8">
          <video 
            controls 
            width="100%" 
            height="auto"
            className="shadow-md rounded"
          >
            <source src="/videos/documentary.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
