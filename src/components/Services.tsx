import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Truck, Ship, ShieldCheck, ClipboardCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Export',
    desc: 'Regular shipments to Europe, North America, and Asia with full logistics support.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Farm Direct',
    desc: 'Direct sourcing from washing stations ensures maximum freshness and traceability.'
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: 'Sea & Air Freight',
    desc: 'Flexible shipping options optimized for speed or cost-efficiency based on your needs.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Quality Lab',
    desc: 'In-house cupping and moisture testing for every batch before dispatch.'
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: 'Custom Packaging',
    desc: 'Bespoke branding and GrainPro packaging options for specialty clients.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Rapid Dispatch',
    desc: 'Streamlined documentation process for fast customs clearance and delivery.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#4B3621] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm mb-4 block">Our Operations</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Seamless Supply Chain <br /> From Farm to Port
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-xl">
              We manage the entire export process, ensuring that the delicate flavor profiles of our specialty beans are preserved throughout their journey to your warehouse.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/76840ade-8237-4147-8c3d-0e8c740ee119/export-shipping-786102f8-1775219715003.webp" 
                alt="Global Shipping" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#4B3621]/20" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-[#D4AF37] mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;