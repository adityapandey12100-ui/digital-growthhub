import React, { useState, useEffect } from 'react';
import {
  Clock,
  Calendar,
  Share2,
  Check,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Bookmark,
  ChevronRight
} from 'lucide-react';
import { Article } from '../types';
import { articles } from '../data/articles';
import { TableOfContents } from '../components/TableOfContents';
import { AeoSnippetBox } from '../components/AeoSnippetBox';
import { ArticleCard } from '../components/ArticleCard';
import { NewsletterSection } from '../components/NewsletterSection';

interface ArticlePageProps {
  article: Article;
  onNavigate: (path: string) => void;
}

export function ArticlePage({ article, onNavigate }: ArticlePageProps) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedPublished = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const formattedModified = new Date(article.modifiedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Related articles
  const relatedArticles = articles.filter(a => article.relatedSlugs.includes(a.slug));

  return (
    <div>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-blue-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12">
        {/* Breadcrumb & Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <nav className="flex items-center gap-2 font-medium" aria-label="Breadcrumb">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <a
              href="/blog"
              onClick={(e) => { e.preventDefault(); onNavigate('/blog'); }}
              className="hover:text-blue-600 transition-colors"
            >
              Blog
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
              {article.title}
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Share Guide</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Article Header */}
        <header className="space-y-6 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white">
              {article.category}
            </span>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              {article.readingTime}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              • {article.wordCount.toLocaleString()} words
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Author Card */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
            <div className="flex items-center gap-3.5">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">{article.author.name}</p>
                <p className="text-xs text-slate-500">{article.author.role}</p>
              </div>
            </div>

            <div className="text-xs text-slate-500 space-y-0.5 text-right">
              <p>Published: <strong className="text-slate-700">{formattedPublished}</strong></p>
              <p>Updated: <strong className="text-slate-700">{formattedModified}</strong></p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-slate-900 aspect-video">
          <img
            src={article.featuredImage}
            alt={article.imageAlt}
            width={1200}
            height={675}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-blue-50/70 border border-blue-200/80 rounded-3xl space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-[#0A192F]">
              Executive Summary & Key Takeaways
            </h3>
          </div>

          <ul className="grid grid-cols-1 gap-2.5 pt-1">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Layout with Sidebar Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Main Article Text */}
          <div className="lg:col-span-8 article-prose">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mt-10 mb-4 tracking-tight">
                  {section.title}
                </h2>

                {/* Direct Answer snippet box for Question H2s */}
                {section.isQuestion && section.directAnswer && (
                  <AeoSnippetBox
                    question={section.title}
                    answer={section.directAnswer}
                  />
                )}

                {section.content.map((paragraph, pIdx) => {
                  // Internal link rendering helper
                  const renderFormattedText = (text: string) => {
                    // Quick markdown link parser for [text](/url)
                    const parts = [];
                    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
                    let lastIndex = 0;
                    let match;

                    while ((match = linkRegex.exec(text)) !== null) {
                      if (match.index > lastIndex) {
                        parts.push(text.substring(lastIndex, match.index));
                      }
                      const linkText = match[1];
                      const linkHref = match[2];
                      parts.push(
                        <a
                          key={match.index}
                          href={linkHref}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(linkHref);
                          }}
                          className="text-blue-600 font-semibold hover:underline decoration-blue-400"
                        >
                          {linkText}
                        </a>
                      );
                      lastIndex = linkRegex.lastIndex;
                    }
                    if (lastIndex < text.length) {
                      parts.push(text.substring(lastIndex));
                    }
                    return parts.length > 0 ? parts : text;
                  };

                  return (
                    <p key={pIdx} className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                      {renderFormattedText(paragraph)}
                    </p>
                  );
                })}

                {/* Subsections if any */}
                {section.subsections && section.subsections.map((sub) => (
                  <div key={sub.id} id={sub.id} className="mt-6 mb-6 pl-4 border-l-2 border-blue-200">
                    <h3 className="text-xl font-bold text-[#0A192F] mb-3">
                      {sub.title}
                    </h3>
                    {sub.content.map((subP, sIdx) => (
                      <p key={sIdx} className="text-slate-700 leading-relaxed text-base sm:text-lg mb-3">
                        {subP}
                      </p>
                    ))}
                  </div>
                ))}
              </section>
            ))}

            {/* Embedded Supporting Image */}
            {article.secondaryImage && (
              <div className="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={article.secondaryImage}
                  alt={article.secondaryImageAlt || 'Supporting digital marketing workflow diagram'}
                  width={900}
                  height={500}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 text-center font-medium">
                  {article.secondaryImageAlt}
                </div>
              </div>
            )}

            {/* Article Specific FAQs */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-14 pt-8 border-t border-slate-200 space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">
                    Frequently Asked Questions about this Topic
                  </h3>
                </div>

                <div className="space-y-4">
                  {article.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                      <h4 className="font-bold text-base text-[#0A192F]">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Biography Section */}
            <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                width={72}
                height={72}
                className="w-18 h-18 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Article Author</p>
                <h4 className="text-lg font-bold text-[#0A192F]">{article.author.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{article.author.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">{article.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              <TableOfContents sections={article.sections} />

              {/* Target keywords badge */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Target Search Queries
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {article.targetKeywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Navigation Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-md space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                  Next Step in Curriculum
                </span>
                <h4 className="text-lg font-extrabold leading-snug">
                  Continue Your Organic Learning Journey
                </h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Deepen your strategy by exploring the companion guides in our growth collection.
                </p>
                {relatedArticles.slice(0, 1).map((rel) => (
                  <button
                    key={rel.slug}
                    onClick={() => onNavigate(`/blog/${rel.slug}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 font-bold text-xs hover:bg-blue-50 transition-colors flex items-center justify-between"
                  >
                    <span className="truncate">{rel.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="pt-16 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Recommended Reading</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                  Related Growth Guides
                </h3>
              </div>
              <button
                onClick={() => onNavigate('/blog')}
                className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.slug} article={rel} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Callout */}
        <div className="pt-8">
          <NewsletterSection />
        </div>
      </article>
    </div>
  );
}
