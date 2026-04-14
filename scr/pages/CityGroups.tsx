
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
// Fixed: Imported CommunitySubNav as a default import from the shared components directory
import CommunitySubNav from '../components/CommunitySubNav';

const CityGroups: React.FC = () => {
  const groups = [
    { name: "Latinos in Toronto", members: 1205, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=300" },
    { name: "Tech Newcomers GTA", members: 850, img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300" },
    { name: "Indian Moms Connect", members: 2100, img: "https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&q=80&w=300" },
    { name: "Nigerian Professionals", members: 640, img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=300" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-20">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Community Groups & Homestays</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl leading-relaxed">
            Find your tribe and a place to call home.
          </p>
        </header>

        <CommunitySubNav />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groups.map((group, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl transition-all"
                >
                    <img src={group.img} alt={group.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6">
                        <h3 className="text-white font-black text-2xl mb-1">{group.name}</h3>
                        <p className="text-white/80 text-sm font-medium">{group.members} Members</p>
                        <button className="mt-5 w-full py-3 bg-white/20 backdrop-blur-xl text-white rounded-xl font-bold border border-white/20 hover:bg-white hover:text-slate-900 transition-all">
                            Join Group
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default CityGroups;
