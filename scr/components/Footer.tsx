import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 space-y-6">
            <Link to="/dashboard" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl font-bold">diversity_2</span>
              <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">ImmiGuide</h2>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Your trusted companion for every step of your international journey, connecting you with expertise and community.
            </p>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">Community</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/mentors" className="hover:text-primary transition-colors">Mentorship</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors">Social Feed</Link></li>
              <li><Link to="/discussions" className="hover:text-primary transition-colors">Discussions</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">Resources</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/resources" className="hover:text-primary transition-colors">Q&A Help</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">Latest News</Link></li>
              <li><Link to="/culture" className="hover:text-primary transition-colors">Culture & Events</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">Support</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><button className="hover:text-primary transition-colors text-left">Help Center</button></li>
              <li><button className="hover:text-primary transition-colors text-left">Terms of Service</button></li>
              <li><button className="hover:text-primary transition-colors text-left">Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 font-medium">© 2024 ImmiGuide Global. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">public</span></button>
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">share</span></button>
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">mail</span></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;