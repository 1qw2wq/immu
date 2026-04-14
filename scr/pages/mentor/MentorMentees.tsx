import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MentorSidebar from '../../components/MentorSidebar';

const MentorMentees: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const mentees = [
    { id: '#8832', name: 'Sarah Jenkins', avatar: 'SJ', color: 'bg-purple-100 text-purple-600', destination: 'Canada', status: 'Document Prep', progress: 80, flag: '🇨🇦', email: 'sarah.j@example.com', joined: '2 days ago' },
    { id: '#9201', name: 'David Lee', avatar: 'DL', color: 'bg-amber-100 text-amber-600', destination: 'UK', status: 'Visa Application', progress: 45, flag: '🇬🇧', email: 'd.lee@example.com', joined: '1 week ago' },
    { id: '#7743', name: 'Maria Garcia', avatar: 'MG', color: 'bg-red-100 text-red-600', destination: 'USA', status: 'Complete', progress: 100, flag: '🇺🇸', email: 'm.garcia@example.com', joined: '3 weeks ago' },
    { id: '#1029', name: 'John Doe', avatar: 'JD', color: 'bg-cyan-100 text-cyan-600', destination: 'Australia', status: 'Skill Assessment', progress: 20, flag: '🇦🇺', email: 'j.doe@example.com', joined: '1 month ago' },
    { id: '#5521', name: 'Elena Popova', avatar: 'EP', color: 'bg-emerald-100 text-emerald-600', destination: 'Germany', status: 'Language Test', progress: 35, flag: '🇩🇪', email: 'e.popova@example.com', joined: '2 months ago' },
    { id: '#4432', name: 'Ahmed Hassan', avatar: 'AH', color: 'bg-indigo-100 text-indigo-600', destination: 'UAE', status: 'Job Search', progress: 60, flag: '🇦🇪', email: 'a.hassan@example.com', joined: '3 months ago' },
  ];

  const filteredMentees = mentees.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <MentorSidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">My Mentees</h1>
            <p className="text-slate-500 font-medium">Manage and track the progress of your active mentees.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
              <input 
                type="text" 
                placeholder="Search by name or ID..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all shadow-sm" 
              />
            </div>
            <button className="px-6 py-3.5 bg-primary text-white rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform active:scale-95">
              <span className="material-symbols-outlined">person_add</span>
              Invite New
            </button>
          </div>
        </header>

        <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-8 py-6">Mentee Details</th>
                  <th className="px-8 py-6">Destination</th>
                  <th className="px-8 py-6">Current Status</th>
                  <th className="px-8 py-6">Progress</th>
                  <th className="px-8 py-6">Joined</th>
                  <th className="px-8 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredMentees.map((m) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={m.id} 
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${m.color} flex items-center justify-center font-black text-sm shadow-sm`}>
                          {m.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">{m.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{m.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                        <span className="text-xl">{m.flag}</span> {m.destination}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        m.status === 'Complete' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-primary'
                      }`}>
                        {m.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="w-32">
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${
                              m.progress === 100 ? 'bg-green-500' : 'bg-primary'
                            }`} 
                            style={{ width: `${m.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.progress}% Complete</p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-xs font-bold text-slate-500">{m.joined}</p>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-primary hover:bg-primary/5 transition-all">
                          <span className="material-symbols-outlined text-xl">chat_bubble</span>
                        </button>
                        <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-all">
                          <span className="material-symbols-outlined text-xl">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredMentees.length === 0 && (
            <div className="p-20 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl text-slate-300">search_off</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">No mentees found</h3>
              <p className="text-slate-500 font-medium">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MentorMentees;
