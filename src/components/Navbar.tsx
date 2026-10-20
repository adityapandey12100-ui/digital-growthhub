import { useState, useEffect } from 'react';
import { TrendingUp, Menu, X, ArrowRight, BookOpen, Layers, HelpCircle, Mail } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Guides', path: '/blog' },
    { name: 'SEO Guide', path: '/blog/seo-guide-for-beginners' },
    { name: 'Keyword Research', path: '/blog/keyword-research-guide' },
    { name: 'Content Marketing', path: '/blog/content-marketing-guide' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Digital Growth Hub Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0A192F] flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-105 transition-transform">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#0A192F] group-hover:text-blue-600 transition-colors">
                Digital Growth<span className="text-blue-600">Hub</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider hidden sm:block">
                SEO & Content Strategy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-[#0A192F] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('newsletter-box');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleLinkClick('/#newsletter');
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-sm hover:shadow-blue-500/25"
            >
              <span>Get Free Playbook</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 pt-2">
            Navigation Menu
          </div>
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(link.path, e)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
              </a>
            );
          })}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('newsletter-box');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700"
            >
              <Mail className="w-4 h-4" />
              <span>Subscribe for SEO Updates</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
