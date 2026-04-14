import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ImmigrantStep3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="px-6 md:px-16 py-6 border-b border-slate-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-xl">diversity_2</span>
            </div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Immigrant Mentorship</h2>
        </div>
        <div className="w-8"></div>
      </header>
      
      <main className="flex-1 flex flex-col items-center pt-16 px-4 pb-20">
        <div className="w-full max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Step 3 of 3</span>
            <span className="text-[11px] font-black text-green-500 uppercase tracking-[0.2em]">Final Step</span>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full mb-12 overflow-hidden">
            <div className="h-full w-full bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] border border-slate-200 shadow-sm p-10 md:p-14"
          >
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Set your goals</h1>
            <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed">Tell us where you're heading and what you love doing to help us find your perfect mentor match.</p>

            <div className="space-y-10">
               <div>
                  <label className="block text-[11px] font-black text-slate-900 mb-4 uppercase tracking-widest">Destination Country</label>
                  <div className="relative">
                    <select className="w-full h-16 bg-slate-50 border border-slate-200 rounded-2xl px-6 font-bold text-slate-900 outline-none appearance-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all cursor-pointer">
                      <option>Select a country</option>
                      <option>Canada</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Germany</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">expand_more</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">info</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider">We'll connect you with mentors in this region.</span>
                  </div>
               </div>

               <div>
                  <label className="block text-[11px] font-black text-slate-900 mb-4 uppercase tracking-widest">Hobbies & Interests</label>
                  <div className="relative">
                    <textarea 
                      placeholder="e.g., Photography, Hiking, Coding, Learning new languages..." 
                      className="w-full h-40 bg-slate-50 border border-slate-200 rounded-2xl p-6 font-medium text-slate-900 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary resize-none transition-all"
                    ></textarea>
                    <span className="material-symbols-outlined absolute bottom-4 right-4 text-slate-200">drag_handle</span>
                  </div>
                  <p className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sharing your interests helps find mentors with similar passions.</p>
               </div>
            </div>

            <div className="flex items-center justify-between mt-14 pt-8 border-t border-slate-50">
              <button 
                onClick={() => navigate('/register/immigrant/step2')} 
                className="font-black text-slate-400 hover:text-slate-900 transition-colors px-6 uppercase tracking-widest text-sm"
              >
                Back
              </button>
              <button 
                onClick={() => navigate('/dashboard')} 
                className="px-12 py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 transform active:scale-95"
              >
                Submit Application
                <span className="material-symbols-outlined text-xl">check_circle</span>
              </button>
            </div>
          </motion.div>
          <p className="text-center mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">© 2024 Immigrant Mentorship Inc. Secure & Encrypted.</p>
        </div>
      </main>
    </div>
  );
};

export default ImmigrantStep3;