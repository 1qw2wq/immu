import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MentorSidebar from '../../components/MentorSidebar';

const MentorDashboard: React.FC = () => {
  const mentees = [
    { id: '#8832', name: 'Sarah Jenkins', avatar: 'SJ', color: 'bg-purple-100 text-purple-600', destination: 'Canada', status: 'Document Prep', progress: 80, flag: '🇨🇦' },
    { id: '#9201', name: 'David Lee', avatar: 'DL', color: 'bg-amber-100 text-amber-600', destination: 'UK', status: 'Visa Application', progress: 45, flag: '🇬🇧' },
    { id: '#7743', name: 'Maria Garcia', avatar: 'MG', color: 'bg-red-100 text-red-600', destination: 'USA', status: 'Complete', progress: 100, flag: '🇺🇸' },
    { id: '#1029', name: 'John Doe', avatar: 'JD', color: 'bg-cyan-100 text-cyan-600', destination: 'Australia', status: 'Skill Assessment', progress: 20, flag: '🇦🇺' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <MentorSidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-12 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Mentor Workspace</h1>
            <p className="text-slate-500 font-medium">Welcome back, Sarah. Here is your daily overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
              <input 
                type="text" 
                placeholder="Search mentees..." 
                className="w-72 pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all" 
              />
            </div>
            <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 relative hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <span className="text-green-500 text-xs font-black bg-green-50 px-2 py-0.5 rounded">+20%</span>
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Active Mentees</p>
              <h4 className="text-4xl font-black text-slate-900 tracking-tight">12</h4>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined">assignment_late</span>
                </div>
                <span className="text-red-500 text-[10px] font-black bg-red-50 px-2 py-0.5 rounded tracking-widest uppercase">Urgent</span>
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Pending Reviews</p>
              <h4 className="text-4xl font-black text-slate-900 tracking-tight">4</h4>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-green-500 text-xs font-black bg-green-50 px-2 py-0.5 rounded">+15%</span>
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Total Earnings</p>
              <h4 className="text-4xl font-black text-slate-900 tracking-tight">$3,450</h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Mentee Overview Table */}
          <section className="col-span-12 lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Mentee Overview</h2>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-lg">filter_alt</span> Filter
                </button>
                <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                  <span className="material-symbols-outlined text-lg">add</span> Invite Mentee
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                    <th className="pb-4 font-black">Mentee</th>
                    <th className="pb-4 font-black">Destination</th>
                    <th className="pb-4 font-black">Status</th>
                    <th className="pb-4 font-black">Progress</th>
                    <th className="pb-4 text-right font-black">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mentees.map((m) => (
                    <tr key={m.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-11 h-11 rounded-full ${m.color} flex items-center justify-center font-black text-sm shadow-sm`}>{m.avatar}</div>
                          <div>
                            <p className="text-sm font-black text-slate-900">{m.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ID: {m.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                          <span className="text-lg">{m.flag}</span> {m.destination}
                        </div>
                      </td>
                      <td className="py-6">
                        <span className="px-3 py-1.5 bg-blue-50 text-primary text-[10px] font-black rounded-full uppercase tracking-wider">{m.status}</span>
                      </td>
                      <td className="py-6">
                        <div className="w-32">
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                            <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${m.progress}%` }}></div>
                          </div>
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.progress}%</p>
                        </div>
                      </td>
                      <td className="py-6 text-right">
                        <button className="p-2.5 text-slate-400 hover:text-primary transition-all hover:scale-110">
                          <span className="material-symbols-outlined">mail</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="w-full mt-10 py-4 text-sm font-black text-primary hover:bg-slate-50 rounded-2xl transition-all border border-dashed border-slate-200">
              View All Mentees
            </button>
          </section>

          {/* Sidebar Section */}
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Upcoming Consultations</h2>
                <span className="material-symbols-outlined text-slate-400">calendar_today</span>
              </div>
              <div className="space-y-10">
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-green-500 before:rounded-full">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">Today</p>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="text-base font-black text-slate-900 mb-1">Call with David Lee</h4>
                  <p className="text-xs text-slate-500 font-medium mb-5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">schedule</span> 2:00 PM - 3:00 PM
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-primary text-white rounded-2xl text-xs font-black shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">Join Call</button>
                    <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-colors">
                      <span className="material-symbols-outlined text-sm">more_horiz</span>
                    </button>
                  </div>
                </div>

                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-slate-200 before:rounded-full opacity-60">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tomorrow</p>
                  <h4 className="text-base font-black text-slate-900 mb-1">Strategy with Maria G.</h4>
                  <p className="text-xs text-slate-500 font-medium mb-5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">schedule</span> 10:00 AM - 11:00 AM
                  </p>
                  <button className="w-full py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black hover:bg-slate-50 transition-colors">Reschedule</button>
                </div>
                
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-slate-200 before:rounded-full opacity-60">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Friday, Oct 24</p>
                  <h4 className="text-base font-black text-slate-900 mb-1">Intro Call: New Mentee</h4>
                  <p className="text-xs text-slate-500 font-medium mb-5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">schedule</span> 4:30 PM - 5:00 PM
                  </p>
                  <button className="w-full py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black hover:bg-slate-50 transition-colors">Details</button>
                </div>
              </div>
              <button className="w-full mt-10 py-4 bg-slate-50 text-slate-900 rounded-2xl text-xs font-black flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
                <span className="material-symbols-outlined text-lg">add_circle</span> Schedule New
              </button>
            </div>

            <div className="bg-primary p-10 rounded-[48px] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[100px]">auto_awesome</span>
              </div>
              <h3 className="text-2xl font-black mb-3 relative z-10 leading-tight">Mentor Resources</h3>
              <p className="text-blue-100/80 text-sm mb-10 leading-relaxed relative z-10 font-medium">
                Access the latest immigration policy updates and mentor guides to provide best-in-class advice.
              </p>
              <Link to="/mentor/library" className="w-full py-4 bg-white/20 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all relative z-10 group/btn">
                Browse Library 
                <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;