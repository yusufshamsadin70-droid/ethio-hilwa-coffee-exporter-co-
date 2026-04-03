import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We will get back to you shortly!");
  };

  return (
    <section id="contact" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4B3621] mb-8 leading-tight">
              Start Your Coffee <br /> Partnership Today
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Whether you're looking for a specific micro-lot or a consistent container shipment, our team is ready to discuss your requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white shadow-md p-4 rounded-2xl text-[#D4AF37]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#4B3621]">Call Us</h4>
                  <p className="text-gray-500">+251 116 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white shadow-md p-4 rounded-2xl text-[#25D366]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#4B3621]">WhatsApp</h4>
                  <p className="text-gray-500">+251 911 234 567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white shadow-md p-4 rounded-2xl text-[#4B3621]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#4B3621]">Email</h4>
                  <p className="text-gray-500">export@abyssiniagold.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white shadow-md p-4 rounded-2xl text-gray-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#4B3621]">Office</h4>
                  <p className="text-gray-500">Bole Sub City, Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#FAF7F2] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-[#FAF7F2] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <select className="w-full bg-[#FAF7F2] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all">
                  <option>Wholesale Inquiry</option>
                  <option>Samples Request</option>
                  <option>Logistics Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea 
                  required
                  rows={5} 
                  placeholder="Tell us about your coffee needs..."
                  className="w-full bg-[#FAF7F2] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#4B3621] text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3C2A21] transition-all"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;