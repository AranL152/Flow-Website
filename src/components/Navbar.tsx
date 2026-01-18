import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Individuals', href: '#individuals' },
    { label: 'Business', href: '#business' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`
        fixed top-12 left-0 right-0 z-50 flex justify-center px-4
        ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}
      `}
      style={{ transition: 'all 0.6s ease-in-out' }}
    >
      <nav className={`
        flex items-center justify-between gap-2 px-3 py-2.5 rounded-2xl border-2
        transition-all duration-500 ease-out
        ${isScrolled
          ? 'shadow-lg shadow-stone-200/50 backdrop-blur-xl'
          : 'backdrop-blur-md'}
      `}
      style={{ backgroundColor: '#feffef', borderColor: '#e3e4d0' }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 px-3 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="flex gap-[3px] items-end h-5">
            <div className="w-[3px] h-5 bg-stone-800 rounded-full transition-all group-hover:h-4" />
            <div className="w-[3px] h-3.5 bg-stone-800 rounded-full transition-all group-hover:h-5" />
            <div className="w-[3px] h-4 bg-stone-800 rounded-full transition-all group-hover:h-3" />
            <div className="w-[3px] h-2.5 bg-stone-800 rounded-full transition-all group-hover:h-4" />
          </div>
          <span className="text-lg font-semibold text-stone-800 tracking-tight">Flow</span>
        </a>

        {/* Desktop Nav Items - Centered */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 rounded-lg transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#features"
            onClick={(e) => scrollToSection(e, '#features')}
            className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 border border-stone-300/60 hover:border-stone-400 hover:bg-stone-50 rounded-lg transition-all duration-200 ml-1"
          >
            Research
          </a>
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#f0d7ff] text-foreground hover:bg-[#e8c7ff] text-sm font-bold rounded-2xl border-2 border-black transition-all duration-200 ml-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download for macOS
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full mt-2 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-stone-200/60 p-4 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="w-full mt-3 px-5 py-3 bg-[#f0d7ff] text-foreground hover:bg-[#e8c7ff] text-sm font-bold rounded-2xl border-2 border-black flex items-center justify-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for macOS
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
