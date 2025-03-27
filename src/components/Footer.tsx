import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-10 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <a href="#home" className="text-xl font-bold tracking-tight mb-2 inline-block">
            <span className="text-primary">JS</span>
            <span className="text-accent">.</span>
          </a>
          <p className="text-foreground/60 text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-8">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-accent button-transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-accent button-transition text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-accent button-transition text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-accent button-transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-secondary button-transition"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-foreground/70" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;