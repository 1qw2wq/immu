import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MentorRegistration: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Correctly redirect to the Mentor Workspace after registration
    navigate('/mentor/dashboard');
  };

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <button 
              onClick={() => navigate('/onboarding')}
              className="flex items-center gap-2 text-slate-400 font-black text-sm hover:text-primary transition-colors uppercase tracking-widest group"
            >
              <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">arrow_back</span>
              Back to role selection
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden"
          >
            <div className="bg-primary/5 p-10 text-center border-b border-slate-50">
              <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Become a Mentor</h1>
              <p className="text-slate-500 font-medium">Help others navigate their new journey with your expertise.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-10 md:p-14 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">First Name</label>
                  <input type="text" defaultValue="Sarah" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" required />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Last Name</label>
                  <input type="text" defaultValue="Jenkins" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" required />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Professional Title</label>
                <input type="text" defaultValue="Senior Immigration Consultant" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" required />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Company / Organization</label>
                <input type="text" defaultValue="ImmiGuide Global" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Origin Country</label>
                  <div className="relative">
                    <select className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-6 font-medium text-slate-900 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-primary/10 focus:border-primary" defaultValue="Canada">
                      <option>Select Country</option>
                      <option value="Canada">Canada</option>
                      <option>India</option>
                      <option>China</option>
                      <option>Mexico</option>
                      <option>Philippines</option>
                      <option>Nigeria</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Years in Current Country</label>
                  <input type="number" defaultValue="8" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest block">Areas of Mentorship</label>
                <div className="flex flex-wrap gap-3">
                  {['Career Advice', 'Housing', 'Language', 'Legal', 'Social Life'].map((tag) => (
                    <label key={tag} className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="hidden peer" defaultChecked={['Legal', 'Career Advice'].includes(tag)} />
                      <span className="px-5 py-2 rounded-full text-xs font-bold border border-slate-200 bg-white text-slate-500 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all shadow-sm">
                        {tag}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-50">
                <button type="submit" className="w-full py-5 bg-primary text-white rounded-2xl font-black text-base shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all transform active:scale-95">
                  Complete Registration & Enter Workspace
                </button>
              </div>
            </form>
          </motion.div>
          <p className="text-center mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">© 2024 Immigrant Mentorship Inc. Secure & Encrypted.</p>
        </div>
      </main>
    </div>
  );
};

export default MentorRegistration;