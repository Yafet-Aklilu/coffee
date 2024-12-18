import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Coffee shop interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-amber-900">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 1970, Artisan Brew has been serving premium coffee to our community for over 50 years. 
              We source our beans directly from sustainable farms around the world, ensuring both quality and ethical practices.
            </p>
            <p className="text-gray-700">
              Every cup we serve is crafted with passion and precision by our trained baristas, 
              who take pride in delivering the perfect coffee experience to our valued customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}