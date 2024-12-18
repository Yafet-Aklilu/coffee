import React from 'react';
import { Coffee } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-amber-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Coffee className="h-6 w-6" />
          <span className="text-xl font-bold">Artisan Brew</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-amber-200 transition">Home</a>
          <a href="#menu" className="hover:text-amber-200 transition">Menu</a>
          <a href="#about" className="hover:text-amber-200 transition">About</a>
          <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}