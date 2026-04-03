import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: 'url("https://storage.googleapis.com/dala-prod-public-storage/generated-images/76840ade-8237-4147-8c3d-0e8c740ee119/hero-farm-afb10670-1775219715331.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[#D4AF37] font-semibold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Exporting Excellence Since 1994
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
            Ethiopia's Finest <br /> 
            <span className="italic">Specialty Coffee</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Connecting the world to the birthplace of coffee. We bring the rich heritage 
            and diverse flavors of Ethiopian beans to global roasters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#D4AF37] text-white rounded-full font-bold text-lg hover:bg-[#C5A028] transition-all flex items-center group"
            >
              Explore Our Beans
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Wholesale Inquiry
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;