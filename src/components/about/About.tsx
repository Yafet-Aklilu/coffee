import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl text-gray-900 mb-12 text-center">About</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Since 1970, we've been dedicated to the craft of coffee making. 
            Our approach is simple: source exceptional beans, roast with precision, 
            and serve with care.
          </p>
          <p>
            Every cup represents our commitment to quality and sustainability, 
            partnering directly with farms that share our values.
          </p>
        </div>
      </div>
    </section>
  );
}