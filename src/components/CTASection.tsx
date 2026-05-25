import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="bg-[#0a0a0a] rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-gray-800/50 bg-cover bg-center"
          style={{ backgroundImage: `url('https://i.postimg.cc/VvZNWXqw/Whats-App-Image-2024-12-12-at-4-29-50-PM.jpg')` }}
        >
          {/* Subtle Glow Effect */}
          <div className="absolute top-1/2 left-[60%] -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-orange/20 rounded-full blur-[140px] pointer-events-none" />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent md:hidden z-0 pointer-events-none" />
          
          {/* Left Content */}
          <div className="w-full max-w-3xl p-6 sm:p-10 md:p-16 lg:p-20 relative z-20 flex flex-col justify-center min-h-[500px]">
            <span className="text-brand-orange italic font-medium text-xl md:text-2xl mb-4 font-serif shadow-black/50 drop-shadow-md">
              Limited Seats — Batch 2026–28
            </span>
            
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight leading-[1.1] shadow-black/50 drop-shadow-lg">
              Ready to Build Your <br className="hidden md:block"/>Business Career?
            </h2>
            
            <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-6 md:mb-12 leading-relaxed shadow-black/50 drop-shadow-md">
              Join 500+ IPS alumni placed at top companies across India. Apply today before seats fill up.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 md:mb-10">
              <button className="w-full sm:w-auto bg-brand-orange hover:brightness-110 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group text-base shadow-xl">
                Apply for MBA 2026 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-black/40 backdrop-blur-sm border border-white/20 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-base shadow-xl">
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp Us
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-gray-300 font-medium shadow-black/50 drop-shadow-md">
              <div className="flex items-center gap-2">
                 <span className="text-white text-base">+91 82339 70000</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                 <MapPin className="w-5 h-5" />
                 <span className="text-white text-base">Nirman Nagar, Jaipur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
