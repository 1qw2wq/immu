import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Documents: React.FC = () => {
  const documents = [
    { id: 1, name: "Passport_Alejandro.pdf", type: "Identification", size: "2.4 MB", status: "Uploaded", date: "Oct 12, 2023", icon: "menu_book" },
    { id: 2, name: "Bank_Statement_Sept.pdf", type: "Proof of Funds", size: "1.1 MB", status: "Uploaded", date: "Oct 15, 2023", icon: "account_balance_wallet" },
    { id: 3, name: "National_ID_Scan.jpg", type: "Identification", size: "800 KB", status: "Pending", date: "Oct 20, 2023", icon: "badge" },
    { id: 4, name: "Visa_Application_Form.pdf", type: "Application", size: "4.5 MB", status: "Draft", date: "Oct 22, 2023", icon: "description" },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white mb-2">My Documents</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl">Manage and organize your immigration paperwork in one secure place.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">add_circle</span>
            Upload New
          </button>
        </motion.div>

        {/* Stats & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Storage</p>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">8.8 MB</span>
              <span className="text-sm text-slate-400 mb-1">of 500 MB</span>
            </div>
            <div className="mt-3 w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[2%]"></div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                type="text" 
                placeholder="Search documents..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary" 
              />
            </div>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-600 dark:text-slate-300">
              <option>All Types</option>
              <option>Identification</option>
              <option>Financial</option>
              <option>Educational</option>
            </select>
          </div>
        </div>

        {/* Documents List */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Document Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Added</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined">{doc.icon}</span>
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-900 dark:text-white">{doc.name}</p>
                          <p className="text-xs text-slate-500">{doc.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{doc.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        doc.status === 'Uploaded' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        doc.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                      }`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      {doc.date}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">download</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-8 px-6 text-center text-slate-500 dark:text-slate-400 text-sm">
        © 2023 Immigration AI. All rights reserved.
      </footer>
    </div>
  );
};

export default Documents;