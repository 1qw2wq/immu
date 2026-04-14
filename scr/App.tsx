import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Public/Auth Pages
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import MentorRegistration from './pages/MentorRegistration';
import ImmigrantStep1 from './pages/registration/ImmigrantStep1';
import ImmigrantStep2 from './pages/registration/ImmigrantStep2';
import ImmigrantStep3 from './pages/registration/ImmigrantStep3';
import HowItWorks from './pages/HowItWorks';

// Immigrant Experience
import Dashboard from './pages/Dashboard';
import MentorsDirectory from './pages/MentorsDirectory';
import ResourcesQA from './pages/ResourcesQA';
import CultureEvents from './pages/CultureEvents';
import ProfileSettings from './pages/ProfileSettings';
import DocumentTranslation from './pages/DocumentTranslation';
import VisaDraftAI from './pages/VisaDraftAI';
import Messages from './pages/Messages';
import Documents from './pages/Documents';
import Notifications from './pages/Notifications';

// Community Pages
import CommunityFeed from './pages/CommunityFeed';
import DiscussionForum from './pages/DiscussionForum';
import Homestay from './pages/Homestay';
import News from './pages/News';

// Mentor Experience
import MentorDashboard from './pages/mentor/MentorDashboard';
import MentorReviews from './pages/mentor/MentorReviews';
import MentorSchedule from './pages/mentor/MentorSchedule';
import MentorEarnings from './pages/mentor/MentorEarnings';
import MentorLibrary from './pages/mentor/MentorLibrary';
import MentorSettings from './pages/mentor/MentorSettings';
import MentorMentees from './pages/mentor/MentorMentees';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -5 }}
    transition={{ 
      duration: 0.2, 
      ease: [0.4, 0, 0.2, 1] 
    }}
    className="w-full min-h-screen"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* LANDING / INTRO PAGE - This is the entry point */}
        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
        
        {/* Auth & Onboarding Flow */}
        <Route path="/onboarding" element={<PageTransition><RoleSelection /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/how-it-works" element={<PageTransition><HowItWorks /></PageTransition>} />
        <Route path="/register/mentor" element={<PageTransition><MentorRegistration /></PageTransition>} />
        <Route path="/register/immigrant/step1" element={<PageTransition><ImmigrantStep1 /></PageTransition>} />
        <Route path="/register/immigrant/step2" element={<PageTransition><ImmigrantStep2 /></PageTransition>} />
        <Route path="/register/immigrant/step3" element={<PageTransition><ImmigrantStep3 /></PageTransition>} />

        {/* Protected/Internal Immigrant Views */}
        <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
        <Route path="/documents" element={<PageTransition><Documents /></PageTransition>} />
        <Route path="/mentors" element={<PageTransition><MentorsDirectory /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><ResourcesQA /></PageTransition>} />
        <Route path="/culture" element={<PageTransition><CultureEvents /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><ProfileSettings /></PageTransition>} />
        <Route path="/translation" element={<PageTransition><DocumentTranslation /></PageTransition>} />
        <Route path="/draft-ai" element={<PageTransition><VisaDraftAI /></PageTransition>} />
        <Route path="/messages" element={<PageTransition><Messages /></PageTransition>} />
        <Route path="/notifications" element={<PageTransition><Notifications /></PageTransition>} />
        
        {/* Community & Social */}
        <Route path="/community" element={<PageTransition><CommunityFeed /></PageTransition>} />
        <Route path="/discussions" element={<PageTransition><DiscussionForum /></PageTransition>} />
        <Route path="/groups" element={<PageTransition><Homestay /></PageTransition>} />
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />

        {/* Mentor Experience Views */}
        <Route path="/mentor/dashboard" element={<PageTransition><MentorDashboard /></PageTransition>} />
        <Route path="/mentor/reviews" element={<PageTransition><MentorReviews /></PageTransition>} />
        <Route path="/mentor/schedule" element={<PageTransition><MentorSchedule /></PageTransition>} />
        <Route path="/mentor/earnings" element={<PageTransition><MentorEarnings /></PageTransition>} />
        <Route path="/mentor/library" element={<PageTransition><MentorLibrary /></PageTransition>} />
        <Route path="/mentor/settings" element={<PageTransition><MentorSettings /></PageTransition>} />
        <Route path="/mentor/mentees" element={<PageTransition><MentorMentees /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}