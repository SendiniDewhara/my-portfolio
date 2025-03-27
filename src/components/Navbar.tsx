import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-primary">JS</span>
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-foreground/80 hover:text-accent button-transition font-medium text-sm"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end justify-center space-y-1.5">
            <span 
              className={cn(
                "h-0.5 bg-current transition-all duration-300 ease-in-out",
                isMobileMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
              )}
            />
            <span 
              className={cn(
                "h-0.5 bg-current transition-all duration-300 ease-in-out",
                isMobileMenuOpen ? "w-6 opacity-0" : "w-4"
              )}
            />
            <span 
              className={cn(
                "h-0.5 bg-current transition-all duration-300 ease-in-out",
                isMobileMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-6"
              )}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden md:hidden",
            isMobileMenuOpen ? "max-h-64 border-b border-border" : "max-h-0"
          )}
        >
          <ul className="p-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-foreground/80 hover:text-accent button-transition block py-1 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;