import React from 'react';
import { Coffee, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Coffee className="w-6 h-6 text-[#4B3621]" />
              <span className="text-xl font-bold tracking-tight text-[#4B3621]">
                ABYSSINIA<span className="text-[#D4AF37]">GOLD</span>
              </span>
            </div>
            <p className="text-gray-500 mb-8 max-w-xs">
              Ethiopia's premier coffee exporting house, dedicated to quality, tradition, and global excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#4B3621] hover:bg-[#D4AF37] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#4B3621] hover:bg-[#D4AF37] hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#4B3621] hover:bg-[#D4AF37] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#4B3621] mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">Our Story</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Specialty Beans</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Export Services</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#4B3621] mb-6 uppercase tracking-widest text-sm">Regions</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Yirgacheffe</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Sidamo</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Harrar</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Guji</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#4B3621] mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe for crop updates and market reports.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-[#FAF7F2] border-none rounded-lg px-4 py-2 w-full focus:ring-1 focus:ring-[#D4AF37] outline-none"
              />
              <button className="bg-[#4B3621] text-white px-4 py-2 rounded-lg font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2024 Abyssinia Gold Export. All rights reserved.</p>
          <div className="flex space-x-6 text-xs text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;