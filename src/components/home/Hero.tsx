import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
          Crafted with precision.
          <br />
          Served with care.
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Premium coffee in its purest form.
        </p>
        <a 
          href="#menu" 
          className="inline-block border border-gray-900 text-gray-900 px-8 py-2 hover:bg-gray-900 hover:text-white transition"
        >
          View Menu
        </a>
      </div>
    </div>
  );
}