import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CommunitySubNav: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Mentors', path: '/mentors' },
    { name: 'Q&A', path: '/resources' },
    { name: 'Social Feed', path: '/community' },
    { name: 'Homestay', path: '/groups' },
    { name: 'Discussions', path: '/discussions' }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-[72px] z-40 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          {tabs.map(tab => {
            const isActive = location.pathname === tab.path;
            return (
              <Link 
                key={tab.path}
                to={tab.path} 
                className={`relative px-2 py-5 text-sm font-bold transition-all ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.name}
                {isActive && (
                  <div className="absolute bottom-[-1px] left-0 right-0 h-[2.5px] bg-primary rounded-t-full shadow-[0_-2px_8px_rgba(19,127,236,0.3)]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunitySubNav;