import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ImmigrantStep2: React.FC = () => {
  const navigate = useNavigate();
  const [funds, setFunds] = useState('50,000');

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
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Step 2 of 3</span>
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Financials</span>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full mb-12 overflow-hidden">
            <div className="h-full w-2/3 bg-primary rounded-full shadow-[0_0_8px_rgba(19,127,236,0.4)]"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] border border-slate-200 shadow-sm p-10 md:p-14"
          >
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Financial Assessment</h1>
            <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed">To better match you with visa opportunities, we need to understand your available liquid capital.</p>

            <div className="mb-12">
              <label className="block text-[11px] font-black text-slate-900 mb-3 uppercase tracking-widest">Total Liquid Capital (USD)</label>
              <p className="text-xs text-slate-400 mb-6 italic font-medium">Include savings, checking, and stocks that can be sold quickly.</p>
              <div className="relative group">
                <span className="absolute left-8 top-1/2 -translate-y-1/2 text-3xl text-slate-300 transition-colors group-focus-within:text-primary">$</span>
                <input 
                  type="text" 
                  value={funds} 
                  onChange={(e) => setFunds(e.target.value)}
                  className="w-full h-24 bg-slate-50/50 border border-slate-200 rounded-[28px] px-14 text-4xl font-black text-slate-900 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                />
                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400 uppercase tracking-widest">USD</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50/30 p-8 rounded-3xl border border-blue-100 group hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">lock</span>
                  <span className="font-black text-[10px] uppercase tracking-[0.2em]">Data Privacy</span>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">Your financial data is encrypted and never shared without permission.</p>
              </div>
              <div className="bg-blue-50/30 p-8 rounded-3xl border border-blue-100 group hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">calculate</span>
                  <span className="font-black text-[10px] uppercase tracking-[0.2em]">Visa Impact</span>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">Liquid capital is a key factor for many skilled worker and investment visas.</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-slate-50">
              <button 
                onClick={() => navigate('/register/immigrant/step1')} 
                className="flex items-center gap-2 text-slate-400 font-black text-sm hover:text-slate-900 transition-colors px-4 uppercase tracking-widest"
              >
                <span className="material-symbols-outlined text-xl">arrow_back</span>
                Back
              </button>
              <button 
                onClick={() => navigate('/register/immigrant/step3')} 
                className="px-12 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center gap-3 transform active:scale-95"
              >
                Next Step
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </motion.div>
          
          <div className="text-center mt-12">
            <button className="text-sm text-primary font-black uppercase tracking-widest hover:underline transition-all">
              Need help? Read our financial guide
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImmigrantStep2;