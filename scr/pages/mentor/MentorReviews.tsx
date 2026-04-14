import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MentorSidebar from '../../components/MentorSidebar';

const MentorReviews: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState('Pending');

  const applicants = [
    { 
      id: 1, 
      name: 'Elena Rodriguez', 
      type: 'Canada Express Entry', 
      submitted: '2 days ago', 
      status: 'Reviewing', 
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
      notes: "Elena has a strong background in software engineering (7 years exp). Her IELTS score is 8.0 overall. Financials look solid, but the bank statement needs a more recent timestamp to be 100% compliant with the new rules."
    },
    { id: 2, name: 'Marcus Chen', type: 'UK Global Talent', submitted: '5 hours ago', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
    { id: 3, name: 'Sarah Miller', type: 'Australia 189 Visa', submitted: '1 day ago', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150' },
    { id: 4, name: 'David Kim', type: 'US O-1 Visa', submitted: '5 days ago', status: 'Overdue', color: 'text-red-500', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150' },
    { id: 5, name: 'Priya Patel', type: 'Canada Express Entry', submitted: '3 hours ago', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <MentorSidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Application Reviews</h1>
            <p className="text-slate-500 font-medium">Manage and review pending immigrant applications.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-lg">filter_list</span> Filter
            </button>
            <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
              <span className="material-symbols-outlined text-lg">refresh</span> Refresh List
            </button>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-10 border-b border-slate-200 mb-10 px-2">
          {['Pending (5)', 'Approved', 'Rejected'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-black transition-all border-b-2 ${
                activeTab === tab ? 'text-primary border-primary' : 'text-slate-400 border-transparent hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="ml-auto relative mb-3">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search applicants..." 
              className="w-72 pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" 
            />
          </div>
        </div>

        <div className="space-y-6 pb-20">
          {applicants.map((app) => (
            <motion.div 
              key={app.id}
              layout
              className={`bg-white rounded-[40px] border transition-all duration-300 overflow-hidden ${
                activeId === app.id ? 'border-primary shadow-2xl ring-1 ring-primary/5' : 'border-slate-200 shadow-sm'
              }`}
            >
              <div 
                className={`p-8 flex items-center justify-between cursor-pointer group ${activeId === app.id ? 'bg-white' : 'hover:bg-slate-50/50'}`}
                onClick={() => setActiveId(activeId === app.id ? null : app.id)}
              >
                <div className="flex items-center gap-8">
                  <div className="relative">
                    <img src={app.avatar} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100" alt={app.name} />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-4 gap-12 min-w-[700px]">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Applicant</p>
                      <h3 className="text-base font-black text-slate-900 group-hover:text-primary transition-colors">{app.name}</h3>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Visa Type</p>
                      <span className="px-3 py-1 bg-blue-50 text-primary text-[10px] font-black rounded-full uppercase tracking-wider">{app.type}</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Submitted</p>
                      <h3 className="text-sm font-bold text-slate-500">{app.submitted}</h3>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Status</p>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${app.status === 'Overdue' ? 'bg-red-500' : 'bg-amber-500'}`}></span>
                        <h3 className={`text-sm font-black ${app.color || 'text-slate-900'}`}>{app.status}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  activeId === app.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeId === app.id ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
              </div>

              <AnimatePresence>
                {activeId === app.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-100 bg-slate-50/30 overflow-hidden"
                  >
                    <div className="p-12 grid grid-cols-12 gap-16">
                      <div className="col-span-8 space-y-12">
                        <div>
                          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-8">Application Documents</h4>
                          <div className="grid grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between group/doc cursor-pointer hover:border-primary hover:shadow-md transition-all">
                              <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shadow-sm">
                                  <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
                                </div>
                                <div>
                                  <p className="text-sm font-black text-slate-900 leading-tight mb-1">Recommendation_Let...</p>
                                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">2.4 MB • Uploaded 2 days ago</p>
                                </div>
                              </div>
                              <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 group-hover/doc:bg-slate-50 group-hover/doc:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                              </button>
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between group/doc cursor-pointer hover:border-primary hover:shadow-md transition-all">
                              <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center shadow-sm">
                                  <span className="material-symbols-outlined text-2xl">image</span>
                                </div>
                                <div>
                                  <p className="text-sm font-black text-slate-900 leading-tight mb-1">Proof_of_Funds_Scan...</p>
                                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">1.8 MB • Uploaded 2 days ago</p>
                                </div>
                              </div>
                              <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 group-hover/doc:bg-slate-50 group-hover/doc:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Mentor Notes</h4>
                          <div className="bg-white p-8 rounded-3xl border border-slate-200 text-slate-600 text-base leading-relaxed font-medium shadow-sm">
                            {app.notes}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-4 space-y-4">
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Review Decision</h4>
                        <button className="w-full py-5 bg-primary text-white rounded-[24px] font-black text-base shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:bg-primary-dark transition-all transform hover:-translate-y-1">
                          <span className="material-symbols-outlined text-xl">check_circle</span> Approve Application
                        </button>
                        <button className="w-full py-5 bg-white border border-slate-200 text-slate-700 rounded-[24px] font-black text-base flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                          <span className="material-symbols-outlined text-xl">help</span> Request Clarification
                        </button>
                        <button className="w-full py-5 bg-red-50/50 border border-red-100 text-red-500 rounded-[24px] font-black text-base flex items-center justify-center gap-3 hover:bg-red-50 transition-all">
                          <span className="material-symbols-outlined text-xl">cancel</span> Reject Application
                        </button>
                        <p className="text-center text-[10px] text-slate-400 font-bold mt-6 italic uppercase tracking-widest">Last updated by System • 2 hours ago</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-12 px-6 pb-20">
          <p className="text-sm font-bold text-slate-400">Showing 1 to 5 of 12 results</p>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-300 pointer-events-none"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-black text-sm">1</button>
            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 font-black text-sm hover:bg-white">2</button>
            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 font-black text-sm hover:bg-white">3</button>
            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorReviews;