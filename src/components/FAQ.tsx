import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    question: "Is the IPS MBA degree AICTE approved?",
    answer: "Yes. The MBA programme at IPS Business School is fully approved by AICTE, New Delhi (Government of India) and affiliated with Rajasthan Technical University (RTU). The degree is recognized across India and valid for government jobs and higher education."
  },
  {
    question: "Is there an international exposure program?",
    answer: "Yes! IPS offers a 3-month International Training & Exchange Program (sponsored / optional*). Select students get the opportunity to study or intern abroad, giving them global exposure that is invaluable in today's business world."
  },
  {
    question: "Are add-on courses like AI/ML included in the fee?",
    answer: "Yes. IPS provides AI/ML, Business Analytics, and Digital Marketing add-on courses as part of the program across 4 progressive levels. These industry-relevant certifications enhance your resume and skill set at no extra cost"
  },
  {
    question: "What specializations are available in MBA?",
    answer: "IPS offers MBA with Dual Major Specialization. You can choose two from: Finance, Marketing, Human Resource Management, Operations & Supply Chain, Entrepreneurship & Innovation, and International Business. This gives you a competitive edge in the job market."
  },
  {
    question: "What entrance exams are accepted for admission?",
    answer: "IPS MBA accepts scores from CAT, MAT, CMAT, XAT, and RTU PMET. Direct admission is also available based on your graduation percentage. Contact our admissions team to understand the best route for you."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-brand-dark mb-4 tracking-tight">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-gray-900 pr-4">{faq.question}</span>
                  <div className={`shrink-0 p-1 rounded-full transition-colors ${isOpen ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
