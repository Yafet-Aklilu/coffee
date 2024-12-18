import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Visit Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-amber-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">123 Coffee Street<br />Brewville, BW 12345</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-amber-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-amber-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">hello@artisanbrew.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}