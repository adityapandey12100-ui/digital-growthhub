import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['SEO Fundamentals', 'Content Strategy']);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <section id="newsletter-box" className="relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#0E2243] to-[#0A192F] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Bi-Weekly Growth Intelligence</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Join 24,000+ Marketers Receiving Our Tactical Organic Playbooks
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Zero marketing fluff. Get teardowns of ranking algorithms, AEO answer frameworks, keyword gap models, and content templates delivered straight to your inbox.
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-950/60 border border-emerald-500/40 p-6 rounded-2xl max-w-md mx-auto text-center space-y-2 animate-in fade-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">You are officially subscribed!</h4>
            <p className="text-sm text-emerald-200">
              Check your inbox for our <strong>Complete 2026 SEO & AEO Growth Checklist</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-left">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your work email..."
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-blue-500/30 flex items-center justify-center gap-2 shrink-0 active:scale-95 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-400 font-medium">{errorMessage}</p>
            )}

            {/* Topic Preferences */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 font-medium mb-2">Select topics you care most about:</p>
              <div className="flex flex-wrap gap-2">
                {['SEO Fundamentals', 'Keyword Research', 'Content Strategy', 'Answer Engine Optimization (AEO)'].map((topic) => {
                  const isChecked = selectedTopics.includes(topic);
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleTopic(topic)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        isChecked
                          ? 'bg-blue-600 text-white border border-blue-400'
                          : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}{topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>We respect your privacy. No spam ever. Unsubscribe with 1-click anytime.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
