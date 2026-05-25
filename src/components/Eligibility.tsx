import { motion } from 'motion/react';
import { CheckCircle, Home, UserCheck, GraduationCap, MapPin } from 'lucide-react';

export default function Eligibility() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">Who Can Apply</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Eligibility Criteria */}
          <div className="flex-1 space-y-10">
            <h4 className="text-3xl font-bold text-brand-dark mb-8 border-b pb-4">Eligibility Criteria</h4>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-brand-orange/10 p-2 rounded-lg text-brand-orange h-fit">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-brand-dark mb-2">Graduation in Any Discipline</h5>
                <p className="text-gray-600 leading-relaxed">
                  Minimum 50% marks in any bachelor's degree (B.Com, BBA, B.Tech, B.Sc, BA, etc.) from a recognized university. Final year students can also apply.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-brand-orange/10 p-2 rounded-lg text-brand-orange h-fit">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-brand-dark mb-2">Entrance Exam Scores</h5>
                <p className="text-gray-600 leading-relaxed">
                  Valid score in CAT / MAT / CMAT / XAT / RTU PMET accepted. Direct admission also available based on graduation marks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-brand-orange/10 p-2 rounded-lg text-brand-orange h-fit">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-brand-dark mb-2">No Age Bar</h5>
                <p className="text-gray-600 leading-relaxed">
                  There is no upper age limit for MBA admissions at IPS Business School. Working professionals are also welcome.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-brand-orange/10 p-2 rounded-lg text-brand-orange h-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-brand-dark mb-2">Open to All Regions</h5>
                <p className="text-gray-600 leading-relaxed">
                  Students from across India are welcome. Hostel facility available separately for boys and girls on campus.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full sm:w-auto justify-center bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-semibold transition-transform active:scale-95 inline-flex items-center gap-2 group shadow-lg shadow-brand-orange/30">
                Check Eligibility & Apply Now
              </button>
            </div>
          </div>

          {/* Hostel Facility */}
          <div className="lg:w-[420px] xl:w-[480px] w-full">
            <div className="relative rounded-[2.5rem] overflow-hidden h-full flex flex-col justify-end min-h-[400px] sm:min-h-[500px] lg:sticky lg:top-24 shadow-2xl border border-white/10 group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 bg-black">
                <img 
                  src="https://www.collegebatch.com/static/clg-gallery/ips-business-school-jaipur-212873.webp" 
                  alt="Hostel Facility" 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Premium Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              </div>
              
              <div className="relative z-10 p-6 sm:p-10 mt-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <div className="bg-brand-orange/20 p-2.5 rounded-xl backdrop-blur-md border border-brand-orange/30">
                      <Home className="w-6 h-6 text-brand-orange" strokeWidth={2} />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold text-white tracking-tight">Hostel Facility <br/><span className="text-brand-orange">Available</span></h4>
                </div>
                
                <div className="space-y-5 relative">
                  {/* Decorative line */}
                  <div className="absolute left-[9px] top-4 bottom-4 w-[2px] bg-white/10" />
                  
                  {[
                    "Separate hostels for boys and girls",
                    "Single, double & triple-sharing room options",
                    "Wi-Fi, Mess, 24×7 Security & Laundry",
                    "Medical support & recreation facilities",
                    "Hostel fee is separate from academic fee"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 relative z-10">
                      <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-gray-900 border-2 border-brand-orange flex items-center justify-center shadow-[0_0_10px_rgba(255,107,0,0.3)]">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      </div>
                      <span className="text-gray-200 text-[17px] leading-snug font-medium drop-shadow-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
