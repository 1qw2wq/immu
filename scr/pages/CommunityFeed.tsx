import React from 'react';
import Navbar from '../components/Navbar';
import CommunitySubNav from '../components/CommunitySubNav';
import { motion } from 'framer-motion';

const CommunityFeed: React.FC = () => {
  const posts = [
    {
        id: 1,
        author: { name: 'Elena Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150' },
        content: 'Just landed my first job in tech here! Big thanks to my mentor Sarah for the interview prep help. Don\'t give up everyone, persistence pays off! 🚀',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
        likes: 124,
        comments: 23,
        time: '2 hours ago'
    },
    {
        id: 2,
        author: { name: 'Raj Patel', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150' },
        content: 'Does anyone know good places to buy authentic Indian spices in the North York area?',
        likes: 15,
        comments: 8,
        time: '5 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Navbar />
      <CommunitySubNav />
      
      <main className="max-w-4xl mx-auto px-6 md:px-10 py-6 w-full flex-1">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Social Feed</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Connect with others sharing your journey.
          </p>
        </header>

        {/* Create Post */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
            <div className="flex gap-4">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnLL3fM3zXIgLlqn-dq7dABssESdgtibTujp3Tt_yQ4qoFWHlCoRf6u0n9yVMoIkZNSVAcsBxM5hmnEM702rqNuuTbyoNemTwf7IYGy4uJLCa_0AQ5deJNxr2vSjRXYnPS-GxXcclY_3NRNmcXlOEaitxZ88HQzhHTPd7hkknIMEStSVVQUzOpDGcXrAPkhtqlHOH4lV6NjOPZkxt94i-vZRvL9uTywtKKVRTegmHjoBlpktSLQWA93R8zuNRVlHO0fLwWnF3W3LY" className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-700" alt="Me" />
                <input type="text" placeholder="Share your experience or ask a question..." className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 focus:ring-2 focus:ring-primary dark:text-white" />
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-bold">
                        <span className="material-symbols-outlined text-[20px]">image</span> Photo
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-bold">
                        <span className="material-symbols-outlined text-[20px]">videocam</span> Video
                    </button>
                </div>
                <button className="bg-primary text-white px-8 py-2 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">Post</button>
            </div>
        </div>

        {/* Feed */}
        <div className="space-y-6 pb-20">
            {posts.map((post, i) => (
                <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                    <div className="p-5 flex items-center gap-3">
                        <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border border-slate-100 dark:border-slate-700" />
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{post.author.name}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{post.time}</p>
                        </div>
                        <button className="ml-auto text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                    </div>
                    
                    <div className="px-6 pb-2">
                        <p className="text-slate-800 dark:text-slate-200 text-base leading-relaxed">{post.content}</p>
                    </div>

                    {post.image && (
                        <div className="mt-4 px-6">
                            <img src={post.image} alt="Post content" className="w-full h-80 object-cover rounded-2xl" />
                        </div>
                    )}

                    <div className="p-5 flex items-center gap-8 mt-2 border-t border-slate-50 dark:border-slate-800">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-[22px]">favorite</span>
                            <span className="text-sm font-bold">{post.likes}</span>
                        </button>
                         <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
                            <span className="text-sm font-bold">{post.comments}</span>
                        </button>
                         <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[22px]">share</span>
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default CommunityFeed;