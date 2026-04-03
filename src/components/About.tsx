import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/76840ade-8237-4147-8c3d-0e8c740ee119/heritage-ceremony-c27e6e73-1775219716464.webp" 
                alt="Ethiopian Coffee Heritage" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#4B3621] p-8 rounded-2xl shadow-xl hidden lg:block">
              <span className="text-[#D4AF37] text-4xl font-serif block mb-2">30+</span>
              <span className="text-white/80 text-sm font-medium uppercase tracking-widest">Years of <br />Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4B3621] mb-8 leading-tight">
              Where Every Bean Tells an Ancient Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Ethiopia is not just a producer of coffee; it is the soul of coffee itself. According to legend, the journey began in the Kaffa region centuries ago, and today, we continue that legacy with pride.
              </p>
              <p>
                As a family-owned export house, we bridge the gap between smallholder farmers and the international market. Our mission is to preserve the unique flavor profiles of Ethiopian coffee while ensuring sustainable practices and fair compensation for our growers.
              </p>
              <p className="font-serif italic text-[#4B3621]">
                "Coffee is our gift to the world, and quality is our promise to you."
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#4B3621] mb-1">Sustainable</h4>
                <p className="text-sm text-gray-500">Ethically sourced from high-altitude highlands.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#4B3621] mb-1">Authentic</h4>
                <p className="text-sm text-gray-500">100% Traceable back to the specific washing station.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;