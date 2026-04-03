import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const coffeeVarieties = [
  {
    name: 'Yirgacheffe',
    origin: 'Southern Ethiopia',
    notes: 'Floral, Lemon, Tea-like body',
    roast: 'Light to Medium',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76840ade-8237-4147-8c3d-0e8c740ee119/yirgacheffe-beans-1b77e6a6-1775219716049.webp',
  },
  {
    name: 'Sidamo',
    origin: 'Rift Valley Region',
    notes: 'Citrusy, Berry, Smooth finish',
    roast: 'Medium',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76840ade-8237-4147-8c3d-0e8c740ee119/sidamo-beans-a2a5cad4-1775219716459.webp',
  },
  {
    name: 'Harrar',
    origin: 'Eastern Ethiopia',
    notes: 'Wild, Winey, Blueberry hints',
    roast: 'Medium to Dark',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76840ade-8237-4147-8c3d-0e8c740ee119/harrar-beans-d4f0ef67-1775219715468.webp',
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm"
          >
            Premium Selection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#4B3621] mt-2"
          >
            Explore Our Regions
          </motion.h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From the floral heights of Yirgacheffe to the wild, sun-dried beans of Harrar, we offer the best that Ethiopia has to provide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coffeeVarieties.map((coffee, index) => (
            <motion.div
              key={coffee.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={coffee.image} 
                  alt={coffee.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#4B3621] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Specialty Grade
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{coffee.origin}</span>
                <h3 className="text-2xl font-serif text-[#4B3621] mt-1 mb-4">{coffee.name}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Flavor Profile:</span>
                    <span className="font-medium text-[#4B3621]">{coffee.notes}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Recommended Roast:</span>
                    <span className="font-medium text-[#4B3621]">{coffee.roast}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl border-2 border-[#4B3621] text-[#4B3621] font-bold hover:bg-[#4B3621] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Inquire Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;