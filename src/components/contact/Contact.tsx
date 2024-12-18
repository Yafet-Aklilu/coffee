import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl text-gray-900 mb-12 text-center">Contact</h2>
        <div className="space-y-6 text-center">
          <div>
            <p className="text-gray-900">Visit Us</p>
            <p className="text-gray-600">123 Coffee Street, Brewville</p>
          </div>
          <div>
            <p className="text-gray-900">Hours</p>
            <p className="text-gray-600">Daily 7am — 7pm</p>
          </div>
          <div>
            <p className="text-gray-900">Contact</p>
            <p className="text-gray-600">hello@brew.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}