import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();

  const immigrantSteps = [
    {
      title: 'Create Profile',
      desc: 'Tell us about your professional background, language skills, and your relocation goals.',
    },
    {
      title: 'Get Matched',
      desc: 'Our algorithm connects you with a mentor who shares your industry and understands your cultural transition.',
    },
    {
      title: 'Achieve Your Goals',
      desc: 'Receive personalized 1-on-1 guidance on job searching, local networking, and settling into your new community.',
    },
  ];

  const mentorSteps = [
    {
      title: 'Register & Verify',
      desc: 'Complete a quick identity and professional verification to ensure a safe environment for all members.',
    },
    {
      title: 'Connect with Mentees',
      desc: 'Browse and accept mentorship requests from immigrants who can benefit most from your specific expertise.',
    },
    {
      title: 'Earn & Give Back',
      desc: 'Share your journey, build your leadership skills, and earn community credits or honorariums for your time.',
    },
  ];

  const faqs = [
    {
      q: 'Is there a cost for mentees?',
      a: 'Basic matching is free. We offer premium support tiers for specialized legal and documentation assistance.',
    },
    {
      q: 'How are matches made?',
      a: 'Matches are based on industry overlap, language preferences, and the specific hurdles a mentee is currently facing.',
    },
    {
      q: 'How much time is required?',
      a: 'We recommend at least 2 hours per month for a successful mentorship, but mentors can set their own availability.',
    },
    {
      q: 'Are mentors paid?',
      a: 'Most mentors volunteer, but some certified professional mentors receive credits or honorariums through our partner programs.',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header */}
      <header className="px-6 md:px-16 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-50">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[14px]">diversity_2</span>
          </div>
          <h2 className="text-sm font-bold text-slate-900">Immigration Mentorship</h2>
        </div>
        <div className="w-10"></div> {/* Spacer to keep title centered if needed, or simply remove if not */}
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Title */}
        <section className="text-center mb-20 md:mb-28">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">How It Works</h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Your journey to success starts with the right guidance. Whether you're arriving or already established, we make the connection seamless.
          </p>
        </section>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
          {/* For Immigrants */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
              <span className="material-symbols-outlined text-primary text-3xl">emoji_people</span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">For Immigrants</h3>
            </div>
            <div className="space-y-12 relative">
              {/* Timeline Line */}
              <div className="absolute left-[20px] top-[40px] bottom-[20px] w-0.5 bg-slate-100 border-l border-dashed border-primary/30"></div>
              
              {immigrantSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-8">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black shrink-0 shadow-lg shadow-primary/20">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Mentors */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
              <span className="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">For Mentors</h3>
            </div>
            <div className="space-y-12 relative">
               {/* Timeline Line */}
               <div className="absolute left-[20px] top-[40px] bottom-[20px] w-0.5 bg-slate-100 border-l border-dashed border-primary/30"></div>

              {mentorSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-8">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-black shrink-0 shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-16 tracking-tight">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-base font-black text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-blue-50/50 rounded-[40px] border border-blue-100 p-12 text-center"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-primary/20">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Ready to take the first step?</h3>
            <p className="text-slate-500 mb-10 text-sm font-medium">Join thousands of professionals who have already navigated this journey successfully.</p>
            <button 
              onClick={() => navigate(-1)}
              className="px-16 py-5 bg-primary text-white rounded-2xl font-black text-base shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Got it, let's go!
            </button>
          </motion.div>
          <p className="text-center mt-12 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            By clicking, you agree to our Terms of Service and Privacy Policy.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;