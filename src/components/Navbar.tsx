import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Heritage', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Coffee className={`w-8 h-8 ${isScrolled ? 'text-[#4B3621]' : 'text-white'}`} />
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#4B3621]' : 'text-white'}`}>
            ABYSSINIA<span className="text-[#D4AF37]">GOLD</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest hover:text-[#D4AF37] transition-colors ${
                isScrolled ? 'text-[#4B3621]' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              isScrolled 
                ? 'bg-[#4B3621] text-white hover:bg-[#3C2A21]' 
                : 'bg-white text-[#4B3621] hover:bg-gray-100'
            }`}
          >
            GET A QUOTE
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${isScrolled ? 'text-[#4B3621]' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#4B3621] hover:text-[#D4AF37]"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#4B3621] text-white px-6 py-3 rounded-xl font-semibold">
                GET A QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;