import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee, Globe, ShieldCheck, Mail, Phone, ExternalLink, Instagram, Facebook, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3C2A21] font-sans selection:bg-[#D4AF37] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;