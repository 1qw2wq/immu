import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MentorSidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/mentor/dashboard' },
    { name: 'Reviews', icon: 'rate_review', path: '/mentor/reviews', count: 5 },
    { name: 'Mentees', icon: 'groups', path: '/mentor/mentees' }, // Placeholder for consistency
    { name: 'Calendar', icon: 'calendar_month', path: '/mentor/schedule' },
    { name: 'Earnings', icon: 'payments', path: '/mentor/earnings' },
    { name: 'Resources', icon: 'folder', path: '/mentor/library' },
    { name: 'Settings', icon: 'settings', path: '/mentor/settings' }, // Placeholder
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 z-40">
      <div className="p-8 flex items-center gap-4">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
            className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 shadow-sm" 
            alt="Sarah Jenkins" 
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="text-base font-black text-slate-900 leading-tight">Sarah Jenkins</h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Senior Mentor</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-sm transition-all group ${
              isActive(item.path)
                ? 'bg-primary/10 text-primary shadow-sm'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <span className={`material-symbols-outlined transition-colors ${
              isActive(item.path) ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
            }`}>
              {item.icon}
            </span>
            {item.name}
            {item.count && (
              <span className={`ml-auto text-[10px] font-black px-2 py-0.5 rounded-full ${
                isActive(item.path) ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {item.count}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="p-8 border-t border-slate-50 space-y-6">
        <Link to="/mentor/help" className="flex items-center gap-4 text-slate-500 font-bold text-sm hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-slate-400">help</span> Help Center
        </Link>
        <Link to="/login" className="flex items-center gap-4 text-slate-400 font-bold text-sm hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined">logout</span> Log Out
        </Link>
      </div>
    </aside>
  );
};

export default MentorSidebar;