import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const CultureEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Multicultural Food Festival",
      date: "Nov 12, 2023",
      location: "Nathan Phillips Square, Toronto",
      desc: "Experience tastes from around the world right in the heart of the city. Live music and workshops included.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
      type: "Festival",
      price: "Free"
    },
    {
      id: 2,
      title: "Newcomer Art Workshop",
      date: "Nov 15, 2023",
      location: "Community Arts Center",
      desc: "An expressive session for newcomers to share their journey through painting and sculpture. All materials provided.",
      image: "https://images.unsplash.com/photo-1460666819451-7410f5af1397?auto=format&fit=crop&q=80&w=800",
      type: "Workshop",
      price: "$10"
    },
    {
      id: 3,
      title: "Cultural Exchange Meetup",
      date: "Nov 18, 2023",
      location: "Central Library Hub",
      desc: "Connect with locals and other newcomers in an informal setting. Practice language skills and share traditions.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
      type: "Social",
      price: "Free"
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white mb-2">Culture & Events</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl">Discover local traditions, attend events, and build connections in your new home.</p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="md:w-1/3 h-56 md:h-auto overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-2 text-center min-w-[60px] shadow-sm">
                  <span className="block text-[10px] font-bold text-primary uppercase">Nov</span>
                  <span className="block text-xl font-black text-slate-900 dark:text-white">{10 + event.id * 3}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                      {event.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${event.price === 'Free' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-700'}`}>
                      {event.price}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {event.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">event</span>
                      {event.date}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="flex-1 md:flex-none px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                    Book Event
                  </button>
                  <button className="p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CultureEvents;