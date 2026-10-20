import React from 'react';
import { TrendingUp, ArrowUpRight, Mail, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLink = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Digital Growth<span className="text-blue-400">Hub</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              <strong>Digital Growth Hub:</strong> Learn SEO, Content Marketing and Digital Growth through deep-dive educational guides, Answer Engine Optimization (AEO) frameworks, and battle-tested organic strategies.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Vercel Ready
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> AEO Verified
              </span>
              <span className="inline-flex items-center gap-1">
                <FileText className="w-4 h-4 text-cyan-400" /> Schema.org Validated
              </span>
            </div>
          </div>

          {/* Core Guides */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Flagship Guides
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/blog/seo-guide-for-beginners"
                  onClick={(e) => handleLink('/blog/seo-guide-for-beginners', e)}
                  className="hover:text-blue-400 transition-colors flex items-center justify-between group"
                >
                  <span>SEO for Beginners</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/blog/keyword-research-guide"
                  onClick={(e) => handleLink('/blog/keyword-research-guide', e)}
                  className="hover:text-blue-400 transition-colors flex items-center justify-between group"
                >
                  <span>Keyword Research</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/blog/content-marketing-guide"
                  onClick={(e) => handleLink('/blog/content-marketing-guide', e)}
                  className="hover:text-blue-400 transition-colors flex items-center justify-between group"
                >
                  <span>Content Marketing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => handleLink('/blog', e)}
                  className="hover:text-blue-400 transition-colors"
                >
                  All Growth Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Growth Topics */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Niches & Focus
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Search Intent Analysis</li>
              <li>Answer Engine Optimization (AEO)</li>
              <li>Technical SEO Auditing</li>
              <li>Core Web Vitals & Speed</li>
              <li>Editorial Content Calendars</li>
              <li>GA4 & Search Console ROI</li>
            </ul>
          </div>

          {/* Quick Links & Technical */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Company & SEO
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink('/about', e)}
                  className="hover:text-blue-400 transition-colors"
                >
                  About the Hub
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink('/contact', e)}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Editorial Team
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  robots.txt Directives
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Digital Growth Hub. All rights reserved. Built with React, TypeScript, and Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href="/" onClick={(e) => handleLink('/', e)} className="hover:text-slate-400">Home</a>
            <a href="/blog" onClick={(e) => handleLink('/blog', e)} className="hover:text-slate-400">Blog</a>
            <a href="/about" onClick={(e) => handleLink('/about', e)} className="hover:text-slate-400">About</a>
            <a href="/contact" onClick={(e) => handleLink('/contact', e)} className="hover:text-slate-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
