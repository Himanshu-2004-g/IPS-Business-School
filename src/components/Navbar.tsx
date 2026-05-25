import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo representation based on provided image text colors */}
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/QCDfXWwt/Gemini-Generated-Image-m1i177m1i177m1i1.png" 
              alt="IPS BUSINESS SCHOOL" 
              className="h-14 sm:h-18 md:h-24 w-auto object-contain rounded-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="#academics" className="hover:text-brand-orange transition-colors">Academics</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Placements</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Admissions</a>
          <button className="bg-brand-orange text-white px-6 py-2.5 rounded-lg hover:bg-brand-orange-hover transition-colors font-semibold shadow-md shadow-brand-orange/20">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 font-medium text-gray-800 md:hidden shadow-xl z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          <a href="#academics" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4 hover:text-brand-orange transition-colors">Academics</a>
          <a href="#" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4 hover:text-brand-orange transition-colors">Placements</a>
          <a href="#" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4 hover:text-brand-orange transition-colors">Admissions</a>
          <button onClick={() => setIsOpen(false)} className="bg-brand-orange text-white px-6 py-3.5 rounded-lg font-semibold mt-2 hover:bg-brand-orange-hover transition-colors">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
}
