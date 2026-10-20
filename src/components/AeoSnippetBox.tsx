import { useState } from 'react';
import { Sparkles, Check, Copy } from 'lucide-react';

interface AeoSnippetBoxProps {
  question: string;
  answer: string;
}

export function AeoSnippetBox({ question, answer }: AeoSnippetBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${question}\n\n${answer}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 p-5 sm:p-6 bg-gradient-to-br from-blue-50/90 via-sky-50/50 to-white border-2 border-blue-200/90 rounded-2xl shadow-sm relative overflow-hidden not-prose">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct AEO Answer</span>
          </span>
          <span className="text-xs text-blue-800/80 font-medium hidden sm:inline">
            Optimized for Featured Snippets & AI Search
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-blue-700 bg-white/80 hover:bg-white border border-slate-200 px-2.5 py-1 rounded-md transition-colors shadow-2xs"
          title="Copy question and answer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy snippet</span>
            </>
          )}
        </button>
      </div>

      <p className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed">
        {answer}
      </p>
    </div>
  );
}
