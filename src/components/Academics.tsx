import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Briefcase, Layers, PieChart, Megaphone, Users, Settings, Lightbulb, Globe, BarChart } from 'lucide-react';

const SPECIALIZATIONS = [
  { name: "Finance", icon: PieChart },
  { name: "Marketing", icon: Megaphone },
  { name: "Human Resources", icon: Users },
  { name: "Operations", icon: Settings },
  { name: "Entrepreneurship", icon: Lightbulb },
  { name: "International Business", icon: Globe },
  { name: "Business Analytics", icon: BarChart },
  { name: "Digital Marketing", icon: TrendingUp }
];

const COURSES = [
  {
    id: "dual-major",
    title: "MBA Dual Major",
    subtitle: "Specialization • 2 Years Full Time · AICTE Approved",
    features: [
      "Regular degree with real work experience via OJTs & Live Projects",
      "Dual specialization — master two domains simultaneously",
      "AI / ML & Business Analytics add-on (Levels 1–4)",
      "Digital Marketing add-on course (Levels 1–4)",
      "3-month International Exchange Program (optional / sponsored)*",
      "Affiliated with Rajasthan Technical University (RTU)"
    ],
    ctaText: "Download Brochure",
    icon: Layers,
    image: "https://i.postimg.cc/KvVTJjCL/IMG-7075.jpg"
  },
  {
    id: "specializations",
    title: "MBA Specializations",
    subtitle: "Available • Choose Any Two Majors",
    features: [
      "Finance & Banking — equity, investment, BFSI sector",
      "Marketing & Sales — brand, digital, consumer behavior",
      "Human Resource Management — talent, OB, IR",
      "Operations & Supply Chain — process, logistics, SCM",
      "Entrepreneurship & Innovation — startup ecosystem, design thinking",
      "International Business — global trade, forex, MNCs"
    ],
    ctaText: "Enquire Now",
    icon: Briefcase,
    image: "https://i.postimg.cc/2jcXwdG5/IMG-8443.jpg"
  },
  {
    id: "value-added",
    title: "Value-Added",
    subtitle: "Add-On Courses • Industry-Certified · Included in Program",
    features: [
      "Artificial Intelligence & Machine Learning (4 progressive levels)",
      "Business & Data Analytics (4 progressive levels)",
      "Digital Marketing (4 progressive levels)",
      "IIM / IIT / XLRI / MICA collaborative sessions",
      "Regular industry expert guest lectures & workshops",
      "Soft skills, leadership & communication training"
    ],
    ctaText: "Learn More",
    icon: TrendingUp,
    image: "https://i.postimg.cc/RVnqdBKS/Gemini-Generated-Image-v9207xv9207xv920.png"
  }
];

export default function Academics() {
  const [activeCourse, setActiveCourse] = useState(0);

  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-32 bg-white" id="academics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase mb-3">Academics</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">MBA Program at IPS</h3>
          <p className="text-lg text-gray-600">
            A future-ready MBA with dual specialization, hands-on industry training, and cutting-edge add-on courses built for tomorrow's leaders.
          </p>
        </div>

        {/* Custom Tab Selector */}
        <div className="flex md:flex-wrap overflow-x-auto scrollbar-none justify-start md:justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-6 md:px-0 -mx-6 md:mx-0 snap-x snap-mandatory">
          {COURSES.map((course, idx) => {
            const Icon = course.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveCourse(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 md:px-6 md:py-4 rounded-xl font-medium text-sm md:text-base transition-all duration-300 snap-start shrink-0 ${
                  activeCourse === idx 
                    ? 'bg-gray-900 text-white shadow-xl shadow-gray-900/10 ring-2 ring-gray-900 ring-offset-2'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 shadow-sm'
                }`}
              >
                <Icon className={`w-5 h-5 ${activeCourse === idx ? 'text-brand-orange' : 'text-gray-400'}`} />
                {course.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Split Layout */}
        <div className="bg-white border border-gray-100 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCourse}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-0 w-full h-auto"
            >
              {/* Content Side */}
              <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center h-full order-2 lg:order-2 bg-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-xs md:text-sm font-bold tracking-wide uppercase mb-6 md:mb-8 w-fit shrink-0">
                   {COURSES[activeCourse].subtitle}
                </div>
                <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight shrink-0">
                  {COURSES[activeCourse].title}
                </h4>
                
                <ul className="space-y-5 mb-6 md:mb-10">
                  {COURSES[activeCourse].features.map((item, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.2 }}
                      key={i} 
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed text-[17px] font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-6 border-t border-gray-100 shrink-0">
                  <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 group shadow-lg shadow-brand-orange/20 w-fit relative z-10 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      {COURSES[activeCourse].ctaText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Image Side */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-full order-1 lg:order-1 overflow-hidden bg-gray-100">
                <motion.img 
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={COURSES[activeCourse].image} 
                  alt={COURSES[activeCourse].title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 md:mt-24 text-center">
          <h5 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 md:mb-8">All Available Specializations</h5>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
            {SPECIALIZATIONS.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <span 
                  key={i} 
                  className="group flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-white text-gray-700 rounded-full text-[13px] md:text-sm font-medium md:font-semibold border border-gray-200 shadow-sm hover:border-brand-orange/40 hover:shadow-brand-orange/10 hover:text-brand-orange transition-all duration-300 cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 group-hover:text-brand-orange transition-colors duration-300" />
                  {spec.name}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
