import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ServicesHub from './pages/ServicesHub';
import ServiceDetail from './pages/services/ServiceDetail';
import AIVoiceAgent from './pages/services/AIVoiceAgent';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/services/ai-voice-agent" element={<AIVoiceAgent />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projects/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Redirect streamline to home */}
        <Route path="/streamline" element={<Navigate to="/" replace />} />
        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;