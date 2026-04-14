import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MentorSidebar from '../../components/MentorSidebar';

const MentorLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Resources');

  const categories = [
    { name: 'All Resources', icon: null },
    { name: 'Visa Policy Updates', icon: 'policy' },
    { name: 'Template Library', icon: 'snippet_folder' },
    { name: 'Cultural Guides', icon: 'public' }
  ];

  const latest = [
    { title: 'H-1B Visa Cap Update 2024', desc: 'Official breakdown of the new lottery registration process and cap limits for the 2024 fiscal year registration period.', date: 'Oct 24, 2023', size: '2.4 MB', type: 'PDF', status: 'New' },
    { title: 'Sponsorship Letter Template', desc: 'Standardized DOCX template for employer sponsorship requests, including key legal phrasing required by IRCC.', date: 'Nov 02, 2023', type: 'DOCX', status: 'Updated' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <MentorSidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-12 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
              <span>Dashboard</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary">Resources</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Mentor Resources Library</h1>
            <p className="text-slate-500 font-medium max-w-2xl">Access curated guides, templates, and policy updates to support your mentees effectively.</p>
          </div>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            <input 
              type="text" 
              placeholder="Search guides, templates..." 
              className="w-96 pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-[20px] outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary shadow-sm transition-all" 
            />
          </div>
        </header>

        {/* Filter Bar */}
        <div className="flex gap-4 mb-16 overflow-x-auto no-scrollbar pb-2">
          {categories.map((c) => (
            <button 
              key={c.name}
              onClick={() => setActiveTab(c.name)}
              className={`flex items-center gap-3 px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] transition-all border ${
                activeTab === c.name 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-primary hover:text-primary'
              }`}
            >
              {c.icon && <span className="material-symbols-outlined text-lg">{c.icon}</span>}
              {c.name}
            </button>
          ))}
        </div>

        {/* Latest Updates */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-6 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
               Latest Updates
               <span className="material-symbols-outlined text-primary">verified</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {latest.map((item) => (
              <motion.div 
                key={item.title}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm group cursor-pointer hover:border-primary hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center shadow-sm ${
                    item.type === 'PDF' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'
                  }`}>
                    <span className="material-symbols-outlined text-3xl">{item.type === 'PDF' ? 'picture_as_pdf' : 'description'}</span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    item.status === 'New' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed line-clamp-2">{item.desc}</p>
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{item.date} • {item.size || item.type}</p>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-slate-50 group-hover:text-primary transition-all">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Template Library */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">folder</span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Template Library</h2>
            </div>
            <button className="text-[11px] font-black text-primary uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Resume Format (US Tech)', type: 'DOCX File', desc: 'Optimized layout for ATS systems used by major US tech companies.' },
              { title: 'Salary Negotiation Script', type: 'XLSX File', desc: 'Spreadsheet calculator and script points for salary discussions.' },
              { title: 'Interview Prep Deck', type: 'PPTX File', desc: 'Slide deck to help mentees practice behavioral interview questions.' },
              { title: 'Cold Email Templates', type: 'DOCX File', desc: 'Templates for reaching out to recruiters and hiring managers on LinkedIn.' }
            ].map((t) => (
              <div key={t.title} className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm text-center group hover:border-primary transition-all">
                <div className="w-14 h-14 bg-slate-50 text-slate-300 rounded-[20px] flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <h3 className="text-sm font-black text-slate-900 mb-1 leading-tight px-2">{t.title}</h3>
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-6">{t.type}</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-10 h-12 overflow-hidden px-2">{t.desc}</p>
                <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-primary transition-colors mx-auto uppercase tracking-widest">
                  <span className="material-symbols-outlined text-lg">download</span> Download
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Integration Guides */}
        <section className="pb-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">public</span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Cultural Integration Guides</h2>
            </div>
            <button className="text-[11px] font-black text-primary uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Navigating Corporate Culture', icon: 'menu_book', color: 'bg-purple-50 text-purple-600', desc: 'Guide to US workplace norms and professional etiquette.', meta: 'PDF', action: 'Download' },
              { title: 'Healthcare System Explained', icon: 'medical_services', color: 'bg-green-50 text-green-600', desc: 'Understanding insurance, copays, and finding providers.', meta: 'Video', action: 'Watch Now' },
              { title: 'Banking & Credit 101', icon: 'account_balance', color: 'bg-orange-50 text-orange-600', desc: 'Building credit history for new residents and opening accounts.', meta: 'PDF', action: 'Download' }
            ].map((g) => (
              <div key={g.title} className="bg-white p-8 rounded-[40px] border border-slate-200 flex items-start gap-6 group hover:border-primary hover:shadow-lg transition-all">
                <div className={`w-16 h-16 ${g.color} rounded-[24px] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105`}>
                  <span className="material-symbols-outlined text-3xl">{g.icon}</span>
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 mb-1 tracking-tight leading-tight">{g.title}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">{g.desc}</p>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-300">{g.meta}</span>
                    <button className="text-primary hover:underline">{g.action}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MentorLibrary;