import { useState } from 'react';
import { Calculator, CheckSquare, Sparkles, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export function InteractiveSeoTools() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'checklist'>('calculator');

  // Calculator State
  const [searchVolume, setSearchVolume] = useState<number>(12000);
  const [rankingPosition, setRankingPosition] = useState<number>(2); // 1 = #1 (32%), 2 = #2-3 (18%), 3 = #4-5 (9%), 4 = #6-10 (3%)
  const [conversionRate, setConversionRate] = useState<number>(2.5); // %
  const [leadValue, setLeadValue] = useState<number>(75); // $

  // CTR estimation based on position
  const getCtr = (pos: number) => {
    switch (pos) {
      case 1: return 0.32;
      case 2: return 0.18;
      case 3: return 0.09;
      default: return 0.035;
    }
  };

  const estimatedClicks = Math.round(searchVolume * getCtr(rankingPosition));
  const estimatedConversions = Math.round((estimatedClicks * (conversionRate / 100)));
  const estimatedMonthlyValue = Math.round(estimatedConversions * leadValue);

  // Checklist State
  const [checklist, setChecklist] = useState<{ id: string; label: string; category: string; checked: boolean }[]>([
    { id: '1', label: 'Primary target keyword placed in the first 40 characters of <title> tag', category: 'On-Page', checked: true },
    { id: '2', label: 'Single H1 tag containing core topic with logical H2 & H3 hierarchy', category: 'On-Page', checked: true },
    { id: '3', label: 'Answer capsule (40-60 words) immediately following question-based H2s (AEO)', category: 'AEO', checked: true },
    { id: '4', label: 'All images have descriptive alt text and specified width/height dimensions', category: 'Technical', checked: true },
    { id: '5', label: 'Core Web Vitals passing: LCP < 2.5s, CLS < 0.1, INP < 200ms', category: 'Technical', checked: false },
    { id: '6', label: 'JSON-LD Article, Organization, or FAQPage structured schema implemented', category: 'AEO', checked: true },
    { id: '7', label: 'Contextual internal links to at least 2 relevant pillar articles on domain', category: 'Architecture', checked: false },
    { id: '8', label: 'Self-referencing canonical tag and verified XML sitemap submitted to GSC', category: 'Technical', checked: true },
  ]);

  const toggleCheck = (id: string) => {
    setChecklist(checklist.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const completedCount = checklist.filter(c => c.checked).length;
  const scorePercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      {/* Tab Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
            Interactive Growth Tool
          </span>
          <h3 className="text-2xl font-extrabold text-[#0A192F] tracking-tight mt-1">
            SEO & Content Strategy Simulator
          </h3>
        </div>

        <div className="flex items-center bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'calculator'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Organic Traffic & ROI Calculator</span>
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'checklist'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>SEO & AEO Audit Checklist</span>
          </button>
        </div>
      </div>

      {activeTab === 'calculator' ? (
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex justify-between text-sm font-bold text-slate-800 mb-1.5">
                <span>Monthly Target Keyword Search Volume:</span>
                <span className="text-blue-600 font-mono">{searchVolume.toLocaleString()} searches/mo</span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={searchVolume}
                onChange={(e) => setSearchVolume(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold text-slate-800 mb-1.5">
                <span>Target Organic Ranking Position:</span>
                <span className="text-blue-600">
                  {rankingPosition === 1 ? 'Rank #1 (32% Avg CTR)' : rankingPosition === 2 ? 'Rank #2 - #3 (18% Avg CTR)' : rankingPosition === 3 ? 'Rank #4 - #5 (9% Avg CTR)' : 'Rank #6 - #10 (3.5% Avg CTR)'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { pos: 1, label: '#1 Spot' },
                  { pos: 2, label: '#2 - #3' },
                  { pos: 3, label: '#4 - #5' },
                  { pos: 4, label: '#6 - #10' },
                ].map(item => (
                  <button
                    key={item.pos}
                    type="button"
                    onClick={() => setRankingPosition(item.pos)}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-bold border transition-all ${
                      rankingPosition === item.pos
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-2xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Expected Website Conversion Rate (%):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0.5"
                    max="20"
                    step="0.5"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-semibold">%</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Average Value per Lead / Customer ($):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-semibold">$</span>
                  <input
                    type="number"
                    min="10"
                    max="2000"
                    step="10"
                    value={leadValue}
                    onChange={(e) => setLeadValue(Number(e.target.value))}
                    className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0A192F] to-[#112D55] text-white p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
              <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">
                Projected Monthly Impact
              </span>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-400">Estimated Organic Visits / Month</p>
                <p className="text-3xl font-extrabold text-white tracking-tight">
                  {estimatedClicks.toLocaleString()} <span className="text-xs font-normal text-slate-400">clicks</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <p className="text-[11px] text-slate-400">Monthly Leads</p>
                  <p className="text-xl font-bold text-emerald-400">{estimatedConversions.toLocaleString()}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <p className="text-[11px] text-slate-400">Monthly Revenue Value</p>
                  <p className="text-xl font-bold text-cyan-400">${estimatedMonthlyValue.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-1">
              *Model based on aggregated Google CTR distributions and standard B2B/B2C landing conversion benchmarks.
            </p>
          </div>
        </div>
      ) : (
        <div className="pt-6 space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Audit Readiness Score</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-2xl font-black text-[#0A192F]">{scorePercent}%</span>
                <span className="text-xs text-slate-600 font-medium">({completedCount} of {checklist.length} passed)</span>
              </div>
            </div>

            <div className="w-36 h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  scorePercent >= 80 ? 'bg-emerald-500' : scorePercent >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                }`}
                style={{ width: `${scorePercent}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  item.checked
                    ? 'border-emerald-300 bg-emerald-50/50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="mt-0.5">
                  {item.checked ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <div className="w-5 h-5 rounded-md border-2 border-slate-300 shrink-0" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.category}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 font-medium leading-relaxed ${item.checked ? 'text-slate-800' : 'text-slate-600'}`}>
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
