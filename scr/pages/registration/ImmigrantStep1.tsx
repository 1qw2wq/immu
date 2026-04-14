import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ImmigrantStep1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="px-6 md:px-16 py-6 flex items-center justify-between bg-white border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-xl">diversity_2</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Immigrant Mentorship</h2>
        </div>
        <button 
          onClick={() => navigate('/onboarding')}
          className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
          Exit
        </button>
      </header>
      
      <main className="flex-1 flex flex-col items-center pt-16 px-4 pb-20">
        <div className="w-full max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Step 1 of 3</span>
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Personal Details</span>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full mb-12 overflow-hidden">
            <div className="h-full w-1/3 bg-primary rounded-full shadow-[0_0_8px_rgba(19,127,236,0.4)]"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] border border-slate-200 shadow-sm p-10 md:p-14"
          >
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Let's get to know you</h1>
            <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed">We need a few details to understand your background and find the right mentorship match for you.</p>

            <form onSubmit={(e) => { e.preventDefault(); navigate('/register/immigrant/step2'); }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] font-black text-slate-900 mb-3 uppercase tracking-widest">First Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">person</span>
                    <input type="text" placeholder="e.g. Alejandro" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-medium" required />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-black text-slate-900 mb-3 uppercase tracking-widest">Last Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">person</span>
                    <input type="text" placeholder="e.g. Vargas" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-medium" required />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black text-slate-900 mb-3 uppercase tracking-widest">Nationality</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">public</span>
                  <select className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-10 text-slate-900 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none appearance-none font-medium cursor-pointer" required>
                    <option value="">Select your country of citizenship</option>
                    <option>India</option>
                    <option>China</option>
                    <option>Philippines</option>
                    <option>Mexico</option>
                    <option>Brazil</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <button type="button" onClick={() => navigate('/onboarding')} className="text-slate-400 font-black text-sm hover:text-slate-900 transition-colors px-4 uppercase tracking-widest">Cancel</button>
                <button type="submit" className="px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center gap-3 transform active:scale-95">
                  Continue
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ImmigrantStep1;