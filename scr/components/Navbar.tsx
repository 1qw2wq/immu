import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isCommunityActive = 
    location.pathname.startsWith('/mentors') || 
    location.pathname.startsWith('/community') || 
    location.pathname.startsWith('/resources') || 
    location.pathname.startsWith('/groups') || 
    location.pathname.startsWith('/discussions');

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between bg-white dark:bg-slate-900 px-6 md:px-10 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all">
      <div className="flex items-center gap-10">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl font-bold">flight_takeoff</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Immigration Platform</h2>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            to="/dashboard" 
            className={`text-sm font-bold transition-all hover:text-primary ${isActive('/dashboard') ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/mentors" 
            className={`text-sm font-bold transition-all hover:text-primary ${
              isCommunityActive ? 'text-primary' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            Community
          </Link>
          <Link 
            to="/documents" 
            className={`text-sm font-bold transition-all hover:text-primary ${isActive('/documents') ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            Documents
          </Link>
          <Link 
            to="/messages" 
            className={`text-sm font-bold transition-all hover:text-primary ${isActive('/messages') ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            Messages
          </Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-primary transition-colors">search</span>
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-11 w-72 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-10 pr-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none dark:text-white transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <Link 
            to="/notifications" 
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all relative ${
              isActive('/notifications') 
                ? 'text-primary bg-primary/5' 
                : 'text-slate-400 dark:text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-symbols-outlined text-[26px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </Link>
          <Link to="/profile" className="ml-2">
            <div className="h-10 w-10 overflow-hidden rounded-xl border-2 border-slate-100 dark:border-slate-700 hover:border-primary transition-all">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="User" className="h-full w-full object-cover" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;