import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommunitySubNav from '../components/CommunitySubNav';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DiscussionForum: React.FC = () => {
  const threads = [
    { id: 1, title: "Housing in Toronto: Finding affordable rentals as a newcomer", author: "Sarah M.", tag: "Housing", color: "bg-blue-100 text-blue-600", replies: 24, views: "1.2k", content: "I'm moving to Toronto next month and looking for advice on which neighborhoods are both safe and affordable. Any tips for someone without a Canadian credit..." },
    { id: 2, title: "Best health insurance for newcomers: Private vs Provincial coverage", author: "Ahmed K.", tag: "Health", color: "bg-green-100 text-green-600", replies: 15, views: "850", content: "The waiting period for provincial health cards can be tricky. What are the best private options you've used during the first 3 months?" },
    { id: 3, title: "Job search tips for international students in Tech", author: "Elena V.", tag: "Career", color: "bg-orange-100 text-orange-600", replies: 42, views: "2k", content: "Sharing a list of resources that helped me land my first software engineering role after graduation. Networking is key!" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Navbar />
      <CommunitySubNav />
      
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-6 w-full flex-1">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
              <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Community Discussions</h1>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-black rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Start a Discussion
              </button>
            </div>

            <div className="relative mb-6">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input type="text" placeholder="Search for threads or topics..." className="w-full h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-12 pr-4 outline-none focus:ring-1 focus:ring-primary shadow-sm dark:text-white" />
            </div>

            <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-2">
              {['All Topics', 'Housing', 'Health Insurance', 'Job Search', 'Visa Support'].map((cat, i) => (
                <button key={cat} className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-primary'}`}>{cat}</button>
              ))}
            </div>

            <div className="space-y-6">
              {threads.map((thread, i) => (
                <motion.div 
                  key={thread.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${thread.color}`}>{thread.tag}</span>
                        <span className="text-xs text-slate-400">Posted 2 hours ago by {thread.author}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{thread.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">{thread.content}</p>
                  <div className="flex items-center gap-6 text-slate-400 text-xs font-bold">
                    <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">forum</span> {thread.replies} replies</div>
                    <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">visibility</span> {thread.views} views</div>
                    <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">favorite</span> 12</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center gap-2 pb-20">
              <button className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="h-10 w-10 flex items-center justify-center bg-primary text-white rounded-lg font-bold">1</button>
              <button className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 font-bold">2</button>
              <button className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">trending_up</span>
                <h4 className="font-black text-slate-900 dark:text-white">Trending Topics</h4>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Express Entry 2024 Updates</p>
                  <p className="text-xs text-slate-400">156 comments today</p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Opening a bank account</p>
                  <p className="text-xs text-slate-400">84 comments today</p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Winter clothing essentials</p>
                  <p className="text-xs text-slate-400">62 comments today</p>
                </div>
              </div>
              <button className="w-full mt-8 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">View all trends</button>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">policy</span>
                <h4 className="font-black text-slate-900 dark:text-white">Community Guidelines</h4>
              </div>
              <ul className="space-y-4 text-xs font-bold text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Be respectful to all members.</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Don't share sensitive personal info.</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Keep discussions relevant to immigration.</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> No self-promotion or spam.</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiscussionForum;