import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ProfileSettings: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Profile Settings</h1>
          
          <div className="bg-white dark:bg-[#1a2632] rounded-[32px] shadow-sm border border-slate-200 dark:border-slate-700 p-8 space-y-8">
              <div className="flex items-center gap-6">
                  <div className="relative group">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnLL3fM3zXIgLlqn-dq7dABssESdgtibTujp3Tt_yQ4qoFWHlCoRf6u0n9yVMoIkZNSVAcsBxM5hmnEM702rqNuuTbyoNemTwf7IYGy4uJLCa_0AQ5deJNxr2vSjRXYnPS-GxXcclY_3NRNmcXlOEaitxZ88HQzhHTPd7hkknIMEStSVVQUzOpDGcXrAPkhtqlHOH4lV6NjOPZkxt94i-vZRvL9uTywtKKVRTegmHjoBlpktSLQWA93R8zuNRVlHO0fLwWnF3W3LY" className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-800 object-cover" alt="Profile" />
                    <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white">photo_camera</span>
                    </button>
                  </div>
                  <div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">Alejandro Vargas</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Joined October 2023</p>
                      <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                        Change Photo
                      </button>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">First Name</label>
                      <input type="text" defaultValue="Alejandro" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                      <input type="text" defaultValue="Vargas" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
              </div>

              <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Bio</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 resize-none" defaultValue="New to Toronto, looking to connect with others in tech!"></textarea>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-950/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span className="material-symbols-outlined">logout</span>
                    Log Out
                  </button>
                  <button className="w-full sm:w-auto bg-primary text-white px-10 py-3 rounded-xl font-black hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 transform active:scale-95">
                    Save Changes
                  </button>
              </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileSettings;