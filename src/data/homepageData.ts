import { FAQItem, TopicPill } from '../types';

export const marketingPillars = [
  {
    icon: 'Search',
    title: 'Search Engine Optimization',
    description: 'Build organic visibility through search intent alignment, technical site health, semantic keyword coverage, and earned editorial backlink authority.',
    tags: ['Technical SEO', 'On-Page', 'Backlinks', 'AEO']
  },
  {
    icon: 'PenTool',
    title: 'Content Marketing Strategy',
    description: 'Transform customer pain points into high-utility pillar articles, comparison guides, and multi-channel distribution assets that convert visitors.',
    tags: ['Audience Personas', 'Editorial Calendars', 'Storytelling']
  },
  {
    icon: 'Target',
    title: 'Keyword Intelligence',
    description: 'Uncover high-intent, low-difficulty search queries with systematic competitor gap analysis, search volume tracking, and topical cluster mapping.',
    tags: ['Search Intent', 'Long-Tail', 'Competitor Gap']
  },
  {
    icon: 'BarChart3',
    title: 'Analytics & Conversion Rate Optimization',
    description: 'Track real commercial ROI with Google Search Console, GA4 engagement metrics, click-through optimization, and attribution funnels.',
    tags: ['GA4', 'GSC', 'Attribution', 'Funnel Optimization']
  },
  {
    icon: 'Cpu',
    title: 'Answer Engine Optimization (AEO)',
    description: 'Structure your knowledge for the AI search revolution—optimizing for Google AI Overviews, Perplexity, and conversational search citations.',
    tags: ['Featured Snippets', 'FAQ Schema', 'Direct Answers']
  },
  {
    icon: 'Share2',
    title: 'Multi-Channel Growth Engine',
    description: 'Amplify organic reach through content atomization across email newsletters, LinkedIn thought leadership, tactical threads, and niche communities.',
    tags: ['Distribution', 'Atomization', 'Email Newsletters']
  }
];

export const seoActionTips = [
  {
    badge: 'On-Page',
    title: 'Front-load Primary Keywords in Title Tags',
    tip: 'Place your exact target keyword within the first 35 characters of your <title> tag. Search algorithms and skimming searchers reward front-loaded relevance.'
  },
  {
    badge: 'AEO',
    title: 'Adopt the 50-Word Direct Answer Capsule',
    tip: 'Place a concise, 40-to-60 word objective definition or answer immediately below every question-based H2 to win Google featured snippets and AI overviews.'
  },
  {
    badge: 'Technical',
    title: 'Enforce Core Web Vitals Benchmarks',
    tip: 'Keep Largest Contentful Paint (LCP) under 2.5s and Cumulative Layout Shift (CLS) under 0.1. Fast pages reduce bounce rates and enjoy algorithmic ranking preference.'
  },
  {
    badge: 'Architecture',
    title: 'Deploy Topical Hub-and-Spoke Clusters',
    tip: 'Create one comprehensive pillar guide and link out to 5-10 related spoke articles with descriptive anchor text. This signals overwhelming domain authority to Google.'
  },
  {
    badge: 'User Intent',
    title: 'Verify Intent Before Writing a Single Word',
    tip: 'Search your target keyword in an incognito window. If the top 5 results are step-by-step guides, do not write a product landing page; match what users expect.'
  },
  {
    badge: 'Structured Data',
    title: 'Implement Validated JSON-LD Schema',
    tip: 'Add Article, Organization, and FAQPage schema markup to help web crawlers unambiguously extract your entities, dates, authors, and answers.'
  }
];

export const popularTopics: TopicPill[] = [
  { id: 'seo', name: 'SEO Fundamentals', count: 18, description: 'Crawling, indexing, on-page optimization, and site architecture.' },
  { id: 'keywords', name: 'Keyword Research', count: 14, description: 'Search intent, volume, keyword difficulty, and competitive gap analysis.' },
  { id: 'content', name: 'Content Strategy', count: 22, description: 'Editorial calendars, audience personas, blog wireframes, and atomization.' },
  { id: 'aeo', name: 'Answer Engine Optimization', count: 9, description: 'Formatting for AI search engines, LLMs, and Google AI Overviews.' },
  { id: 'technical', name: 'Technical SEO', count: 12, description: 'Core Web Vitals, XML sitemaps, robots.txt, and canonical tags.' },
  { id: 'analytics', name: 'Analytics & ROI', count: 11, description: 'Google Search Console, GA4 attribution, and conversion funnels.' }
];

export const homeFaqs: FAQItem[] = [
  {
    question: 'What is digital marketing?',
    answer: 'Digital marketing is the comprehensive practice of promoting brands, products, or services through electronic devices and online channels—including search engines (SEO & PPC), content marketing, email marketing, social media platforms, and data analytics. Its objective is to connect with prospective customers where they naturally spend their time online.'
  },
  {
    question: 'Why is SEO considered the highest ROI digital marketing channel?',
    answer: 'Unlike paid advertising where traffic instantly drops to zero the moment your budget runs out, search engine optimization builds compounding organic assets. High-ranking content continues generating qualified visitors, email subscribers, and customer leads for years with minimal marginal maintenance costs.'
  },
  {
    question: 'What is Answer Engine Optimization (AEO) and how does it relate to SEO?',
    answer: 'Answer Engine Optimization (AEO) is the discipline of formatting website content so artificial intelligence search models (such as Google AI Overviews, Perplexity, and ChatGPT) can easily parse, extract, and cite your answers. While SEO targets blue hyperlink rankings, AEO ensures your brand is the direct synthesized answer provided to conversational queries.'
  },
  {
    question: 'How do beginners start learning digital marketing effectively?',
    answer: 'Beginners should start with foundational organic search (SEO) and content creation before investing heavily in paid ads. By understanding audience pain points, doing proper keyword research, publishing high-value guides, and analyzing traffic in Google Search Console, you build a sustainable foundation that strengthens every other marketing channel.'
  },
  {
    question: 'How often should a digital marketing and SEO strategy be audited?',
    answer: 'A comprehensive technical audit should be conducted quarterly, while keyword ranking performance and click-through rates should be reviewed weekly in Google Search Console. Content refreshes for aging or decaying articles should take place every 6 to 9 months to maintain search dominance.'
  }
];
