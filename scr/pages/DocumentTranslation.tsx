import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const DocumentTranslation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fcfdfe] dark:bg-slate-950 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 md:px-10">
        <header className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div className="flex items-start gap-6">
            <button 
              onClick={() => navigate('/dashboard')} 
              className="mt-1 w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm shrink-0"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <div>
              <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">AI Document Translation</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
                High-accuracy, USCIS-compliant automated translation for immigration filings. Certified legal accuracy powered by advanced AI.
              </p>
            </div>
          </div>
          <div className="flex gap-4 self-end md:self-auto">
            <button className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-black text-slate-600 dark:text-slate-300 flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-xl">history</span> View History
            </button>
            <button className="px-8 py-3 bg-primary text-white rounded-2xl text-sm font-black flex items-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all">
              <span className="material-symbols-outlined text-xl">add</span> New Translation
            </button>
          </div>
        </header>

        {/* Progress Bar Section */}
        <section className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm mb-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">AI Translation in progress...</span>
            </div>
            <span className="text-sm font-black text-primary">65% Completed</span>
          </div>
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(19,127,236,0.5)]"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            {['SCANNING DOCUMENT', 'CONTEXTUAL ANALYSIS', 'TRANSLATING', 'FORMATTING OUTPUT'].map((step, i) => (
              <div key={step}>
                <p className={`text-[9px] font-black uppercase tracking-[0.15em] ${i < 2 ? 'text-primary' : i === 2 ? 'text-primary animate-pulse' : 'text-slate-300 dark:text-slate-600'}`}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {/* Original */}
          <div className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">description</span>
                <h2 className="text-lg font-black text-slate-900 dark:text-white">Original Document</h2>
              </div>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest">Source</span>
            </div>
            <div className="flex-1 p-10 flex flex-col items-center justify-center">
              <div className="w-full max-w-md aspect-[3/4] border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[32px] bg-slate-50/50 dark:bg-slate-800/30 flex flex-col items-center justify-center text-center p-12 group hover:border-primary/50 transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Upload Original Document</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-xs leading-relaxed">
                  Drag and drop your birth certificate, passport, or official record here.
                </p>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">PDF, JPG, PNG (Max 10MB)</div>
                <button className="px-10 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl font-black text-sm text-slate-900 dark:text-white hover:bg-slate-50 transition-colors shadow-sm">Select File</button>
              </div>
            </div>
          </div>

          {/* Translated */}
          <div className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">translate</span>
                <h2 className="text-lg font-black text-slate-900 dark:text-white">Translated Version</h2>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors"><span className="material-symbols-outlined">print</span></button>
                <button className="px-6 py-2 bg-primary text-white rounded-xl text-xs font-black shadow-lg shadow-primary/20 flex items-center gap-2"><span className="material-symbols-outlined text-sm">download</span> Download PDF</button>
              </div>
            </div>
            
            <div className="p-8 bg-slate-50/30 dark:bg-slate-900/50 border-b border-slate-50 dark:border-slate-800">
               <div className="grid grid-cols-2 gap-8 items-center">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Source</label>
                    <div className="relative">
                      <select className="w-full h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 text-xs font-bold dark:text-white outline-none appearance-none">
                        <option>Spanish (ES)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">expand_more</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Target</label>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 relative">
                        <select className="w-full h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 text-xs font-bold dark:text-white outline-none appearance-none">
                          <option>English (US)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">expand_more</span>
                      </div>
                      <button className="h-12 px-6 bg-blue-50 dark:bg-blue-900/20 text-primary border border-primary/20 rounded-xl text-xs font-black hover:bg-primary hover:text-white transition-all">Retranslate</button>
                    </div>
                  </div>
               </div>
            </div>

            <div className="flex-1 p-10 overflow-y-auto">
               <div className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 p-16 font-serif">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold uppercase mb-1">Certificate of Live Birth</h2>
                    <p className="text-xs text-slate-400">Official Translation - Record No. 29481-B</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-12 gap-y-10 text-sm">
                    <div className="space-y-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</p>
                      <p className="font-bold uppercase">Alejandro Rodriguez Garcia</p>
                    </div>
                    <div className="space-y-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date of Birth</p>
                      <p className="font-bold uppercase">March 14, 1992</p>
                    </div>
                    <div className="space-y-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Place of Birth</p>
                      <p className="font-bold uppercase">Madrid, Spain</p>
                    </div>
                    <div className="space-y-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sex</p>
                      <p className="font-bold uppercase">Male</p>
                    </div>
                    <div className="col-span-2 space-y-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Father's Name</p>
                      <p className="font-bold uppercase">Manuel Rodriguez Santos</p>
                    </div>
                    <div className="col-span-2 space-y-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mother's Name</p>
                      <p className="font-bold uppercase">Elena Garcia Lopez</p>
                    </div>
                  </div>

                  <div className="mt-20 flex justify-between items-end border-t border-slate-100 dark:border-slate-700 pt-8">
                     <div className="text-[10px] text-slate-400 font-bold uppercase space-y-1">
                        <p>Digital Signature ID: AI-283-921-X</p>
                        <p>Certified by ImmigrationPortal AI Service</p>
                     </div>
                     <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center grayscale opacity-30">
                        <span className="material-symbols-outlined text-4xl">qr_code_2</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Verification Banner */}
        <section className="bg-blue-50/50 dark:bg-primary/5 rounded-[40px] border border-blue-100 dark:border-primary/10 p-10 flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined text-4xl">verified_user</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Verify with Human Expert</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
              Add an extra layer of security. Our legal experts will review your AI translation to ensure 100% USCIS acceptance. Includes a signed Certification of Translation Accuracy.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl flex items-center gap-10 min-w-[320px]">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Optional Add-on</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-primary">$24.99</span>
                <span className="text-xs font-bold text-slate-400">/ document</span>
              </div>
            </div>
            <div className="w-14 h-8 bg-slate-100 dark:bg-slate-800 rounded-full relative p-1 cursor-pointer">
              <div className="absolute right-1 top-1 w-6 h-6 bg-primary rounded-full shadow-md"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 dark:border-slate-800 py-10 px-10 flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-widest">
         <p>© 2024 Immigration Portal AI. All rights reserved.</p>
         <div className="flex gap-10 mt-6 md:mt-0">
            <button className="hover:text-primary transition-colors">Compliance Policy</button>
            <button className="hover:text-primary transition-colors">Privacy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
         </div>
      </footer>
    </div>
  );
};

export default DocumentTranslation;