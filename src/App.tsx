import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <footer className="py-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Brew. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;