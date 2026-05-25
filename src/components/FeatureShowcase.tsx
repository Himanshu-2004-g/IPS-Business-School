import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    title: "Merit Scholarship",
    subtitle: "Academic Excellence Award",
    description: "Students with strong academic track record in graduation are eligible for tuition fee concession up to a significant percentage based on marks.",
    image: "https://i.postimg.cc/1z965r3n/Whats-App-Image-2025-05-05-at-1-11-00-PM.jpg",
  },
  {
    title: "RTU Rank Holders",
    subtitle: "University Toppers Scholarship",
    description: "Special scholarship for students who rank in RTU PMET merit list. Additional benefits for top 10 rankers of Rajasthan.",
    image: "https://i.postimg.cc/50fMrjgr/IMG-2284.jpg",
  },
  {
    title: "Early Admission",
    subtitle: "Early Bird Benefit",
    description: "Students who confirm admission early in the cycle avail special fee discounts and priority seat reservation.",
    image: "https://i.postimg.cc/Sxt2kF3W/Whats-App-Image-2025-06-02-at-10-04-23-AM-(1).jpg",
  },
  {
    title: "Sports / Culture",
    subtitle: "All-Rounder Scholarship",
    description: "Recognition for students with achievements in sports, arts, or social service at the national or state level.",
    image: "https://i.postimg.cc/Xvw2t8DG/Whats-App-Image-2025-03-07-at-12-57-51-PM.jpg",
  }
];

export default function FeatureShowcase() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">Scholarship Programs</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden group border border-gray-100 shadow-sm transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end h-full">
                  <h4 className="text-2xl font-bold mb-1 text-white">
                    {feature.title}
                  </h4>
                  <p className="text-[13px] tracking-wider uppercase font-semibold mb-3 text-brand-orange">
                    {feature.subtitle}
                  </p>
                  
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-in-out max-h-40 opacity-100 translate-y-0 lg:max-h-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
                  >
                    <p className="text-gray-300 leading-relaxed text-sm mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-brand-orange-hover transition-colors shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40">
            Download Fee Structure
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
