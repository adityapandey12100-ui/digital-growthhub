import { useState } from 'react';
import {
  TrendingUp,
  Search,
  PenTool,
  Target,
  BarChart3,
  Cpu,
  Share2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Zap,
  Globe2,
  Layers
} from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { NewsletterSection } from '../components/NewsletterSection';
import { InteractiveSeoTools } from '../components/InteractiveSeoTools';
import { articles } from '../data/articles';
import { marketingPillars, seoActionTips, popularTopics, homeFaqs } from '../data/homepageData';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Search': return <Search className="w-5 h-5 text-blue-600" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-indigo-600" />;
      case 'Target': return <Target className="w-5 h-5 text-emerald-600" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-cyan-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-violet-600" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-amber-600" />;
      default: return <TrendingUp className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Hero Section */}
      <section className="pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>The Definitive Digital Growth Resource</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A192F] tracking-tight leading-[1.1]">
                Master Organic Growth with Modern <span className="text-blue-600">SEO & Digital Marketing</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Tired of fleeting hacks and expensive ad clicks? Learn proven search engine optimization, tactical keyword research, and high-converting content marketing strategies that compound into permanent business assets.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/blog/seo-guide-for-beginners')}
                  className="px-6 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 active:scale-95 transition-all shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <span>Start with SEO for Beginners</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/blog')}
                  className="px-6 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-base hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  <span>Browse All 3 Master Guides</span>
                </button>
              </div>

              {/* Value stats */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#0A192F]">6,000+</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">Words of Original Strategy</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-blue-600">100%</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">AEO Snippet Grounded</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-600">2026</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">Updated Methodologies</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with Overlay Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] group">
                <img
                  src="/images/hero-marketing.jpg"
                  alt="Modern digital marketing agency desk showing analytics dashboard and SEO ranking metrics"
                  width={800}
                  height={600}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">Live Case Metric</span>
                    <p className="text-sm font-bold text-[#0A192F]">Organic Growth Playbook</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800">
                    +215% Traffic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pillar Guides (Three distinct articles) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Core Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
              Featured Comprehensive Master Guides
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Each 1,500–2,000 word guide contains battle-tested tactics, real-world examples, and Answer Engine direct response capsules.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group shrink-0"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* Digital Marketing Introduction & 6 Core Pillars */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Digital Marketing Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
              What Is Modern Digital Marketing?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Modern digital marketing is the continuous discipline of generating predictable customer demand by connecting high-intent search queries, customer pain points, and product value across multi-channel digital touchpoints.
            </p>
          </div>

          {/* 6 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Visual & Conversion Funnel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0A192F] to-[#122A4F] text-white rounded-3xl p-8 sm:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
              Full-Funnel Organic Acquisition
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Align Every Keyword with the Commercial Customer Journey
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Attracting random traffic is easy; turning searchers into customers requires intentional full-funnel mapping. Move your visitors seamlessly from educational discovery (TOFU) to solution evaluation (MOFU) and final high-intent conversion (BOFU).
            </p>

            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>TOFU (Top of Funnel):</strong> Broad informational guides that build trust and capture emails.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>MOFU (Middle of Funnel):</strong> Teardowns, calculators, and feature comparisons.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>BOFU (Bottom of Funnel):</strong> Direct transactional pages and ROI case studies.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/blog/content-marketing-guide')}
                className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm transition-all shadow-md flex items-center gap-2"
              >
                <span>Read Content Strategy Funnel Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-950 aspect-video">
              <img
                src="/images/growth-analytics-funnel.jpg"
                alt="Digital marketing customer journey analytics and conversion funnel metrics display"
                width={700}
                height={400}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practical SEO Tips & Best Practices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Actionable Playbook
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            High-Impact SEO & AEO Best Practices
          </h2>
          <p className="text-slate-600 text-base">
            Quick-win optimizations you can implement on your website today to accelerate rankings and featured snippet wins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoActionTips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {tip.badge}
                </span>
                <h3 className="text-lg font-bold text-[#0A192F] leading-snug">
                  {tip.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tip.tip}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Tip #{idx + 1}</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tool Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSeoTools />
      </section>

      {/* Popular Topics Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Topic Taxonomy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight mt-2">
                Explore Popular Digital Growth Domains
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Filter our knowledge base across core areas of modern organic search and digital content creation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => onNavigate('/blog')}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md cursor-pointer transition-all flex items-start justify-between group"
              >
                <div className="space-y-1.5">
                  <h3 className="font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
                    {topic.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {topic.description}
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md shrink-0">
                  {topic.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* At least 4 FAQs (with AEO Direct Answers) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Knowledge Base
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Direct, factual answers to common questions about digital marketing, search algorithms, and Answer Engine Optimization.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-[#0A192F] hover:text-blue-600 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className={`p-1 rounded-full bg-slate-100 text-slate-500 transition-transform ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="font-normal">{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-blue-600">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Answer Engine Optimization Verified</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <NewsletterSection />
      </div>
    </div>
  );
}
