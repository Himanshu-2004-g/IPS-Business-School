import { motion } from 'motion/react';
import { ArrowRight, BookOpen, GraduationCap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-[100px] sm:pt-[130px] md:pt-[160px] pb-20 md:pb-32 overflow-hidden text-gray-900 min-h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/tCrRg5sn/Gemini-Generated-Image-4o8q2n4o8q2n4o8q.png" 
          alt="University Campus" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-orange/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start gap-6 mb-8"
            >
              <div className="flex flex-wrap items-center gap-4">
                <img src="https://i.postimg.cc/15RggXxx/Whats-App-Image-2026-05-22-at-12-26-19.jpg" alt="AICTE Approved" className="h-20 md:h-24 object-contain bg-white rounded-xl p-3" />
                <img src="https://i.postimg.cc/x8p9N0mx/Whats-App-Image-2026-05-22-at-12-26-21.jpg" alt="RTU Affiliated" className="h-20 md:h-24 object-contain bg-white rounded-xl p-3" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                Admissions Open 2026–28
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white"
            >
              Shape Your Future with an <span className="text-brand-orange">MBA at IPS Business School</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-[18px] text-gray-200 font-medium mb-10 leading-relaxed max-w-2xl"
            >
              Rajasthan's top-ranked IPS MBA college with 18+ years of excellence. Recognized as the best IPS University MBA destination — AICTE approved, RTU affiliated, where industry meets academia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 w-full"
            >
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto justify-center bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center gap-2 group shadow-lg shadow-brand-orange/20">
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center gap-2 backdrop-blur-sm">
                  Download Brochure
                </button>
              </div>

              <div className="hidden lg:flex items-center gap-6 text-sm text-gray-300 font-medium ml-4 border-l border-white/20 pl-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-brand-orange" />
                  International Exchange
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange">★</span>
                  Top Ranked in India
                </div>
              </div>
            </motion.div>

            {/* Mobile/Tablet Feature Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex lg:hidden flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-300 font-medium mt-8 pt-8 border-t border-white/20"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-orange" />
                International Exchange
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-orange">★</span>
                Top Ranked in India
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="bg-white/95 backdrop-blur-xl p-5 sm:p-8 rounded-[2rem] shadow-2xl border border-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquire Now</h3>
              <p className="text-gray-600 mb-6 text-sm">Download brochure and get all details about the MBA program.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange bg-gray-50/50" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange bg-gray-50/50" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange bg-gray-50/50" placeholder="Enter your phone" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange bg-gray-50/50" placeholder="Enter your city" />
                </div>
                <button type="button" className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-4 rounded-xl font-bold transition-colors mt-2 shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2">
                  Submit Enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
