import React from 'react';
import { Coffee } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-gray-900" />
          <span className="text-lg text-gray-900">Brew</span>
        </div>
        <div className="hidden md:flex gap-8">
          {['menu', 'about', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-600 hover:text-gray-900 transition lowercase"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}