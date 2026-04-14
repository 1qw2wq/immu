import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: number;
  type: 'mentorship' | 'document' | 'message' | 'community' | 'system';
  title: string;
  description: string;
  time: string;
  isRead: boolean;
  avatar?: string;
  icon?: string;
  color?: string;
  link?: string;
}

const Notifications: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const categories = [
    { name: 'All', icon: 'notifications_none' },
    { name: 'Unread', icon: 'mark_email_unread' },
    { name: 'Mentorship', icon: 'school' },
    { name: 'Documents', icon: 'description' },
    { name: 'Community', icon: 'groups' }
  ];

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'message',
      title: 'New message from Elena Rodriguez',
      description: '"The visa docs look good! I\'ve reviewed the latest version..."',
      time: 'JUST NOW',
      isRead: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      link: '/messages'
    },
    {
      id: 2,
      type: 'document',
      title: 'Document Verified',
      description: 'Your Valid Passport has been successfully verified by the compliance team.',
      time: '2H AGO',
      isRead: false,
      icon: 'verified_user',
      color: 'bg-green-100 text-green-600',
      link: '/documents'
    },
    {
      id: 3,
      type: 'community',
      title: 'New reply in "Housing in Toronto"',
      description: 'Sarah Miller replied: "I highly recommend checking out North York for newcomers..."',
      time: '5H AGO',
      isRead: true,
      icon: 'forum',
      color: 'bg-blue-100 text-blue-600',
      link: '/discussions'
    },
    {
      id: 4,
      type: 'mentorship',
      title: 'Session Reminder',
      description: 'Your 1-on-1 strategy call with David Chen starts in 1 hour.',
      time: '1H AGO',
      isRead: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      link: '/dashboard'
    },
    {
      id: 5,
      type: 'system',
      title: 'Policy Update Alert',
      description: 'New fast-track PR stream announced for healthcare workers. Read the full details.',
      time: '1D AGO',
      isRead: true,
      icon: 'gavel',
      color: 'bg-amber-100 text-amber-600',
      link: '/news'
    },
    {
      id: 6,
      type: 'community',
      title: 'Post Liked',
      description: 'Raj Patel and 12 others liked your post in the Social Feed.',
      time: '2D AGO',
      isRead: true,
      icon: 'favorite',
      color: 'bg-red-100 text-red-600',
      link: '/community'
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'All') return true;
    if (filter === 'Unread') return !n.isRead;
    return n.type === filter.toLowerCase();
  });

  return (
    <div className="h-screen bg-[#f8fafc] dark:bg-background-dark flex flex-col overflow-hidden font-sans">
      <Navbar />

      <main className="flex-1 flex overflow-hidden w-full">
        {/* Left Sidebar */}
        <aside className="w-80 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-slate-900 shrink-0">
          <div className="p-8">
            <h1 className="text-xl font-black text-slate-900 dark:text-white mb-8">Notification Center</h1>
            <nav className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setFilter(cat.name)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all group ${
                    filter === cat.name
                      ? 'bg-primary/10 text-primary shadow-sm'
                      : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className={`material-symbols-outlined text-xl ${
                    filter === cat.name ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {cat.icon}
                  </span>
                  {cat.name}
                  {cat.name === 'Unread' && notifications.filter(n => !n.isRead).length > 0 && (
                    <span className="ml-auto bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                      {notifications.filter(n => !n.isRead).length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8 mt-auto border-t border-slate-50 dark:border-slate-800">
             <div className="bg-blue-50 dark:bg-primary/5 p-6 rounded-3xl">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Pro Tip</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Enable browser notifications to stay updated on visa status changes in real-time.
                </p>
                <button className="mt-4 text-xs font-black text-primary hover:underline uppercase tracking-widest">
                  Enable Now
                </button>
             </div>
          </div>
        </aside>

        {/* Main Notifications List */}
        <div className="flex-1 flex flex-col bg-slate-50/20 dark:bg-slate-950/20 overflow-hidden relative">
          <header className="h-[72px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
               <h2 className="text-sm font-black text-slate-900 dark:text-white">{filter} Notifications</h2>
               <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-400 font-black px-2.5 py-1 rounded-full">{filteredNotifications.length}</span>
            </div>
            <div className="flex items-center gap-4">
               <button 
                 onClick={markAllAsRead}
                 className="text-xs font-black text-primary hover:underline uppercase tracking-widest"
               >
                 Mark all as read
               </button>
               <button className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                 <span className="material-symbols-outlined text-xl">settings</span>
               </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="max-w-4xl mx-auto p-10 space-y-12">
               
               {/* Today Group */}
               <div>
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Today</h3>
                  <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                      {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((n, i) => (
                          <motion.div
                            key={n.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => n.link && navigate(n.link)}
                            className={`group relative p-6 rounded-[32px] border transition-all cursor-pointer overflow-hidden ${
                              n.isRead 
                                ? 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-70 hover:opacity-100' 
                                : 'bg-white dark:bg-slate-900 border-primary/20 shadow-lg shadow-primary/5 ring-1 ring-primary/5'
                            }`}
                          >
                            {!n.isRead && (
                              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
                            )}
                            
                            <div className="flex items-start gap-6">
                              <div className="shrink-0">
                                {n.avatar ? (
                                  <img src={n.avatar} className="w-12 h-12 rounded-2xl object-cover shadow-sm" alt="Avatar" />
                                ) : (
                                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${n.color || 'bg-slate-100 text-slate-400'}`}>
                                    <span className="material-symbols-outlined text-2xl">{n.icon}</span>
                                  </div>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                  <h4 className="text-base font-black text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{n.title}</h4>
                                  <span className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest whitespace-nowrap ml-4">{n.time}</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                  {n.description}
                                </p>
                              </div>
                              <div className="flex flex-col gap-2">
                                <button className="w-8 h-8 flex items-center justify-center text-slate-200 hover:text-slate-400 transition-colors opacity-0 group-hover:opacity-100">
                                  <span className="material-symbols-outlined text-lg">close</span>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center text-slate-200 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                                  <span className="material-symbols-outlined text-lg">more_horiz</span>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="py-24 text-center">
                           <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                             <span className="material-symbols-outlined text-4xl text-slate-300">notifications_off</span>
                           </div>
                           <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">All caught up!</h3>
                           <p className="text-slate-500 max-w-xs mx-auto text-sm font-medium">No {filter.toLowerCase()} notifications at the moment.</p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;