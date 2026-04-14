import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CommunitySubNav from '../components/CommunitySubNav';
import { motion, AnimatePresence } from 'framer-motion';

const PaymentModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl p-12 text-center overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <h2 className="text-3xl font-black text-slate-900 mb-8">Complete Your Request</h2>
            
            <div className="mb-10 p-1 bg-slate-50 border-2 border-dashed border-primary/20 rounded-[48px] inline-block">
               <div className="w-64 h-80 bg-[#1e4a4a] rounded-[40px] flex items-center justify-center relative overflow-hidden">
                  <div className="w-40 h-40 bg-white rounded-3xl p-4 flex items-center justify-center">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ImmiGuidePayment" className="w-full h-full grayscale opacity-80" alt="QR Code" />
                  </div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] font-black text-white/40 tracking-[0.2em] uppercase">Payment Token No</div>
               </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-4 font-bold">
              Scan the QR code with your banking app to proceed.
            </p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-10">
              Supported: PayPal, Stripe, Bank Transfer
            </p>

            <div className="bg-blue-50/50 py-3 px-6 rounded-full inline-flex items-center gap-2 mb-10">
               <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
               <span className="text-xs font-black text-primary uppercase tracking-widest">3 Free Trials Remaining</span>
            </div>

            <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-base shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 mb-6">
               <span className="material-symbols-outlined text-[22px]">upload</span> Upload Proof of Payment
            </button>

            <button onClick={onClose} className="text-slate-400 font-bold text-xs hover:text-slate-900 transition-colors">Cancel transaction</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const MentorsDirectory: React.FC = () => {
  const [showPayment, setShowPayment] = useState(false);
  const mentors = [
    { id: 1, name: "Elena Rodriguez", role: "Senior Product Manager", company: "TechGlobal Inc.", countryCode: "US", tags: ["TECH", "SPANISH"], image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
    { id: 2, name: "David Chen", role: "Financial Analyst", company: "Maple Bank", countryCode: "CA", tags: ["FINANCE", "MANDARIN"], image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
    { id: 3, name: "Sarah Johnson", role: "UX Designer", company: "Creative Agency London", countryCode: "GB", tags: ["DESIGN", "FRENCH"], image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150" },
    { id: 4, name: "Klaus Müller", role: "Civil Engineer", company: "BuildStrong GmbH", countryCode: "DE", tags: ["ENG", "GERMAN"], image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
    { id: 5, name: "Priya Patel", role: "Data Scientist", company: "DataCorp Sydney", countryCode: "AU", tags: ["DATA", "HINDI"], image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" },
    { id: 6, name: "Michael Ross", role: "Marketing Director", company: "Startup Hub", countryCode: "US", tags: ["MKTG", "ENGLISH"], image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=150" },
    { id: 7, name: "Amara Okafor", role: "Fashion Consultant", company: "Paris Mode", countryCode: "FR", tags: ["FASHION", "FRENCH"], image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" },
    { id: 8, name: "Hiroshi Tanaka", role: "Software Architect", company: "Tokyo Tech", countryCode: "JP", tags: ["TECH", "JAPANESE"], image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 flex flex-col font-sans">
      <Navbar />
      <CommunitySubNav />
      
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10 w-full flex-1">
        <header className="mb-10">
          <h1 className="text-[40px] font-black text-slate-900 dark:text-white mb-2 tracking-tight">Expert Mentors</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl leading-relaxed font-medium">
            Connect with experienced professionals who have successfully navigated the immigration journey you're on.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="bg-slate-100/60 dark:bg-slate-900/50 rounded-[28px] p-6 flex flex-col lg:flex-row items-center gap-4 mb-12 border border-slate-200/50 dark:border-slate-800 shadow-sm backdrop-blur-sm">
          <div className="relative flex-1 w-full group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            <input 
              type="text" 
              placeholder="Search by name, company, or job title..." 
              className="w-full h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none dark:text-white transition-all shadow-sm" 
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <div className="relative">
              <select className="h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 pr-10 text-sm font-black text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none appearance-none cursor-pointer min-w-[160px] shadow-sm">
                <option>All Countries</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
            <div className="relative">
              <select className="h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 pr-10 text-sm font-black text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none appearance-none cursor-pointer min-w-[140px] shadow-sm">
                <option>Industry</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
            <button className="h-14 flex items-center gap-2 text-sm font-black text-primary px-6 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all shadow-sm">
              <span className="material-symbols-outlined text-xl">tune</span>
              Advanced Filters
            </button>
          </div>
        </div>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mentors.map((mentor, i) => (
            <motion.div 
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-slate-900 rounded-[36px] border border-slate-100 dark:border-slate-800 shadow-sm p-8 flex flex-col items-center text-center relative hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <button className="absolute top-6 right-6 text-slate-200 dark:text-slate-700 hover:text-red-500 dark:hover:text-red-500 transition-all transform hover:scale-110">
                <span className="material-symbols-outlined text-[28px]">favorite</span>
              </button>
              
              <div className="relative mb-8 pt-2">
                <div className="w-32 h-32 rounded-full overflow-hidden border-[6px] border-slate-50 dark:border-slate-800 shadow-sm group-hover:border-primary/5 transition-all">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-white dark:bg-slate-700 shadow-lg border-2 border-slate-50 dark:border-slate-800 flex items-center justify-center text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                  {mentor.countryCode}
                </div>
              </div>

              <div className="flex items-center gap-1.5 mb-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{mentor.name}</h3>
                <span className="material-symbols-outlined text-primary text-[22px] fill-current">check_circle</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-bold text-sm mb-1 leading-tight">{mentor.role}</p>
              <p className="text-slate-400 dark:text-slate-500 text-xs font-medium mb-6 italic">@ {mentor.company}</p>

              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {mentor.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-blue-50 dark:bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-widest border border-primary/5">{tag}</span>
                ))}
              </div>

              <div className="flex gap-3 w-full mt-auto">
                <button 
                  onClick={() => setShowPayment(true)}
                  className="flex-1 h-14 bg-primary text-white text-sm font-black rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 transform active:scale-95"
                >
                  Hire
                </button>
                <button className="w-14 h-14 flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all transform active:scale-95 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pb-20">
          <button className="flex items-center gap-3 px-10 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white font-black text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm transform active:scale-95">
            Load More Mentors
            <span className="material-symbols-outlined text-xl">expand_more</span>
          </button>
        </div>
      </main>

      <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} />
    </div>
  );
};

export default MentorsDirectory;