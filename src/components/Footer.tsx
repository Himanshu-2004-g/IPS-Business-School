import { MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:pr-8">
            <div className="mb-6 flex items-start">
              <div className="inline-flex">
                <img 
                  src="https://i.postimg.cc/QCDfXWwt/Gemini-Generated-Image-m1i177m1i177m1i1.png" 
                  alt="IPS BUSINESS SCHOOL" 
                  className="h-20 md:h-24 w-auto object-contain rounded-xl"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Rajasthan's top-ranked MBA college. We bridge the gap between industry and academia to create tomorrow's business leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Academics', 'Corporate Placements', 'Scholarships', 'Admission Process', 'Student Life'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-orange" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                </div>
                <span>Nirman Nagar, Jaipur,<br />Rajasthan - 302019</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-orange" />
                </div>
                <span>+91 82339 70000</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-orange" />
                </div>
                <span>admissions@ipsedu.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Apply Now
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Admissions for MBA Batch 2026-28 are currently open. Limited seats available.
            </p>
            <button className="w-full bg-brand-orange hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group text-sm shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40">
              Start Application
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} IPS Business School. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <p className="hover:text-white transition-colors">Design and Develop By Mediagarh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
