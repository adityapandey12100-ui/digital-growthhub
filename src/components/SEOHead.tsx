import { useEffect } from 'react';
import { Article, FAQItem } from '../types';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  article?: Article;
  faqs?: FAQItem[];
  type?: 'website' | 'article';
}

export function SEOHead({
  title,
  description,
  canonicalPath = '/',
  article,
  faqs,
  type = 'website'
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentOrigin = window.location.origin;
    const fullCanonical = `${currentOrigin}${canonicalPath}`;
    canonical.setAttribute('href', fullCanonical);

    // Update Open Graph tags
    const updateOG = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:type', type);
    updateOG('og:url', fullCanonical);
    if (article) {
      updateOG('og:image', `${currentOrigin}${article.featuredImage}`);
    } else {
      updateOG('og:image', `${currentOrigin}/images/hero-marketing.jpg`);
    }

    // Dynamic JSON-LD structured data injection
    const existingScript = document.getElementById('jsonld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const schemas: object[] = [];

    // Organization Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Digital Growth Hub',
      url: currentOrigin,
      logo: `${currentOrigin}/favicon.svg`,
      description: 'Educational authority platform for modern SEO, content marketing, and digital growth strategies.',
      sameAs: [
        'https://twitter.com/digitalgrowthhub',
        'https://linkedin.com/company/digitalgrowthhub'
      ]
    });

    // WebSite Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Digital Growth Hub',
      url: currentOrigin,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${currentOrigin}/blog?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });

    // Article Schema
    if (article) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription,
        image: [`${currentOrigin}${article.featuredImage}`],
        datePublished: article.publishedDate,
        dateModified: article.modifiedDate,
        author: {
          '@type': 'Person',
          name: article.author.name,
          jobTitle: article.author.role
        },
        publisher: {
          '@type': 'Organization',
          name: 'Digital Growth Hub',
          logo: {
            '@type': 'ImageObject',
            url: `${currentOrigin}/favicon.svg`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullCanonical
        }
      });
    }

    // FAQPage Schema
    const activeFaqs = article ? article.faqs : faqs;
    if (activeFaqs && activeFaqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: activeFaqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      });
    }

    const script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('jsonld-schema');
      if (el) el.remove();
    };
  }, [title, description, canonicalPath, article, faqs, type]);

  return null;
}
