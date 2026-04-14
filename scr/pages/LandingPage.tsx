import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl font-bold">flight_takeoff</span>
              </div>
              <h2 className="text-xl font-black tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Immigration Platform</h2>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
              <button onClick={() => scrollToSection('features')} className="text-sm font-bold hover:text-primary transition-colors">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-bold hover:text-primary transition-colors">How it Works</button>
              <button onClick={() => scrollToSection('success')} className="text-sm font-bold hover:text-primary transition-colors">Success Stories</button>
              <Link className="text-sm font-bold hover:text-primary transition-colors" to="/mentors">Mentors</Link>
            </nav>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/login')}
                className="hidden text-sm font-black md:block px-4 py-2 hover:text-primary transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/onboarding')}
                className="rounded-xl bg-primary px-6 py-2.5 text-sm font-black text-white shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden px-6 py-16 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-[1280px]">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="flex flex-col gap-8"
                >
                  <motion.div variants={itemVariants} className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary">
                    <span className="material-symbols-outlined text-sm">verified</span> Verified Immigration Support
                  </motion.div>
                  <motion.h1 variants={itemVariants} className="text-5xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                    Your Journey to a New Home, <span className="text-primary">Guided by AI</span> & Community
                  </motion.h1>
                  <motion.p variants={itemVariants} className="max-w-[540px] text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                    Navigate the complex immigration process with AI-powered drafting tools and verified expert mentors. Your move, simplified, secure, and supported.
                  </motion.p>
                  <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => navigate('/onboarding')}
                      className="rounded-2xl bg-primary px-8 py-4 text-base font-black text-white shadow-2xl shadow-primary/25 hover:translate-y-[-2px] transition-all"
                    >
                      Start Your Application
                    </button>
                    <button onClick={() => scrollToSection('success')} className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-4 text-base font-black hover:bg-slate-50 transition-all">
                      <span className="material-symbols-outlined">play_circle</span> Watch Success Stories
                    </button>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-3">
                      <img className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Professional 1" />
                      <img className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Professional 2" />
                      <img className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" alt="Professional 3" />
                    </div>
                    <p className="text-sm font-bold text-slate-500">Joined by 12,000+ new immigrants this month</p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[40px] bg-slate-200 shadow-2xl relative">
                    <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhVeESdfI3yorprBBQwaxsrJPhY2V_idTfhPyaburbz5OCZQRRjyJj6k2krUcnbTg-6tKoV6PblYP-oeFyRDsynY153wWrsEGHBnk7gbMfqYcWio9I8Vygb0-XrfSACQxN4qVUnBkYqNG6i9_u23uTO8xOkDMjhhtNMXKa8SngCWUFjZdHr9niDyIlRM1IJ6qjgqRhYRELoFnizFlxH81XBjYKXC-KrSyYJ_uxhGhPjP-ekwKHDkLRiH6P9dJSdQSt5O1Go88PyBc" alt="Relocation vision" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  {/* Floating Notification Card */}
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute -bottom-8 -left-8 max-w-[280px] rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800 md:-bottom-12 md:-left-12"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <p className="text-base font-black text-slate-900 dark:text-white mb-1">Visa Approved!</p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed italic">"Thanks to Immigration Platform, I moved to Vancouver in 4 months." - Elena R.</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="bg-white dark:bg-slate-950 px-6 py-24 lg:px-10 scroll-mt-20" id="features">
            <div className="mx-auto max-w-[1280px]">
              <div className="mb-20 text-center">
                <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">Powerful Tools for Your Transition</h2>
                <p className="mx-auto max-w-[600px] text-lg text-slate-500 font-medium">Everything you need to navigate your immigration journey with confidence and speed.</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: 'description', title: 'AI Paperwork Assistant', desc: 'Draft complex forms and legal paperwork in minutes with our intelligent drafting engine.' },
                  { icon: 'groups', title: 'Expert Mentorship', desc: 'Connect with verified mentors who have successfully navigated the process themselves.' },
                  { icon: 'forum', title: 'Community Hub', desc: 'Join discussion forums and city-based groups to find your tribe in your new home.' },
                  { icon: 'translate', title: 'Document Translation', desc: 'High-accuracy AI translation backed by human verification for legal peace of mind.' }
                ].map((feature, idx) => (
                  <motion.div 
                    key={feature.title}
                    whileHover={{ y: -10 }}
                    className="group rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-primary/30 hover:bg-white hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/50"
                  >
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                    </div>
                    <h3 className="mb-4 text-xl font-black">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="px-6 py-24 lg:px-10 scroll-mt-20" id="how-it-works">
            <div className="mx-auto max-w-[1280px]">
              <h2 className="mb-20 text-center text-4xl font-black tracking-tight md:text-5xl">Your Path in 3 Simple Steps</h2>
              <div className="relative grid gap-16 md:grid-cols-3">
                {/* Connecting Line (Desktop) */}
                <div className="absolute top-12 left-0 hidden h-[2px] w-full bg-slate-200 dark:bg-slate-800 md:block"></div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white text-primary shadow-2xl ring-8 ring-background-light dark:bg-slate-900 dark:ring-background-dark border border-slate-100">
                    <span className="material-symbols-outlined text-4xl">person_add</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-black">1. Sign Up & Profile</h3>
                  <p className="text-slate-500 font-medium">Create your profile and upload necessary documents securely to our encrypted vault.</p>
                </div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white text-primary shadow-2xl ring-8 ring-background-light dark:bg-slate-900 dark:ring-background-dark border border-slate-100">
                    <span className="material-symbols-outlined text-4xl">handshake</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-black">2. Get Matched</h3>
                  <p className="text-slate-500 font-medium">Our AI pairs you with the right legal tools and a dedicated human mentor from your target city.</p>
                </div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white shadow-2xl ring-8 ring-background-light dark:bg-slate-900 dark:ring-background-dark">
                    <span className="material-symbols-outlined text-4xl text-white">flight_takeoff</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">3. Immigrate</h3>
                  <p className="text-slate-500 font-medium">Complete your paperwork, attend final interviews, and start your new life abroad with confidence.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-primary/5 px-6 py-24 lg:px-10 scroll-mt-20" id="success">
            <div className="mx-auto max-w-[1280px]">
              <div className="mb-20 text-center">
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">Success Stories</h2>
                <p className="mt-4 text-lg text-slate-500 font-medium">Join thousands who have successfully started their new chapters.</p>
              </div>
              <div className="grid gap-10 md:grid-cols-3">
                {[
                  { name: 'Aaliyah K.', origin: 'Lagos to Toronto', quote: '"The AI form assistant saved me hundreds of hours of research. I felt like I had a legal team in my pocket."', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150' },
                  { name: 'Marco S.', origin: 'Madrid to Sydney', quote: '"My mentor was incredible. She showed me exactly which neighborhoods were best for my family\'s needs."', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150' },
                  { name: 'Ji-Min H.', origin: 'Seoul to London', quote: '"The community hub helped me find a temporary apartment before I even landed. Total lifesaver!"', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150' }
                ].map((testimonial) => (
                  <div key={testimonial.name} className="rounded-[32px] bg-white p-10 shadow-sm border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                    <div className="mb-8 flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined fill-current">star</span>
                      ))}
                    </div>
                    <p className="mb-10 text-xl font-medium italic leading-relaxed text-slate-700 dark:text-slate-300">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <img className="h-14 w-14 rounded-full object-cover border-2 border-slate-50 dark:border-slate-800" src={testimonial.img} alt={testimonial.name} />
                      <div>
                        <p className="font-black text-slate-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{testimonial.origin}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-[1280px]">
              <div className="relative overflow-hidden rounded-[48px] bg-primary px-8 py-20 text-center text-white lg:py-28 shadow-3xl shadow-primary/30">
                {/* Abstract Background Decoration */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 C 20 0 50 0 100 100" fill="transparent" stroke="white" strokeWidth="0.5"></path>
                    <path d="M0 80 C 30 20 60 20 100 80" fill="transparent" stroke="white" strokeWidth="0.5"></path>
                  </svg>
                </div>
                <div className="relative z-10 mx-auto max-w-[800px]">
                  <h2 className="mb-8 text-5xl font-black tracking-tight md:text-6xl">Ready to Start Your New Life?</h2>
                  <p className="mb-12 text-2xl text-blue-100 font-medium">Join the thousands of successful immigrants who used Immigration Platform to navigate their future.</p>
                  <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <button 
                      onClick={() => navigate('/onboarding')}
                      className="w-full rounded-2xl bg-white px-10 py-5 text-lg font-black text-primary shadow-2xl hover:bg-slate-50 sm:w-auto transition-all transform active:scale-95"
                    >
                      Create Free Account
                    </button>
                    <button 
                      onClick={() => navigate('/mentors')}
                      className="w-full rounded-2xl border-2 border-white/40 px-10 py-5 text-lg font-black text-white hover:bg-white/10 sm:w-auto transition-all transform active:scale-95"
                    >
                      Talk to a Mentor
                    </button>
                  </div>
                  <p className="mt-10 text-sm font-bold text-blue-200/60 uppercase tracking-widest">No credit card required • Secure & Encrypted</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-16 lg:grid-cols-4">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-2xl font-bold">flight_takeoff</span>
                  </div>
                  <h2 className="text-2xl font-black tracking-tight">Immigration Platform</h2>
                </div>
                <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Empowering individuals to move borders and build lives with the power of AI and human connection.</p>
                <div className="flex gap-6">
                  <a className="text-slate-400 hover:text-primary transition-all transform hover:scale-110" href="#"><span className="material-symbols-outlined">public</span></a>
                  <a className="text-slate-400 hover:text-primary transition-all transform hover:scale-110" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                  <a className="text-slate-400 hover:text-primary transition-all transform hover:scale-110" href="#"><span className="material-symbols-outlined">group</span></a>
                </div>
              </div>
              <div>
                <h4 className="mb-8 font-black uppercase tracking-[0.2em] text-[11px] text-slate-400">Platform</h4>
                <ul className="flex flex-col gap-5 text-sm font-bold text-slate-500">
                  <li><Link to="/draft-ai" className="hover:text-primary transition-colors">AI Paperwork</Link></li>
                  <li><Link to="/mentors" className="hover:text-primary transition-colors">Expert Mentors</Link></li>
                  <li><Link to="/translation" className="hover:text-primary transition-colors">Translation Services</Link></li>
                  <li><Link to="/community" className="hover:text-primary transition-colors">Community Groups</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-8 font-black uppercase tracking-[0.2em] text-[11px] text-slate-400">Resources</h4>
                <ul className="flex flex-col gap-5 text-sm font-bold text-slate-500">
                  <li><Link to="/resources" className="hover:text-primary transition-colors">Visa Guides</Link></li>
                  <li><Link to="/groups" className="hover:text-primary transition-colors">City Reviews</Link></li>
                  <li><Link to="/news" className="hover:text-primary transition-colors">Legal Blog</Link></li>
                  <li><Link to="/how-it-works" className="hover:text-primary transition-colors">Success Stories</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-8 font-black uppercase tracking-[0.2em] text-[11px] text-slate-400">Stay Updated</h4>
                <p className="mb-6 text-sm font-medium text-slate-500">Get the latest immigration news and platform updates.</p>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium focus:border-primary focus:ring-primary dark:border-slate-800 dark:bg-slate-900" placeholder="Your email address" type="email" />
                  <button className="h-12 rounded-xl bg-slate-900 px-4 py-2 text-sm font-black text-white hover:bg-slate-800 dark:bg-primary transition-all">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="mt-20 flex flex-col items-center justify-between border-t border-slate-100 pt-10 dark:border-slate-800 md:flex-row">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2024 Immigration Platform AI. All rights reserved.</p>
              <div className="mt-6 flex gap-10 md:mt-0">
                <a className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors" href="#">Privacy Policy</a>
                <a className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors" href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;