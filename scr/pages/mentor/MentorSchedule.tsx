import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MentorSidebar from '../../components/MentorSidebar';

const MentorSchedule: React.FC = () => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // Mock calendar starting on Sun, Oct 1st
  const calendar = Array.from({ length: 31 }, (_, i) => i + 1);
  const leadingBlanks = Array.from({ length: 0 }, (_, i) => null); // Oct 2023 starts on a Sunday

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <MentorSidebar />

      <main className="flex-1 p-10 flex gap-10 overflow-y-auto">
        <div className="flex-1">
          <header className="mb-12 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                <span>Dashboard</span>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-primary">Schedule & Availability</span>
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Schedule Management</h1>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Online</span>
              <div className="w-10 h-6 bg-primary/20 rounded-full relative flex items-center p-1 cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full absolute right-1"></div>
              </div>
            </div>
          </header>

          <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden mb-20">
            <div className="p-10 border-b border-slate-50 flex items-center justify-between">
              <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100 shadow-inner">
                {['Month', 'Week', 'Day'].map((tab) => (
                  <button 
                    key={tab}
                    className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                      tab === 'Month' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-end">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Time Zone</p>
                  <p className="text-xs font-black text-slate-900">EST (New York)</p>
                </div>
                <div className="flex items-center gap-6">
                  <button className="w-10 h-10 border border-slate-200 rounded-xl text-slate-400 hover:text-primary transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em]">October 2023</h3>
                  <button className="w-10 h-10 border border-slate-200 rounded-xl text-slate-400 hover:text-primary transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-7 border-b border-slate-50 bg-slate-50/30">
              {days.map(d => (
                <div key={d} className="py-6 text-center text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 divide-x divide-y divide-slate-50">
              {/* Previous month placeholders */}
              {Array.from({ length: 0 }).map((_, i) => (
                <div key={`prev-${i}`} className="h-32 p-4 bg-slate-50/10"></div>
              ))}
              
              {calendar.map((day) => (
                <div key={day} className="h-32 p-4 hover:bg-slate-50/50 transition-colors group relative cursor-pointer">
                  <span className={`text-sm font-black ${[5, 8, 12].includes(day) ? 'text-primary' : 'text-slate-900 group-hover:text-primary transition-colors'}`}>
                    {day}
                  </span>
                  
                  {day === 1 && (
                    <div className="mt-3 space-y-1.5">
                      <div className="px-2 py-1.5 bg-blue-50 border-l-[3px] border-primary rounded text-[9px] font-black text-primary leading-tight">10:00 AM - Con...</div>
                    </div>
                  )}
                  {day === 2 && (
                    <div className="mt-3 space-y-1.5">
                      <div className="px-2 py-1.5 bg-blue-50 border-l-[3px] border-primary rounded text-[9px] font-black text-primary leading-tight">14:00 PM - Vis...</div>
                    </div>
                  )}
                  {day === 5 && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-black">5</div>
                  )}
                  {day === 5 && (
                    <div className="mt-3 space-y-1.5">
                      <div className="px-2 py-1.5 bg-primary text-white rounded text-[9px] font-black leading-tight">09:00 AM - Intr...</div>
                      <div className="px-2 py-1.5 bg-primary/80 text-white rounded text-[9px] font-black leading-tight">11:30 AM - Doc...</div>
                    </div>
                  )}
                  {day === 4 && (
                    <div className="mt-3">
                      <div className="flex items-center gap-1.5 px-2 py-1.5 bg-slate-100/80 rounded text-[9px] font-black text-slate-500 italic">
                        <span className="material-symbols-outlined text-[12px]">block</span> Out of Office
                      </div>
                    </div>
                  )}
                  {day === 8 && (
                    <div className="mt-3">
                      <div className="px-2 py-1.5 bg-orange-50 border border-orange-100 rounded text-[9px] font-black text-orange-600 shadow-sm">Pending Request</div>
                    </div>
                  )}
                  {day === 12 && (
                    <div className="mt-3">
                      <div className="px-2 py-1.5 bg-blue-50 border-l-[3px] border-primary rounded text-[9px] font-black text-primary leading-tight">13:00 PM - Stra...</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Sidebar */}
        <aside className="w-96 space-y-10 pb-20">
          <div className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Personal Meeting Link</h3>
            <p className="text-xs text-slate-500 font-medium mb-10 leading-relaxed">Share this link to let mentees book time directly from your library or public profile.</p>
            <div className="flex gap-3">
              <button className="flex-1 py-4 bg-primary text-white rounded-[20px] font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all">
                <span className="material-symbols-outlined text-xl">link</span> Copy Meeting Link
              </button>
              <button className="w-14 h-14 bg-white border border-slate-200 rounded-[20px] flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10 border-b border-slate-50 pb-4">This Month's Activity</p>
            <div className="grid grid-cols-2 gap-10 mb-12">
              <div>
                <h4 className="text-4xl font-black text-slate-900 mb-2">32h</h4>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Total Availability</p>
              </div>
              <div className="border-l border-slate-100 pl-10">
                <h4 className="text-4xl font-black text-primary mb-2">12</h4>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Sessions Booked</p>
              </div>
            </div>
            
            <div className="pt-10 border-t border-slate-50 mb-12">
               <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 font-black text-[11px] text-slate-900 uppercase tracking-widest">
                    <span className="material-symbols-outlined text-primary text-xl">sync</span> Calendar Sync
                  </div>
                  <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors underline">Edit</button>
               </div>
               <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100/50 flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm"><span className="material-symbols-outlined text-sm">check</span></div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900 leading-none mb-2 uppercase tracking-wide">Google Calendar Connected</p>
                    <p className="text-[10px] text-slate-500 font-medium">Syncing as mentor@immigration.io</p>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">schedule</span> Standard Hours
                </h4>
                <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors underline">Edit</button>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-[11px] font-black border-b border-slate-50 pb-2.5">
                   <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="text-slate-400 uppercase">Mon</span></div>
                   <span className="text-slate-900 tracking-wider">09:00 AM - 05:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-[11px] font-black border-b border-slate-50 pb-2.5">
                   <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="text-slate-400 uppercase">Tue</span></div>
                   <span className="text-slate-900 tracking-wider">09:00 AM - 05:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-[11px] font-black border-b border-slate-50 pb-2.5 opacity-50">
                   <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div><span className="text-slate-400 uppercase">Wed</span></div>
                   <span className="text-slate-400 italic font-medium tracking-wider">Unavailable</span>
                </li>
                <li className="flex justify-between items-center text-[11px] font-black border-b border-slate-50 pb-2.5">
                   <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="text-slate-400 uppercase">Thu</span></div>
                   <span className="text-slate-900 tracking-wider">09:00 AM - 05:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-[11px] font-black pb-2.5">
                   <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="text-slate-400 uppercase">Fri</span></div>
                   <span className="text-slate-900 tracking-wider">09:00 AM - 01:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="pt-10 border-t border-slate-50">
               <div className="flex items-center justify-between mb-6">
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">event_busy</span> Exceptions
                  </h4>
               </div>
               <div className="space-y-3">
                 <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between group">
                    <div>
                      <p className="text-[11px] font-black text-slate-900 mb-1">Oct 24 - Oct 25</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">CONFERENCE</p>
                    </div>
                    <button className="p-2 text-slate-300 hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-lg">delete</span></button>
                 </div>
                 <button className="w-full py-4 border border-dashed border-slate-200 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
                    + Add Time Off
                 </button>
               </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default MentorSchedule;