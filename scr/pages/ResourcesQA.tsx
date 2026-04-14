import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommunitySubNav from '../components/CommunitySubNav';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem: React.FC<{ q: string; a: string; icon: string; category: string }> = ({ q, a, icon, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group mb-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div>
            <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-1">{category}</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">{q}</h3>
          </div>
        </div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/20 text-primary' : ''}`}>
          <span className="material-symbols-outlined text-xl">expand_more</span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 overflow-hidden"
          >
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              {a}
              <div className="mt-6 flex gap-4">
                <button className="text-xs font-black text-primary flex items-center gap-1.5 hover:underline">
                  <span className="material-symbols-outlined text-sm">article</span>
                  Full Document Guide
                </button>
                <button className="text-xs font-black text-slate-400 flex items-center gap-1.5 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined text-sm">thumb_up</span>
                  Helpful
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResourcesQA: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    { 
      q: "How long is the current PR processing time?", 
      a: "As of late 2023, Express Entry processing times are averaging 6 months. However, specific streams like the Healthcare category-based rounds may be faster. Always check the official IRCC portal for weekly updates.",
      icon: "timer", 
      category: "Legal" 
    },
    { 
      q: "What documents do I need for a Work Permit?", 
      a: "You typically need a valid passport, proof of job offer (LMIA-supported or exempt), police certificates, and proof of education credentials. Specific requirements vary by your country of citizenship and the type of work permit.",
      icon: "badge", 
      category: "Legal" 
    },
    { 
      q: "How do I open a bank account before arriving?", 
      a: "Many major banks (like RBC, Scotiabank, or CIBC) offer 'Newcomer Start' programs that allow you to start an application online from abroad. You'll need to visit a branch with your passport and COPR upon arrival to fully activate it.",
      icon: "account_balance", 
      category: "Finance" 
    },
    { 
      q: "Which neighborhoods in Toronto are newcomer-friendly?", 
      a: "North York and Scarborough are very popular for their diverse communities and slightly more affordable housing. Downtown is great for tech jobs but significantly more expensive. Check our Homestay section for local group advice.",
      icon: "home", 
      category: "Housing" 
    },
    { 
      q: "Is it better to take IELTS or CELPIP?", 
      a: "CELPIP is specifically designed for Canadian English and is often seen as more straightforward for immigration purposes, but it's only available in certain countries. IELTS is globally recognized. Both are equally accepted for Express Entry points.",
      icon: "language", 
      category: "Education" 
    },
  ];

  const categories = ['All', 'Legal', 'Finance', 'Housing', 'Education'];

  const filteredFaqs = faqs.filter(f => {
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Navbar />
      <CommunitySubNav />
      
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-6 w-full flex-1">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-8">
            <header className="mb-10">
              <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Resources & Q&A</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                The community knowledge base for all things immigration. Find verified answers and expert guides.
              </p>
            </header>

            <div className="relative mb-10 group">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-2xl group-focus-within:text-primary transition-colors">search</span>
              <input 
                type="text" 
                placeholder="Search for answers (e.g., 'Express Entry', 'Banking')" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] pl-14 pr-6 outline-none focus:ring-2 focus:ring-primary/20 shadow-sm dark:text-white text-lg font-medium transition-all" 
              />
            </div>

            <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                      : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, i) => (
                    <motion.div
                      key={faq.q}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <FAQItem {...faq} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-24 bg-white dark:bg-slate-900 rounded-[40px] border border-dashed border-slate-200 dark:border-slate-800"
                  >
                    <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="material-symbols-outlined text-4xl text-slate-300">search_off</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No answers found</h3>
                    <p className="text-slate-500 max-w-xs mx-auto text-sm">Try adjusting your filters or search query, or ask our community for help.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 dark:bg-primary/20 p-8 rounded-[40px] text-white shadow-2xl shadow-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">auto_awesome</span>
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10 leading-tight">Instant AI Help</h3>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed relative z-10">
                Our AI assistant has read over 5,000 pages of policy manuals to help you with your specific situation.
              </p>
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg active:scale-95">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                Start AI Chat
              </button>
            </motion.div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Top Contributors</h3>
              <div className="space-y-6">
                {[
                  { name: 'Dr. Sarah Smith', role: 'Immigration Lawyer', ans: 142, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' },
                  { name: 'Michael Chen', role: 'Housing Expert', ans: 98, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
                  { name: 'Elena Petrova', role: 'Language Tutor', ans: 64, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150' }
                ].map(expert => (
                  <div key={expert.name} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                      <img src={expert.img} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white leading-none mb-1 group-hover:text-primary">{expert.name}</h4>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{expert.ans} Answers</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-xs font-black hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                View Leaderboard
              </button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesQA;