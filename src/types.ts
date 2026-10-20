export interface ArticleSection {
  id: string;
  title: string;
  level: 2 | 3;
  isQuestion?: boolean;
  directAnswer?: string; // For AEO (Answer Engine Optimization) featured snippet answer
  content: string[]; // Paragraphs, bullet points, checklists, or code blocks
  subsections?: {
    id: string;
    title: string;
    content: string[];
  }[];
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  excerpt: string;
  category: 'SEO' | 'Keyword Research' | 'Content Marketing';
  readingTime: string;
  wordCount: number;
  publishedDate: string;
  modifiedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  featuredImage: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  keyTakeaways: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  sections: ArticleSection[];
  relatedSlugs: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TopicPill {
  id: string;
  name: string;
  count: number;
  description: string;
}
