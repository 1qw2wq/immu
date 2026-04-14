import React from 'react';
import Navbar from '../components/Navbar';
import CommunitySubNav from '../components/CommunitySubNav';
import { motion } from 'framer-motion';

const Homestay: React.FC = () => {
  const cities = [
    { name: "Toronto", region: "Ontario, Canada", members: "1.2k", groups: 12, img: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=800" },
    { name: "Vancouver", region: "BC, Canada", members: "850", groups: 8, img: "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&q=80&w=800" },
    { name: "New York", region: "NY, USA", members: "2.1k", groups: 24, img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800" },
    { name: "Montreal", region: "Quebec, Canada", members: "540", groups: 5, img: "https://images.unsplash.com/photo-1519178125555-52033626e2e4?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Navbar />
      <CommunitySubNav />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-6 w-full flex-1">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Homestay Communities</h1>
          <div className="max-w-lg relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input type="text" placeholder="Search cities (e.g. Toronto, Vancouver)" className="w-full h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-12 pr-4 outline-none focus:ring-1 focus:ring-primary shadow-sm dark:text-white" />
          </div>
        </header>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Explore Cities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cities.map((city, i) => (
                <motion.div 
                    key={city.name} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur rounded-full text-white text-[10px] font-black">{city.members} Members</div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">{city.name}</h3>
                        <p className="text-sm text-slate-400 font-medium">{city.region}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-bold text-slate-500">{city.groups} active groups</span>
                      <button className="text-primary font-black text-sm hover:underline flex items-center gap-1">View Groups <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4">
             <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Group Leader Profile</h2>
             <div className="bg-white dark:bg-slate-900 p-10 rounded-[48px] border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <div className="relative inline-block mb-6">
                   <div className="w-32 h-32 rounded-full overflow-hidden border-8 border-slate-50 dark:border-slate-800">
                      <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-4 border-white dark:border-slate-900">
                      <span className="material-symbols-outlined text-[16px] font-black">check</span>
                   </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Sarah Jenkins</h3>
                <p className="text-sm font-bold text-primary mb-8">Toronto Community Lead</p>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-10 px-4">
                  "Helping newcomers settle in the GTA for over 5 years. Join our local chat for housing tips, neighborhood guides, and weekly social meetups."
                </p>

                <div className="space-y-4 mb-10 text-left">
                   <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm font-bold">
                      <span className="material-symbols-outlined text-slate-400">groups</span>
                      Managing 1.2k members
                   </div>
                   <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm font-bold">
                      <span className="material-symbols-outlined text-slate-400">schedule</span>
                      Active 2 hours ago
                   </div>
                   <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm font-bold">
                      <span className="material-symbols-outlined text-slate-400">translate</span>
                      English, French, Hindi
                   </div>
                </div>

                <button className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-lg shadow-green-200 dark:shadow-none">
                   <span className="material-symbols-outlined">chat</span>
                   Join WhatsApp Group
                </button>
             </div>
          </aside>
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 mt-20">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">flight_takeoff</span>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">ImmiGuide</h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Empowering newcomers through mentorship, community knowledge, and essential resources to start their journey.</p>
          </div>
          <div className="col-span-1">
            <h5 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">Links</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>Find a Mentor</li>
              <li>Discussion Forum</li>
              <li>Homestay Search</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homestay;