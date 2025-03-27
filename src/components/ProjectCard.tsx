import React, { useState } from 'react';
import { ExternalLink, Github, Play, X } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  videoLink?: string;
  diagramLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubLink,
  liveLink,
  videoLink,
  diagramLink,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDiagramModalOpen, setIsDiagramModalOpen] = useState(false);
  
  return (
    <>
      <div className="glass p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <div className="flex space-x-2">
            {videoLink && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="p-2 text-foreground/70 hover:text-accent bg-background rounded-full button-transition"
                aria-label="View video"
              >
                <Play className="w-4 h-4" />
              </button>
            )}
            {diagramLink && (
              <button
                onClick={() => setIsDiagramModalOpen(true)}
                className="p-2 text-foreground/70 hover:text-accent bg-background rounded-full button-transition"
                aria-label="View diagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect width="8" height="8" x="3" y="3" rx="2" />
                  <rect width="8" height="8" x="13" y="3" rx="2" />
                  <rect width="8" height="8" x="3" y="13" rx="2" />
                  <rect width="8" height="8" x="13" y="13" rx="2" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-auto">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-foreground/80 hover:text-accent button-transition"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-foreground/80 hover:text-accent button-transition"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
      
      {/* Video Modal */}
      {isVideoModalOpen && videoLink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-background rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="font-medium">{title} - Demo Video</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 text-foreground/70 hover:text-accent rounded-full button-transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                src={videoLink}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      
      {/* Diagram Modal */}
      {isDiagramModalOpen && diagramLink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-background rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="font-medium">{title} - Architecture Diagram</h3>
              <button
                onClick={() => setIsDiagramModalOpen(false)}
                className="p-2 text-foreground/70 hover:text-accent rounded-full button-transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-auto">
              <img
                src={diagramLink}
                alt={`${title} architecture diagram`}
                className="max-w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;