import { ShieldCheck, Award, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-16">
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          About Digital Growth Hub
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
          Learn SEO, Content Marketing and Digital Growth
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          We built Digital Growth Hub to replace superficial "growth hacks" with rigorous, engineering-grade organic search education and practical content frameworks.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0A192F]">Original Depth</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every master guide on our hub exceeds 1,500 words, loaded with verified datasets, real screenshots, and tactical step-by-step roadmaps.
          </p>
        </div>

        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0A192F]">AEO-First Architecture</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We pioneer Answer Engine Optimization, creating structured, direct answers designed for Google AI Overviews and modern search engines.
          </p>
        </div>

        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0A192F]">Commercial ROI</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Organic traffic without revenue is vanity. We map every query to the buyer journey to create sustainable pipeline growth.
          </p>
        </div>
      </div>

      {/* Editorial Team */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
            Meet the Editorial Strategists
          </h2>
          <p className="text-sm text-slate-500">
            Written and reviewed by practitioners with over a decade of real organic growth experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80"
              alt="Elena Vance"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base text-[#0A192F]">Elena Vance</h4>
              <p className="text-xs text-blue-600 font-semibold">Head of Organic Search Strategy</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Former enterprise SEO lead managing technical architecture for high-growth tech firms. Specializes in Core Web Vitals and topical clusters.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80"
              alt="Marcus Chen"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base text-[#0A192F]">Marcus Chen</h4>
              <p className="text-xs text-blue-600 font-semibold">Director of Quantitative SEO</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Data analyst and keyword intelligence specialist who turns billions of search queries into structured editorial blueprints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Scale Your Organic Search Presence?</h3>
        <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
          Start reading our comprehensive guide to search engine optimization foundations.
        </p>
        <button
          onClick={() => onNavigate('/blog/seo-guide-for-beginners')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 transition-all shadow-xs"
        >
          <span>Read SEO for Beginners</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
