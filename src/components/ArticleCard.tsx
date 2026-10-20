import React from 'react';
import { Clock, ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onNavigate: (path: string) => void;
  featured?: boolean;
}

export function ArticleCard({ article, onNavigate, featured = false }: ArticleCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(`/blog/${article.slug}`);
  };

  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  if (featured) {
    return (
      <article className="group bg-white rounded-3xl border border-slate-200/90 hover:border-blue-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-7 relative overflow-hidden bg-slate-100 aspect-video lg:aspect-auto">
          <img
            src={article.featuredImage}
            alt={article.imageAlt}
            width={800}
            height={450}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                {article.readingTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {formattedDate}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
              <a href={`/blog/${article.slug}`} onClick={handleCardClick}>
                {article.title}
              </a>
            </h3>

            <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">{article.author.name}</p>
                <p className="text-xs text-slate-500">{article.author.role}</p>
              </div>
            </div>

            <a
              href={`/blog/${article.slug}`}
              onClick={handleCardClick}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-300 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={article.featuredImage}
          alt={article.imageAlt}
          width={640}
          height={360}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-blue-700 shadow-xs backdrop-blur-xs">
            {article.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-[#0A192F]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
          <Clock className="w-3 h-3 text-blue-400" />
          <span>{article.readingTime}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{article.wordCount.toLocaleString()} words</span>
          </div>

          <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors leading-snug tracking-tight">
            <a href={`/blog/${article.slug}`} onClick={handleCardClick}>
              {article.title}
            </a>
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs font-semibold text-slate-800">{article.author.name}</span>
          </div>

          <a
            href={`/blog/${article.slug}`}
            onClick={handleCardClick}
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
