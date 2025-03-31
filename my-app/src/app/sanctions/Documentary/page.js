"use client";

import React from 'react';
import Link from 'next/link';

export default function DocumentaryPage() {
  // Replace this YouTube video ID with your desired video
  const videoId = "rXv6G9OaCF4";
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-400 to-pink-400 py-8 px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">Documentary</h1>
          
          <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/sanctions" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200">
              Back to Main
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}