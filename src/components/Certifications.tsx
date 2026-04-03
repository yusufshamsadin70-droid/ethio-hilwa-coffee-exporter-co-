import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { name: 'Organic Certified', issuer: 'EU/USDA Organic' },
    { name: 'Fair Trade', issuer: 'Fairtrade International' },
    { name: 'Rainforest Alliance', issuer: 'RA Certified' },
    { name: 'SCA Member', issuer: 'Specialty Coffee Association' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#FAF7F2] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Background Decorative element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
            <Award className="w-96 h-96 text-[#D4AF37]/5 rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h3 className="text-3xl md:text-4xl font-serif text-[#4B3621] mb-6">
                Committed to the <br />Highest Standards
              </h3>
              <p className="text-gray-600">
                Quality is not just a department at Abyssinia Gold; it's our philosophy. We adhere to international standards to ensure our coffee is safe, ethical, and superior.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full md:w-auto">
              {certs.map((cert) => (
                <motion.div 
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-[#D4AF37]/10 p-3 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#4B3621] text-sm uppercase tracking-wider">{cert.name}</h5>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;