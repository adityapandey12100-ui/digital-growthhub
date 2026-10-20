import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { articles } from './data/articles';
import { homeFaqs } from './data/homepageData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      if (basePath && basePath !== currentPath) {
        window.history.pushState({}, '', path);
        setCurrentPath(basePath);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route matching
  const renderCurrentPage = () => {
    // Normalize path by stripping trailing slash if not root
    const cleanPath = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    // Homepage
    if (cleanPath === '/' || cleanPath === '') {
      return (
        <>
          <SEOHead
            title="Digital Growth Hub | Learn SEO, Content Marketing & Digital Growth"
            description="Master organic growth with in-depth digital marketing guides, search engine optimization best practices, strategic keyword research, and Answer Engine Optimization (AEO)."
            canonicalPath="/"
            faqs={homeFaqs}
            type="website"
          />
          <HomePage onNavigate={navigateTo} />
        </>
      );
    }

    // Single Article Routes
    if (cleanPath.startsWith('/blog/')) {
      const slug = cleanPath.replace('/blog/', '');
      const article = articles.find((a) => a.slug === slug);

      if (article) {
        return (
          <>
            <SEOHead
              title={article.seoTitle}
              description={article.metaDescription}
              canonicalPath={`/blog/${article.slug}`}
              article={article}
              type="article"
            />
            <ArticlePage article={article} onNavigate={navigateTo} />
          </>
        );
      }
    }

    // Blog Catalog Index
    if (cleanPath === '/blog') {
      return (
        <>
          <SEOHead
            title="All Master Growth Guides | Digital Growth Hub"
            description="Explore our complete library of comprehensive digital marketing, SEO, keyword research, and content strategy master guides."
            canonicalPath="/blog"
            type="website"
          />
          <BlogIndexPage onNavigate={navigateTo} />
        </>
      );
    }

    // About Page
    if (cleanPath === '/about') {
      return (
        <>
          <SEOHead
            title="About Us & Editorial Standards | Digital Growth Hub"
            description="Learn about the mission, data-driven methodologies, and senior search engine strategists behind Digital Growth Hub."
            canonicalPath="/about"
            type="website"
          />
          <AboutPage onNavigate={navigateTo} />
        </>
      );
    }

    // Contact Page
    if (cleanPath === '/contact') {
      return (
        <>
          <SEOHead
            title="Contact Editorial Team | Digital Growth Hub"
            description="Get in touch with the editors and organic growth architects at Digital Growth Hub for inquiries, editorial feedback, or collaborations."
            canonicalPath="/contact"
            type="website"
          />
          <ContactPage onNavigate={navigateTo} />
        </>
      );
    }

    // 404 Fallback
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-5xl font-black text-[#0A192F]">404</h1>
        <h2 className="text-2xl font-bold text-slate-800">Page Not Found</h2>
        <p className="text-slate-600">
          The requested guide or page does not exist. Explore our featured guides or return to the homepage.
        </p>
        <button
          onClick={() => navigateTo('/')}
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700"
        >
          Return to Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
