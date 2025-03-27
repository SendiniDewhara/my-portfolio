import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const typedWords = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Set up rotation of words
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % typedWords.length);
    }, 3000);
    
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center section-padding pt-28"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <div className="absolute top-20 left-[20%] w-72 h-72 bg-accent/10 rounded-full filter blur-3xl opacity-70" />
        <div className="absolute bottom-10 right-[20%] w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-70" />
      </div>

      <div className="w-full max-w-5xl mx-auto text-center">
        <div 
          className={`mb-4 opacity-0 ${isVisible ? 'animate-fade-down' : ''}`} 
          style={{ animationDelay: '0.2s' }}
        >
          <span className="section-subtitle">Welcome to my portfolio</span>
        </div>
        
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-primary">I'm a </span>
          <div className="relative inline-block text-accent">
            {typedWords[currentWordIndex]}
          </div>
        </h1>
        
        <p 
          className={`text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-12 opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: '0.6s' }}
        >
          Crafting elegant solutions to complex problems with clean code and thoughtful design.
          Specialized in building modern web applications with the latest technologies.
        </p>
        
        <div 
          className={`flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: '0.8s' }}
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:shadow-lg hover:bg-accent/90 button-transition"
          >
            View My Work
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary button-transition"
          >
            About Me
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-border opacity-0 hover:bg-secondary button-transition ${isVisible ? 'animate-fade-in' : ''}`}
        style={{ animationDelay: '1.2s' }}
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-5 h-5 text-foreground/70 animate-floating" />
      </a>
    </section>
  );
};

export default Hero;