import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginRole, setLoginRole] = useState<'mentee' | 'mentor'>('mentee');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate navigation based on selected role
    if (loginRole === 'mentor') {
      navigate('/mentor/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] dark:bg-background-dark px-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mb-8"
      >
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 font-black text-sm hover:text-primary transition-colors uppercase tracking-widest group"
        >
          <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">arrow_back</span>
          Back to home
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white dark:bg-[#1a2632] p-10 rounded-[40px] shadow-xl border border-slate-200 dark:border-slate-700"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 mb-6">
            <span className="material-symbols-outlined text-3xl font-bold">flight_takeoff</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">Welcome back</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Sign in to your account</p>
        </div>

        {/* Role Switcher */}
        <div className="flex p-1.5 bg-slate-50 dark:bg-slate-800 rounded-2xl mb-10 border border-slate-100 dark:border-slate-700">
          <button 
            onClick={() => setLoginRole('mentee')}
            className={`flex-1 py-3 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all ${loginRole === 'mentee' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-400'}`}
          >
            Immigrant
          </button>
          <button 
            onClick={() => setLoginRole('mentor')}
            className={`flex-1 py-3 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all ${loginRole === 'mentor' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-400'}`}
          >
            Mentor
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-900 dark:text-slate-300 uppercase tracking-widest">Email Address</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">mail</span>
              <input 
                type="email" 
                className="w-full h-14 pl-12 pr-6 rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                placeholder="you@example.com"
                required 
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-900 dark:text-slate-300 uppercase tracking-widest">Password</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">lock</span>
              <input 
                type="password" 
                className="w-full h-14 pl-12 pr-6 rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                placeholder="••••••••"
                required 
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded-md border-slate-300 text-primary focus:ring-primary" />
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Remember me</span>
            </label>
            <button type="button" className="text-primary hover:underline text-xs font-black uppercase tracking-widest">Forgot password?</button>
          </div>
          <button 
            type="submit"
            className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-base transition-all shadow-2xl shadow-primary/25 transform active:scale-95"
          >
            Sign In
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-slate-50 dark:border-slate-700 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Don't have an account?{' '}
            <Link to="/onboarding" className="text-primary hover:underline font-black uppercase tracking-widest text-xs">Sign up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;