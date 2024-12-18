import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Artisan Brew</h1>
          <p className="text-xl md:text-2xl mb-8">Crafting Perfect Moments, One Cup at a Time</p>
          <a 
            href="#menu" 
            className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition"
          >
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
}