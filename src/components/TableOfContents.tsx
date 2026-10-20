import { useState, useEffect } from 'react';
import { List, HelpCircle, ChevronRight } from 'lucide-react';
import { ArticleSection } from '../types';

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
        <List className="w-4 h-4 text-blue-600" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A192F]">
          Table of Contents
        </h3>
      </div>

      <nav className="space-y-1.5">
        {sections.map((section, idx) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(section.id, e)}
              className={`group flex items-start gap-2.5 py-1.5 px-2.5 rounded-lg text-xs leading-relaxed transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span className="text-[11px] font-mono text-slate-400 mt-0.5">
                {String(idx + 1).padStart(2, '0')}.
              </span>
              <span className="flex-1 line-clamp-2">
                {section.title}
              </span>
              {section.isQuestion && (
                <span className="text-[10px] font-semibold text-blue-500 bg-blue-100/70 px-1.5 py-0.5 rounded shrink-0">
                  AEO
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
