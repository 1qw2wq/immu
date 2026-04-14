import React from 'react';
import { motion } from 'framer-motion';
import MentorSidebar from '../../components/MentorSidebar';

const MentorEarnings: React.FC = () => {
  const transactions = [
    { date: 'Oct 24, 2023', mentee: 'Maria Gonzales', service: 'Paperwork Review', status: 'Paid', amount: 150, avatar: 'MG', color: 'bg-red-100 text-red-600' },
    { date: 'Oct 22, 2023', mentee: 'John Doe', service: 'Mock Interview', status: 'Pending', amount: 75, avatar: 'JD', color: 'bg-cyan-100 text-cyan-600' },
    { date: 'Oct 15, 2023', mentee: 'Payout to Chase Bank ****8821', service: 'Withdrawal', status: 'Completed', amount: -500, avatar: 'bank', color: 'bg-slate-100 text-slate-400' },
    { date: 'Oct 12, 2023', mentee: 'Amina Khan', service: '1:1 Consultation', status: 'Paid', amount: 120, avatar: 'AK', color: 'bg-purple-100 text-purple-600' },
    { date: 'Oct 10, 2023', mentee: 'Li Zhao', service: 'Resume Review', status: 'Paid', amount: 80, avatar: 'LZ', color: 'bg-amber-100 text-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <MentorSidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Earnings & Payouts</h1>
            <p className="text-slate-500 font-medium">Track your income, manage withdrawals, and view history.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-lg">download</span> Export Report
            </button>
            <button className="px-8 py-3 bg-primary text-white rounded-2xl text-xs font-black shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all">
              Withdraw Funds
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-10 right-10 w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5">Available Balance</p>
            <h4 className="text-4xl font-black text-slate-900 mb-5">$1,450.00</h4>
            <p className="text-xs font-black text-green-500 flex items-center gap-1.5 bg-green-50 w-fit px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">trending_up</span> 12% vs last month
            </p>
          </div>
          <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-10 right-10 w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-2xl">savings</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5">Total Earned (YTD)</p>
            <h4 className="text-4xl font-black text-slate-900 mb-5">$12,840.00</h4>
            <p className="text-xs font-black text-green-500 flex items-center gap-1.5 bg-green-50 w-fit px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">trending_up</span> 8% vs last year
            </p>
          </div>
          <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-10 right-10 w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-2xl">hourglass_empty</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5">Pending Payouts</p>
            <h4 className="text-4xl font-black text-slate-900 mb-5">$320.00</h4>
            <p className="text-xs font-bold text-slate-400 italic">Processing by Nov 15, 2023</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-[48px] border border-slate-200 shadow-sm p-12 mb-12">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Earnings History</h3>
            <div className="flex bg-slate-100/50 p-1 rounded-2xl border border-slate-100">
              {['6 Months', '1 Year', 'All Time'].map((t) => (
                <button 
                  key={t}
                  className={`px-6 py-2.5 text-[10px] font-black rounded-xl uppercase tracking-widest transition-all ${
                    t === '6 Months' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="h-72 w-full relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 200">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#137fec" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#137fec" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,150 L150,140 L300,160 L450,110 L600,125 L750,90 L900,110 L1000,105" fill="url(#chartGradient)" />
              <path d="M0,150 L150,140 L300,160 L450,110 L600,125 L750,90 L900,110 L1000,105" fill="none" stroke="#137fec" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="900" cy="110" r="8" fill="#137fec" stroke="white" strokeWidth="3" />
              <rect x="880" y="50" width="80" height="35" rx="10" fill="#0f172a" />
              <text x="920" y="73" textAnchor="middle" fill="white" fontSize="13" fontWeight="900">$2,400</text>
            </svg>
            <div className="flex justify-between mt-10 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] border-t border-slate-50 pt-6">
              <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden mb-20">
          <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-white">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Transaction History</h3>
            <div className="flex gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                <input 
                  type="text" 
                  placeholder="Search by mentee..." 
                  className="pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl text-xs outline-none focus:ring-1 focus:ring-primary/20 w-72" 
                />
              </div>
              <button className="px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-xs font-black text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-all">
                <span className="material-symbols-outlined text-lg">filter_alt</span> Filter
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/30">
                <th className="px-10 py-5">Date</th>
                <th className="px-10 py-5">Mentee / Description</th>
                <th className="px-10 py-5">Service</th>
                <th className="px-10 py-5">Status</th>
                <th className="px-10 py-5 text-right">Amount</th>
                <th className="px-10 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((t, i) => (
                <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-10 py-6 text-sm font-bold text-slate-900">{t.date}</td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      {t.avatar === 'bank' ? (
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                          <span className="material-symbols-outlined text-lg">account_balance</span>
                        </div>
                      ) : (
                        <div className={`w-9 h-9 rounded-xl ${t.color} flex items-center justify-center font-black text-xs shadow-sm`}>
                          {t.avatar}
                        </div>
                      )}
                      <p className="text-sm font-black text-slate-900 leading-tight">{t.mentee}</p>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{t.service}</td>
                  <td className="px-10 py-6">
                    <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      t.status === 'Paid' ? 'bg-green-50 text-green-600' : 
                      t.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className={`px-10 py-6 text-right font-black text-sm ${t.amount < 0 ? 'text-slate-900' : 'text-green-500'}`}>
                    {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="text-slate-300 hover:text-slate-900 transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-10 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
            <p>Showing 1 to 5 of 42 results</p>
            <div className="flex items-center gap-10">
              <button className="flex items-center gap-2 hover:text-primary transition-colors disabled:opacity-30" disabled>Previous</button>
              <button className="flex items-center gap-2 text-slate-900 hover:text-primary transition-colors">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorEarnings;