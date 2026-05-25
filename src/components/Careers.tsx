import { motion } from 'motion/react';
import { LineChart, Megaphone, Settings, Truck, Users, Lightbulb } from 'lucide-react';

const ROLES = [
  {
    title: "Investment Analyst",
    desc: "Drive financial growth, equity research, and portfolio valuation for leading investment firms.",
    icon: LineChart
  },
  {
    title: "Digital Marketing Lead",
    desc: "Spearhead brand strategies, performance marketing, and digital consumer engagement.",
    icon: Megaphone
  },
  {
    title: "Operations Manager",
    desc: "Optimize business processes, scale operations, and ensure seamless execution globally.",
    icon: Settings
  },
  {
    title: "Logistics Analyst",
    desc: "Streamline supply chain strategies, vendor management, and global distribution.",
    icon: Truck
  },
  {
    title: "HR Executive",
    desc: "Shape organizational culture, talent acquisition, and workforce development.",
    icon: Users
  },
  {
    title: "Business Consultant",
    desc: "Solve complex corporate challenges and drive strategic transformation for clients.",
    icon: Lightbulb
  }
];

const RECRUITER_LOGOS = [
  "https://i.postimg.cc/mtHq5WK3/80612d717e3e8d70fe1c456f2235a5dc.jpg",
  "https://i.postimg.cc/181TxYZT/Accenture-logo.png",
  "https://i.postimg.cc/4m9MSRjQ/Airtel-logo.png",
  "https://i.postimg.cc/svh8NCbH/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.webp",
  "https://i.postimg.cc/Ln17bFGN/AU-bank-logo.jpg",
  "https://i.postimg.cc/hfdw5RNM/Axis-Bank-logo-svg.png",
  "https://i.postimg.cc/XpChz6t2/Bajaj-Finserv-Logo.png",
  "https://i.postimg.cc/CzqtQp9Z/Deloitte-New-Logo.jpg",
  "https://i.postimg.cc/68xSs1Xt/EY-logo-2019-svg.png",
  "https://i.postimg.cc/qgYSwvDs/HDFC-logo-svg.png",
  "https://i.postimg.cc/JsCgwdLC/images.png",
  "https://i.postimg.cc/75rcvQky/images-(1).png",
  "https://i.postimg.cc/CRpty6V9/images-(2).png",
  "https://i.postimg.cc/WhkKHcxB/images-(3).png",
  "https://i.postimg.cc/PPwcRn0F/images-(4).png",
  "https://i.postimg.cc/HVyKh1Fz/images-(5).png",
  "https://i.postimg.cc/tYxfMG8W/images-(6).png",
  "https://i.postimg.cc/tYxfMG86/images-(7).png",
  "https://i.postimg.cc/s18qmgHP/images-(8).png",
  "https://i.postimg.cc/HjKRzkvX/images-(9).png",
  "https://i.postimg.cc/8j630gx7/Infosys-Technologies-logo-svg.png",
  "https://i.postimg.cc/qNHYfZdD/KPMG-blue-logo-svg.png",
  "https://i.postimg.cc/F7LqBX2t/mckinsey-company-owler-20190728-090718-original.png",
  "https://i.postimg.cc/tYxfMG8L/Paytm-Logo.png",
  "https://i.postimg.cc/svh8NCbZ/Reliance-Industries-svg.png",
  "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png",
  "https://i.postimg.cc/yDC5qrHq/Tata-Consultancy-Services-old-logo-svg.webp"
];

export default function CareerOutcomes() {
  return (
    <div className="relative">
      {/* Dark background section matching the structural layout block */}
      <section className="bg-[#111827] pt-12 md:pt-24 pb-12 md:pb-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12 md:mb-20 items-center">
            <div className="max-w-xl">
              <h2 className="text-white text-3xl md:text-4xl font-semibold mb-3 tracking-tight">
                Career Outcomes
              </h2>
              <p className="text-brand-light/70 text-lg leading-relaxed">
                Top roles and leading brands hiring from our campus. We provide solutions to power your professional journey and career growth.
              </p>
            </div>
            
            {/* Decorative dot pattern matching top right of reference */}
            <div className="hidden lg:flex justify-end pr-10 opacity-30">
               <svg width="120" height="100" fill="none" viewBox="0 0 120 100">
                 <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                   <circle fill="#ffffff" cx="2" cy="2" r="2" opacity="0.6"></circle>
                 </pattern>
                 <rect x="0" y="0" width="120" height="100" fill="url(#dots)"></rect>
               </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLES.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div key={idx} className="flex gap-5 group p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-orange/5">
                  <div className="shrink-0 mt-1">
                    <Icon className="w-9 h-9 text-brand-light/80 group-hover:text-brand-orange transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[19px] mb-2.5 flex items-center gap-3">
                      <span className="text-brand-orange text-[17px] font-semibold">{String(idx + 1).padStart(2, '0')}</span>
                      {role.title}
                    </h4>
                    <p className="text-brand-light/60 text-[15px] leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* The Overlapping White Slip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-[4.5rem] mb-12 md:mb-24">
        <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/10 py-8 md:py-10 px-4 sm:px-8 border-t-[6px] border-t-white flex flex-col justify-center overflow-hidden min-h-[140px]">
          
          <div 
            className="flex overflow-hidden relative z-10 w-full"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
            }}
          >
            <motion.div 
              className="flex items-center gap-x-12 md:gap-x-16 shrink-0 pr-12 md:pr-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 45, repeat: Infinity }}
            >
              {RECRUITER_LOGOS.map((url, idx) => (
                <div key={`track1-${idx}`} className="w-36 md:w-44 h-20 md:h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-3 hover:shadow-md hover:scale-105 transition-all duration-300">
                  <img 
                    src={url}
                    alt={`Recruiter ${idx + 1}`}
                    className="w-[90%] h-[90%] object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div 
              className="flex items-center gap-x-12 md:gap-x-16 shrink-0 pr-12 md:pr-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 45, repeat: Infinity }}
            >
              {RECRUITER_LOGOS.map((url, idx) => (
                <div key={`track2-${idx}`} className="w-36 md:w-44 h-20 md:h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-3 hover:shadow-md hover:scale-105 transition-all duration-300">
                  <img 
                    src={url}
                    alt={`Recruiter ${idx + 1}`}
                    className="w-[90%] h-[90%] object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
