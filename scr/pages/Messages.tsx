import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number>(1);
  const [messageText, setMessageText] = useState('');

  const chats = [
    {
      id: 1,
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      lastMessage: "The visa docs look good! I've revi...",
      time: "JUST NOW",
      unread: false,
      online: true
    },
    {
      id: 2,
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      lastMessage: "Are you free for a call at 3 PM?",
      time: "2H AGO",
      unread: false,
      online: false
    },
    {
      id: 3,
      name: "Aisha Khan",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
      lastMessage: "I've sent the application links.",
      time: "1D AGO",
      unread: false,
      online: true
    },
    {
      id: 4,
      name: "Marcus Thorne",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      lastMessage: "Good luck with the interview!",
      time: "3D AGO",
      unread: false,
      online: false
    }
  ];

  const messages = [
    { id: 1, type: 'text', sender: 'mentor', text: 'Hello! How is the visa application process going? Have you gathered all the required work history documents?', time: '10:15 AM' },
    { id: 2, type: 'text', sender: 'user', text: 'Hi Elena! Yes, I\'ve managed to get everything except my reference letter from my previous employer in Toronto.', time: '10:20 AM' },
    { id: 3, type: 'text', sender: 'mentor', text: 'Don\'t worry too much about that. Usually, a signed contract and bank statements showing salary deposits can serve as secondary proof if the employer is unresponsive.', time: '10:22 AM' },
    { id: 4, type: 'file', sender: 'mentor', fileName: 'Alternative_Proof_Guide.pdf', fileSize: '1.2 MB', text: "The visa docs look good! I've reviewed the latest version you uploaded and added some notes in this guide for your specific situation.", time: '10:25 AM' },
    { id: 5, type: 'text', sender: 'user', text: 'This is incredibly helpful! Thank you so much for the guide. I\'ll read through it and update my folder tonight.', time: '10:30 AM' },
  ];

  const currentChat = chats.find(c => c.id === selectedChat);

  return (
    <div className="h-screen bg-[#f8fafc] dark:bg-background-dark flex flex-col overflow-hidden font-sans">
      <Navbar />

      <main className="flex-1 flex overflow-hidden w-full">
        {/* Left Sidebar */}
        <aside className="w-80 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-slate-900 shrink-0">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-black text-slate-900 dark:text-white">Mentor Messages</h1>
              <button className="text-primary">
                <span className="material-symbols-outlined">edit_square</span>
              </button>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input 
                type="text" 
                placeholder="Filter conversations" 
                className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 dark:text-white"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`w-full p-4 flex gap-4 transition-all border-l-4 ${
                  selectedChat === chat.id 
                    ? 'bg-blue-50/50 dark:bg-primary/5 border-primary' 
                    : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="relative shrink-0">
                  <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-sm font-black text-slate-900 dark:text-white truncate">{chat.name}</h3>
                    <span className="text-[9px] font-black text-slate-400 uppercase whitespace-nowrap">{chat.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate leading-tight">
                    {chat.lastMessage}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="p-6 mt-auto">
            <button className="w-full h-12 bg-primary text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
              <span className="material-symbols-outlined">person_add</span>
              Find New Mentor
            </button>
          </div>
        </aside>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-slate-50/20 dark:bg-slate-950/20 overflow-hidden relative">
          {currentChat && (
            <>
              {/* Chat Header */}
              <header className="h-[72px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={currentChat.avatar} alt={currentChat.name} className="w-10 h-10 rounded-full object-cover" />
                    {currentChat.online && (
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-slate-900 dark:text-white leading-tight">{currentChat.name}</h2>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Online</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                    <span className="material-symbols-outlined text-xl">videocam</span>
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                    <span className="material-symbols-outlined text-xl">more_vert</span>
                  </button>
                </div>
              </header>

              {/* Messages Content */}
              <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
                <div className="flex justify-center">
                  <span className="bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">Monday, Oct 23</span>
                </div>

                {messages.map((msg) => (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <img src={msg.sender === 'user' ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnLL3fM3zXIgLlqn-dq7dABssESdgtibTujp3Tt_yQ4qoFWHlCoRf6u0n9yVMoIkZNSVAcsBxM5hmnEM702rqNuuTbyoNemTwf7IYGy4uJLCa_0AQ5deJNxr2vSjRXYnPS-GxXcclY_3NRNmcXlOEaitxZ88HQzhHTPd7hkknIMEStSVVQUzOpDGcXrAPkhtqlHOH4lV6NjOPZkxt94i-vZRvL9uTywtKKVRTegmHjoBlpktSLQWA93R8zuNRVlHO0fLwWnF3W3LY' : currentChat.avatar} className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" alt="Avatar" />
                    
                    <div className={`flex flex-col max-w-[65%] space-y-1 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                      {msg.type === 'file' ? (
                        <div className="bg-[#f1f5f9] dark:bg-slate-800/80 p-1 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden w-full">
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl flex items-center justify-between mb-4 shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined">description</span>
                              </div>
                              <div>
                                <p className="text-xs font-black text-slate-900 dark:text-white leading-tight">{msg.fileName}</p>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{msg.fileSize}</p>
                              </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-900 transition-colors">
                              <span className="material-symbols-outlined">download</span>
                            </button>
                          </div>
                          <div className="px-5 pb-5 pt-1">
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{msg.text}</p>
                          </div>
                        </div>
                      ) : (
                        <div className={`p-4 rounded-2xl text-sm font-medium shadow-sm leading-relaxed ${
                          msg.sender === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-[#f1f5f9] dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                        }`}>
                          {msg.text}
                        </div>
                      )}
                      <span className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest pt-0.5">{msg.time}</span>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
                  <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2.5 rounded-full flex gap-1">
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="p-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="relative flex items-center gap-2 bg-[#f1f5f9] dark:bg-slate-800 p-2 rounded-[20px]">
                  <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">attach_file</span>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">sentiment_satisfied</span>
                  </button>
                  <input 
                    type="text" 
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder={`Type your message to ${currentChat.name.split(' ')[0]}...`} 
                    className="flex-1 h-11 bg-transparent border-none text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 outline-none"
                  />
                  <button 
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                      messageText.trim() ? 'bg-primary text-white shadow-lg' : 'bg-transparent text-slate-300'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[26px]">send</span>
                  </button>
                </div>
                <div className="flex justify-between items-center mt-4 px-2">
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Press Enter to send, Shift + Enter for new line</p>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-500/60 uppercase tracking-widest">
                    Encryption Active <span className="material-symbols-outlined text-[12px]">lock</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Messages;