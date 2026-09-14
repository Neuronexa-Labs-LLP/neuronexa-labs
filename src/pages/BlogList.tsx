import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import blogs from '../data/blogs.json';
import { ArrowRight, BookOpen } from 'lucide-react';

const BlogList: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog & Deep-Dives | Neuronexa Labs';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-teal selection:text-white flex flex-col">
      <Helmet>
        <title>Blog & Insights | Neuronexa Labs</title>
        <meta name="description" content="Read the latest deep-dives on Enterprise AI, Voice Assistants, and Workflow Automation." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#0F6F94] text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#2AA7D3]" />
            Deep-Dives
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest Insights in Enterprise AI
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore how we're pushing the boundaries of autonomous workflow automation and human-like AI voice systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              to={`/blog/${blog.slug}`}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#2AA7D3]/40 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#0F6F94] transition-colors leading-tight mb-3">
                  {blog.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {blog.metaDescription}
                </p>
                <div className="flex items-center text-[#2AA7D3] font-bold text-sm">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogList;
