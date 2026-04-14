import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const newsItems = [
    {
      id: 1,
      title: "New Policy Update: Faster PR Processing for Healthcare Workers",
      date: "Oct 23, 2023",
      category: "Policy",
      excerpt: "The government has announced a new streamlined pathway for international healthcare professionals to obtain permanent residency within 6 months.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Canada to Welcome Record Number of Newcomers in 2024",
      date: "Oct 21, 2023",
      category: "Trends",
      excerpt: "Immigration levels are expected to reach new heights next year, focusing on skilled labor and family reunification across all provinces.",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Tech Visa Program Extended: What You Need to Know",
      date: "Oct 19, 2023",
      category: "Visa",
      excerpt: "The Global Talent Stream program has been extended with new eligible occupations added to the fast-track list for software developers and engineers.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Housing Market Trends: Best Cities for Renters in 2024",
      date: "Oct 15, 2023",
      category: "Housing",
      excerpt: "Analyzing rental costs and availability in major hubs like Toronto, Vancouver, and Montreal for new arrivals.",
      image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = ['All', 'Policy', 'Visa', 'Trends', 'Housing'];
  const filteredNews = activeCategory === 'All' ? newsItems : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-12 w-full flex-1">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Immigration News</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl leading-relaxed">
              Stay ahead with the latest updates on immigration policies, global mobility trends, and newcomer stories.
            </p>
          </motion.div>
        </header>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-8 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Section */}
        {activeCategory === 'All' && newsItems.find(i => i.featured) && (
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-16 relative h-[500px] rounded-[48px] overflow-hidden group cursor-pointer shadow-2xl"
          >
            <img 
              src={newsItems[0].image} 
              alt="Featured" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-12">
               <span className="px-4 py-1.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Featured Update</span>
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight max-w-4xl tracking-tight">
                  {newsItems[0].title}
               </h2>
               <p className="text-slate-200 text-lg mb-8 max-w-2xl line-clamp-2">{newsItems[0].excerpt}</p>
               <button className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                  Read Full Coverage
                  <span className="material-symbols-outlined">arrow_forward</span>
               </button>
            </div>
          </motion.section>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {filteredNews.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-[10px] font-black uppercase text-primary">
                  {item.category}
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{item.date}</p>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="mt-auto flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  View Story
                  <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Callout */}
        <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[64px] p-16 text-center border border-slate-100 dark:border-slate-800 mb-20">
           <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-[20px] flex items-center justify-center mx-auto mb-8">
                 <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Never miss an update</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium">Get the most important immigration news delivered to your inbox every Monday.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <input type="email" placeholder="Your email address" className="flex-1 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 outline-none focus:ring-1 focus:ring-primary dark:text-white" />
                 <button className="h-14 px-10 bg-primary text-white rounded-2xl font-black hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">Subscribe</button>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;