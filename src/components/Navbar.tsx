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
    { label: 'Product', hasDropdown: true },
    { label: 'Individuals', hasDropdown: true },
    { label: 'Business', hasDropdown: false },
    { label: 'Pricing', hasDropdown: false },
    { label: 'About', hasDropdown: true },
  ];

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
        flex items-center justify-between gap-2 px-3 py-2.5 rounded-full
        transition-all duration-500 ease-out
        ${isScrolled
          ? 'bg-white/90 shadow-lg shadow-stone-200/50 backdrop-blur-xl border border-stone-200/60'
          : 'bg-white/70 backdrop-blur-md border border-stone-200/40'}
      `}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 px-3 group">
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
            <button
              key={item.label}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 rounded-full transition-all duration-200"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
            </button>
          ))}
          <button className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 border border-stone-300/60 hover:border-stone-400 hover:bg-stone-50 rounded-full transition-all duration-200 ml-1">
            Research
          </button>
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-all duration-200 shadow-md hover:shadow-lg ml-2">
          Download for free
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
            <button
              key={item.label}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-xl transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-40" />}
            </button>
          ))}
          <button className="w-full mt-3 px-5 py-3 bg-stone-900 text-white text-sm font-medium rounded-full">
            Download for free
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;