import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white mb-2">My Immigration Plan</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl">Track your visa application progress and manage your documents efficiently.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Timeline Section */}
          <section className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Required Documents</h2>
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-primary">33% Complete</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">1 of 3 completed</span>
              </div>
            </div>

            <div className="space-y-12">
              {/* Completed Item */}
              <div className="relative flex gap-6 timeline-item timeline-line">
                <div className="z-10 flex-shrink-0 size-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/20">
                  <span className="material-symbols-outlined text-xl">check</span>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 text-primary rounded-xl p-3">
                        <span className="material-symbols-outlined">menu_book</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">Valid Passport</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Front and back cover included</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Uploaded</span>
                      <button className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pending Item 2 */}
              <div className="relative flex gap-6 timeline-item timeline-line">
                <div className="z-10 flex-shrink-0 size-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-sm font-bold">02</span>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-primary/20 dark:border-primary/40 shadow-sm relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-xl p-3">
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">Proof of Funds</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Bank statements from last 6 months</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Pending</span>
                      <button className="text-sm font-bold text-white flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">upload_file</span>
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pending Item 3 */}
              <div className="relative flex gap-6 timeline-item">
                <div className="z-10 flex-shrink-0 size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                  <span className="text-sm font-bold">03</span>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm opacity-60">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl p-3">
                        <span className="material-symbols-outlined">badge</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">National ID Card</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Government issued identification</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Pending</span>
                      <button className="text-sm font-bold text-white flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">upload_file</span>
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar Section */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Latest Updates</h2>
                <Link to="/news" className="text-xs font-bold text-primary hover:underline">See All</Link>
              </div>
              <div className="space-y-4">
                <div className="group flex items-start gap-4 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">newspaper</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">New Healthcare Visa Stream</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Application fast-track for nurses and doctors.</p>
                  </div>
                </div>
                <div className="group flex items-start gap-4 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div className="size-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">festival</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">Food Festival: Nov 12</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Explore international cuisines at City Square.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recommended Pathways</h2>
                <Link className="text-sm font-bold text-primary hover:underline flex items-center gap-1" to="/resources">
                  View All
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:border-primary/50 transition-all">
                  <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-9xl text-primary">school</span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-primary/10 rounded-lg p-2.5">
                        <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">High Match</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">EB-1A Talent Visa</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-6 leading-relaxed">
                      For individuals with extraordinary ability in sciences, arts, education, business, or athletics who plan to continue to work in their field.
                    </p>
                    <button className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                      View Requirements
                    </button>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:border-primary/50 transition-all">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-2.5">
                        <span className="material-symbols-outlined text-red-500 text-xl">flight</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">Popular</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Canada Express Entry</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-6 leading-relaxed">
                      The fastest and most popular pathway for skilled workers to settle in Canada permanently through the federal system.
                    </p>
                    <button className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                      View Requirements
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-10 text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">auto_awesome</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">auto_awesome</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">AI Assistant Ready</h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Based on your uploaded passport</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-10 leading-relaxed font-medium">
                  I've analyzed your current status. We can now speed up your process by translating documents or auto-generating your filing paperwork.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={() => navigate('/translation')}
                    className="w-full flex items-center justify-center gap-3 h-14 rounded-2xl bg-white text-slate-900 font-black text-sm hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span className="material-symbols-outlined text-[20px]">translate</span>
                    Translate Documents
                  </button>
                  <button 
                    onClick={() => navigate('/draft-ai')}
                    className="w-full flex items-center justify-center gap-3 h-14 rounded-2xl bg-primary text-white font-black text-sm hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/30"
                  >
                    <span className="material-symbols-outlined text-[20px]">description</span>
                    Generate Paperwork (AI)
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;