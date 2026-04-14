import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MentorSidebar from '../../components/MentorSidebar';

const MentorSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Public Profile', icon: 'person' },
    { id: 'mentorship', name: 'Mentorship Details', icon: 'school' },
    { id: 'availability', name: 'Availability & Pricing', icon: 'calendar_today' },
    { id: 'account', name: 'Account & Security', icon: 'security' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <MentorSidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Mentor Settings</h1>
          <p className="text-slate-500 font-medium">Manage your profile, availability, and account preferences.</p>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Navigation Tabs */}
          <aside className="col-span-12 lg:col-span-3 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </aside>

          {/* Settings Content */}
          <section className="col-span-12 lg:col-span-9 bg-white rounded-[40px] border border-slate-200 shadow-sm p-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'profile' && (
                <div className="space-y-10">
                  <div className="flex items-center gap-8">
                    <div className="relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                        className="w-32 h-32 rounded-[40px] object-cover border-4 border-slate-50 shadow-sm" 
                        alt="Profile" 
                      />
                      <button className="absolute inset-0 bg-black/40 rounded-[40px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                      </button>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2">Sarah Jenkins</h3>
                      <p className="text-slate-500 text-sm font-medium mb-4">Update your profile photo and personal details.</p>
                      <div className="flex gap-3">
                        <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-black shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">Upload New</button>
                        <button className="px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl text-xs font-black hover:bg-slate-100 transition-all">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                      <input type="text" defaultValue="Sarah Jenkins" className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900" />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Professional Title</label>
                      <input type="text" defaultValue="Senior Immigration Consultant" className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900" />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Company / Organization</label>
                      <input type="text" defaultValue="Global Path Consulting" className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900" />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</label>
                      <input type="text" defaultValue="Toronto, Canada" className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Professional Bio</label>
                    <textarea rows={4} className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900 resize-none" defaultValue="Helping skilled professionals navigate the Canadian immigration process for over 10 years. Specialized in Express Entry and Provincial Nominee Programs."></textarea>
                  </div>
                </div>
              )}

              {activeTab === 'mentorship' && (
                <div className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Origin Country</label>
                      <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900 appearance-none">
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>India</option>
                        <option>China</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Immigration Expertise</label>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['Express Entry', 'Student Visa', 'Work Permits', 'Family Sponsorship'].map(tag => (
                          <span key={tag} className="px-4 py-2 bg-blue-50 text-primary text-[10px] font-black rounded-full uppercase tracking-wider flex items-center gap-2">
                            {tag}
                            <button className="material-symbols-outlined text-sm">close</button>
                          </span>
                        ))}
                        <button className="px-4 py-2 border border-dashed border-slate-300 text-slate-400 text-[10px] font-black rounded-full uppercase tracking-wider hover:border-primary hover:text-primary transition-all">
                          + Add Expertise
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Languages Spoken</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {['English', 'French', 'Spanish', 'Mandarin'].map(lang => (
                        <label key={lang} className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
                          <input type="checkbox" defaultChecked={lang === 'English'} className="w-5 h-5 rounded-lg border-slate-300 text-primary focus:ring-primary/20" />
                          <span className="text-sm font-bold text-slate-700">{lang}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Years of Experience</label>
                    <input type="number" defaultValue="12" className="w-32 px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900" />
                  </div>
                </div>
              )}

              {activeTab === 'availability' && (
                <div className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Hourly Session Rate ($)</label>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                        <input type="number" defaultValue="85" className="w-full pl-10 pr-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Weekly Capacity (Hours)</label>
                      <input type="number" defaultValue="15" className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Weekly Availability</h4>
                    <div className="space-y-4">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                        <div key={day} className="flex items-center justify-between p-6 border border-slate-100 rounded-3xl">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{day.slice(0,3)}</span>
                            </div>
                            <span className="font-black text-slate-900">{day}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <select className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none">
                              <option>09:00 AM</option>
                              <option>10:00 AM</option>
                            </select>
                            <span className="text-slate-300 font-black">to</span>
                            <select className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none">
                              <option>05:00 PM</option>
                              <option>06:00 PM</option>
                            </select>
                            <button className="p-2 text-red-400 hover:text-red-600 transition-colors">
                              <span className="material-symbols-outlined">delete</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'account' && (
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input type="email" defaultValue="sarah.jenkins@consulting.com" className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-900" />
                    </div>
                    <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline">Change Password</button>
                  </div>

                  <div className="pt-10 border-t border-slate-100 space-y-6">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Notification Preferences</h4>
                    <div className="space-y-4">
                      {[
                        { title: 'New Mentee Requests', desc: 'Get notified when a new immigrant wants to connect.' },
                        { title: 'Session Reminders', desc: 'Receive alerts 30 minutes before a scheduled call.' },
                        { title: 'Earnings Reports', desc: 'Monthly summary of your mentorship income.' }
                      ].map(pref => (
                        <div key={pref.title} className="flex items-center justify-between">
                          <div>
                            <p className="font-black text-slate-900">{pref.title}</p>
                            <p className="text-xs text-slate-500 font-medium">{pref.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-12 pt-10 border-t border-slate-100 flex justify-end gap-4">
                <button className="px-8 py-4 bg-slate-50 text-slate-600 rounded-2xl font-black text-sm hover:bg-slate-100 transition-all">Discard Changes</button>
                <button className="px-10 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform active:scale-95">Save Settings</button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MentorSettings;
