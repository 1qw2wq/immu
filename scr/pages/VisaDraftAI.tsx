import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const VisaDraftAI: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState('Travel History');

  const steps = [
    { name: 'Personal Information', icon: 'person', status: 'completed' },
    { name: 'Family Details', icon: 'family_restroom', status: 'completed' },
    { name: 'Travel History', icon: 'edit', status: 'active' },
    { name: 'Employment Records', icon: 'lock', status: 'locked' },
    { name: 'Supporting Evidence', icon: 'lock', status: 'locked' },
    { name: 'Signature', icon: 'lock', status: 'locked' },
  ];

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans overflow-hidden">
      {/* Top Header */}
      <header className="h-[72px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-6">
          <button onClick={() => navigate('/dashboard')} className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-slate-100 transition-all">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined">description</span>
             </div>
             <div>
                <h1 className="text-base font-black text-slate-900 dark:text-white leading-tight">VisaDraft AI</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Workspace • Form I-130</p>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-3 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Auto-saved 2m ago</span>
           </div>
           <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-black text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-lg">visibility</span> Preview Draft
           </button>
           <button className="px-8 py-2.5 bg-primary text-white rounded-xl text-sm font-black shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
              Finalize & Export
           </button>
           <div className="w-10 h-10 rounded-full border border-slate-100 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnLL3fM3zXIgLlqn-dq7dABssESdgtibTujp3Tt_yQ4qoFWHlCoRf6u0n9yVMoIkZNSVAcsBxM5hmnEM702rqNuuTbyoNemTwf7IYGy4uJLCa_0AQ5deJNxr2vSjRXYnPS-GxXcclY_3NRNmcXlOEaitxZ88HQzhHTPd7hkknIMEStSVVQUzOpDGcXrAPkhtqlHOH4lV6NjOPZkxt94i-vZRvL9uTywtKKVRTegmHjoBlpktSLQWA93R8zuNRVlHO0fLwWnF3W3LY" className="w-full h-full object-cover" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Progress Sidebar */}
        <aside className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-8 hidden lg:flex flex-col">
          <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-10">Application Progress</h2>
          <nav className="space-y-2">
            {steps.map((step) => (
              <button 
                key={step.name}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-[20px] text-sm font-bold transition-all relative ${
                  step.status === 'active' 
                    ? 'bg-primary/10 text-primary shadow-sm' 
                    : step.status === 'completed' 
                    ? 'text-slate-500' 
                    : 'text-slate-300 pointer-events-none'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  step.status === 'active' ? 'bg-primary text-white' : 
                  step.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'
                }`}>
                  <span className="material-symbols-outlined text-[18px]">
                    {step.status === 'completed' ? 'check' : step.icon}
                  </span>
                </div>
                {step.name}
                {step.status === 'active' && (
                  <div className="absolute left-0 top-4 bottom-4 w-1 bg-primary rounded-r-full"></div>
                )}
              </button>
            ))}
          </nav>
          
          <div className="mt-auto p-8 border-t border-slate-50 dark:border-slate-800 -mx-8">
             <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Completion</span>
                <span className="text-[11px] font-black text-primary">65%</span>
             </div>
             <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[65%] rounded-full"></div>
             </div>
             <p className="mt-4 text-[10px] text-slate-400 font-medium leading-relaxed italic">
                AI is currently drafting your "Travel History" based on your previous responses.
             </p>
          </div>
        </aside>

        {/* Chat Interface */}
        <div className="flex-1 flex flex-col bg-slate-50/50 dark:bg-slate-950/50">
          <div className="flex-1 p-10 overflow-y-auto space-y-10">
            {/* AI Message */}
            <div className="flex gap-6 max-w-3xl">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] rounded-tl-lg shadow-sm border border-slate-100 dark:border-slate-800">
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6 font-medium">
                    I've analyzed your entry for the 2022 London trip. To complete the "Travel History" section, I need a few more details about your previous entries to the United States.
                  </p>
                  <p className="text-slate-900 dark:text-white font-black text-lg mb-0">
                    Have you ever been granted a visa for the United States before?
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                   <button className="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all">Yes, multiple times</button>
                   <button className="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all">Yes, once</button>
                   <button className="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all">No, never</button>
                </div>
              </div>
            </div>

            {/* User Message */}
            <div className="flex gap-6 justify-end">
              <div className="bg-primary p-6 rounded-[32px] rounded-tr-lg shadow-xl shadow-primary/10 text-white font-bold text-base max-w-md">
                Yes, I had a B1/B2 tourist visa issued in 2018.
              </div>
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnLL3fM3zXIgLlqn-dq7dABssESdgtibTujp3Tt_yQ4qoFWHlCoRf6u0n9yVMoIkZNSVAcsBxM5hmnEM702rqNuuTbyoNemTwf7IYGy4uJLCa_0AQ5deJNxr2vSjRXYnPS-GxXcclY_3NRNmcXlOEaitxZ88HQzhHTPd7hkknIMEStSVVQUzOpDGcXrAPkhtqlHOH4lV6NjOPZkxt94i-vZRvL9uTywtKKVRTegmHjoBlpktSLQWA93R8zuNRVlHO0fLwWnF3W3LY" />
              </div>
            </div>

            {/* AI Drafting Progress */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-6 max-w-3xl"
            >
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined animate-spin-slow">auto_awesome</span>
              </div>
              <div className="flex-1 bg-blue-50/50 dark:bg-primary/5 border border-blue-100 dark:border-primary/10 p-8 rounded-[32px] rounded-tl-lg flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-primary mb-1">AI Drafting in Progress</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">I am now populating Section 3: Travel History (Page 5) of your I-130 form with these details.</p>
                </div>
                <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-300">
                  <span className="material-symbols-outlined text-3xl">article</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Input Bar */}
          <div className="p-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="relative group max-w-5xl mx-auto">
              <input 
                type="text" 
                placeholder="Type your answer here..." 
                className="w-full h-16 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-8 pr-16 text-slate-900 dark:text-white font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            <div className="max-w-5xl mx-auto flex items-center justify-between mt-4 px-2">
               <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">attach_file</span> Attach Evidence
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">mic</span> Voice Input
                  </button>
               </div>
               <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Shift + Enter for new line</span>
            </div>
          </div>
        </div>

        {/* Live Preview Sidebar */}
        <aside className="w-[480px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-8 hidden xl:flex flex-col">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Live Document Preview</h2>
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[9px] font-black uppercase tracking-widest">Drafting</span>
           </div>

           <div className="flex-1 bg-slate-100/50 dark:bg-slate-800/30 rounded-[32px] p-10 overflow-hidden relative">
              <div className="bg-white dark:bg-slate-800 w-full h-full shadow-2xl rounded-sm p-12 overflow-hidden flex flex-col scale-[1.02]">
                 <div className="flex justify-between items-start mb-8 text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                    <p>Department of Homeland Security<br/>Petition for Alien Relative</p>
                    <p className="text-right">OMB No. 1615-0012<br/>Expires 07/31/2026</p>
                 </div>
                 
                 <div className="border-t border-b border-slate-900 dark:border-white py-4 mb-8">
                    <div className="flex items-center justify-between">
                       <h3 className="text-[9px] font-black uppercase tracking-widest">Part 1. Relationship</h3>
                       <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                    </div>
                 </div>

                 <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">1. I am filing this petition for</label>
                          <div className="h-6 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded px-2 flex items-center text-[8px] font-bold">Spouse</div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">2. Family Name (Last Name)</label>
                          <div className="h-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded px-2 flex items-center text-[8px] font-bold">Vargas</div>
                       </div>
                    </div>

                    <div className="border-2 border-primary/20 dark:border-primary/40 rounded-lg p-4 bg-blue-50/20">
                       <div className="flex items-center justify-between mb-4">
                          <h3 className="text-[9px] font-black uppercase tracking-widest text-primary">Part 3. Travel History</h3>
                          <span className="material-symbols-outlined text-primary text-sm">edit</span>
                       </div>
                       <div className="h-4 w-full bg-slate-100 dark:bg-slate-700 rounded-full animate-pulse mb-3"></div>
                       <div className="grid grid-cols-3 gap-3">
                          <div className="h-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded"></div>
                          <div className="h-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded"></div>
                          <div className="h-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded"></div>
                       </div>
                    </div>
                 </div>

                 <div className="mt-auto flex flex-col items-center">
                    <span className="material-symbols-outlined text-4xl text-slate-100 dark:text-slate-700 mb-2">article</span>
                    <span className="text-[10px] font-black text-slate-200 dark:text-slate-600 uppercase tracking-[0.3em]">Official Draft</span>
                 </div>
              </div>
           </div>

           <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                 <button className="w-10 h-10 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
                 <button className="w-10 h-10 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Page 5 of 12</span>
           </div>

           <button className="w-full mt-10 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-xl">fullscreen</span> View Fullscreen Preview
           </button>
        </aside>
      </div>
    </div>
  );
};

export default VisaDraftAI;