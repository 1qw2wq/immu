import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'mentor' | 'immigrant' | null>(null);

  const handleContinue = () => {
    if (selectedRole === 'mentor') {
      navigate('/register/mentor');
    } else if (selectedRole === 'immigrant') {
      navigate('/register/immigrant/step1');
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f8fafc] dark:bg-background-dark font-display">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-16 bg-white dark:bg-[#111a22] border-b border-slate-100 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
            <span className="material-symbols-outlined text-xl font-bold">flight_takeoff</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-50 text-lg font-black leading-tight tracking-tight">
            Immigration Platform
          </h2>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="hidden sm:block text-sm text-slate-500 dark:text-slate-400">Already a member?</span>
          <button 
            onClick={() => navigate('/login')}
            className="text-primary text-sm font-black uppercase tracking-widest hover:underline"
          >
            Log In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-5xl"
        >
          {/* Back Button */}
          <motion.button 
            variants={item}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-primary font-black text-sm transition-colors mb-12 group uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to home
          </motion.button>

          <div className="text-center space-y-12">
            {/* Title Section */}
            <motion.div variants={item} className="space-y-4">
              <h1 className="text-4xl md:text-[64px] font-black text-[#0f172a] dark:text-white leading-[1.1] tracking-tight">
                How will you use our platform?
              </h1>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                Select your role to get started with your personalized journey. We'll tailor the experience to your needs.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mentor Card */}
              <div 
                onClick={() => setSelectedRole('mentor')}
                className={`group relative cursor-pointer flex flex-col items-center p-12 rounded-[40px] border-4 transition-all duration-300 text-center space-y-8 ${
                  selectedRole === 'mentor' 
                  ? 'bg-white dark:bg-[#1a2632] border-primary shadow-2xl shadow-primary/10 scale-[1.02]' 
                  : 'bg-white dark:bg-[#1a2632] border-transparent shadow-sm hover:shadow-xl hover:border-slate-100 dark:hover:border-slate-800'
                }`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-[#475569] dark:text-slate-400 transition-colors group-hover:bg-primary/5 group-hover:text-primary">
                  <span className="material-symbols-outlined text-[48px]">school</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-[#0f172a] dark:text-white">I am an Immigration Mentor</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-[320px] font-medium">
                    I want to share my experience, offer guidance, and help newcomers navigate their journey successfully.
                  </p>
                </div>
                <ul className="text-left space-y-4 pt-4 w-full max-w-[240px] mx-auto">
                  <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                    Build your network
                  </li>
                  <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                    Earn recognition badges
                  </li>
                  <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                    Give back to the community
                  </li>
                </ul>
              </div>

              {/* Immigrant Card */}
              <div 
                onClick={() => setSelectedRole('immigrant')}
                className={`group relative cursor-pointer flex flex-col items-center p-12 rounded-[40px] border-4 transition-all duration-300 text-center space-y-8 ${
                  selectedRole === 'immigrant' 
                  ? 'bg-white dark:bg-[#1a2632] border-primary shadow-2xl shadow-primary/10 scale-[1.02]' 
                  : 'bg-white dark:bg-[#1a2632] border-transparent shadow-sm hover:shadow-xl hover:border-slate-100 dark:hover:border-slate-800'
                }`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-[#475569] dark:text-slate-400 transition-colors group-hover:bg-primary/5 group-hover:text-primary">
                  <span className="material-symbols-outlined text-[48px]">public</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-[#0f172a] dark:text-white">I am planning to immigrate</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-[320px] font-medium">
                    I am looking for advice, local insights, and mentorship to make my move smoother and less stressful.
                  </p>
                </div>
                <ul className="text-left space-y-4 pt-4 w-full max-w-[240px] mx-auto">
                  <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                    Connect with locals
                  </li>
                  <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                    Get personalized checklists
                  </li>
                  <li className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                    Find community events
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Action Section */}
            <motion.div variants={item} className="flex flex-col items-center space-y-6 pt-8">
              <button 
                onClick={handleContinue}
                disabled={!selectedRole}
                className={`group flex items-center justify-center gap-3 w-full max-w-md py-5 rounded-2xl font-black text-lg transition-all transform active:scale-95 ${
                  selectedRole 
                  ? 'bg-primary text-white shadow-2xl shadow-primary/30 hover:-translate-y-1' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Continue
                <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Not sure? <button onClick={() => navigate('/how-it-works')} className="text-primary hover:underline">See how it works</button>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Decorative Wave */}
      <div className="mt-auto pointer-events-none opacity-40 dark:opacity-10 shrink-0">
        <svg viewBox="0 0 1440 200" className="w-full h-auto">
          <path fill="#137fec" fillOpacity="0.08" d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,138.7C840,149,960,139,1080,117.3C1200,96,1320,64,1380,48L1440,32L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default RoleSelection;