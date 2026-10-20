import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Editorial Feedback',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
          Contact Our Editorial Team
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Have questions regarding SEO best practices, keyword strategy collaborations, or editorial feedback? Send us a direct inquiry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-2xl font-bold text-[#0A192F]">Message Received!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our editorial team reviews every message and responds within 24 to 48 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', topic: 'Editorial Feedback', message: '' });
                }}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Topic / Inquiry Type
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Editorial Feedback">Editorial Feedback & Clarification</option>
                  <option value="Guest Contribution">Guest Contribution Pitch</option>
                  <option value="AEO Inquiry">Answer Engine Optimization (AEO) Inquiry</option>
                  <option value="Partnership">Partnership & Media</option>
                  <option value="Technical SEO Bug">Report Technical SEO or Site Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you are working on or how we can assist you..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-lg text-[#0A192F]">Editorial Headquarters</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Digital Growth Hub is maintained by our distributed team of search engine strategists and content architects across North America and Europe.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>editorial@digitalgrowthhub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Response Time: &lt; 48 business hours</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50/80 p-6 rounded-3xl border border-blue-200/80 space-y-3">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Looking for Quick Answers?</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Check out our comprehensive FAQ sections on the Homepage or browse our master guides:
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <button
                onClick={() => onNavigate('/blog/seo-guide-for-beginners')}
                className="text-blue-600 hover:underline block font-semibold"
              >
                → SEO for Beginners Guide
              </button>
              <button
                onClick={() => onNavigate('/blog/keyword-research-guide')}
                className="text-blue-600 hover:underline block font-semibold"
              >
                → Keyword Research Guide
              </button>
              <button
                onClick={() => onNavigate('/blog/content-marketing-guide')}
                className="text-blue-600 hover:underline block font-semibold"
              >
                → Content Marketing Strategy Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
