import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import blogs from '../data/blogs.json';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const blog = useMemo(() => blogs.find(b => b.slug === slug), [slug]);

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | Neuronexa Labs`;
    }
    window.scrollTo(0, 0);
  }, [blog]);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Neuronexa Labs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Neuronexa Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://neuronexalabs.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-teal selection:text-white flex flex-col">
      <Helmet>
        <title>{blog.title} | Neuronexa Labs</title>
        <meta name="description" content={blog.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#2AA7D3] transition-colors text-sm font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all insights
        </Link>

        <article className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-12 mb-12">
          <header className="mb-10 border-b border-slate-100 pb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#2AA7D3]" />
                Neuronexa Labs Team
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#2AA7D3]" />
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </header>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-a:text-[#0F6F94] prose-a:no-underline hover:prose-a:underline">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </article>

        {blog.faqs && blog.faqs.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
            <FAQSection 
              title="Related FAQs"
              description={`Frequently asked questions about ${blog.title.toLowerCase()}`}
              faqs={blog.faqs}
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
