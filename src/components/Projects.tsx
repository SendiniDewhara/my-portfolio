import React, { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import { Plus } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState<ProjectCardProps[]>([
    {
      title: 'Employee management system',
      description: 'An Employee management system for HR. used java OOP concepts, and figma to create ui.',
      tags: ['Java', 'MySQL', 'figma', 'OOP'],
      githubLink: 'https://github.com/username/e-commerce',
      liveLink: 'https://example.com',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example YouTube link
      diagramLink: 'https://placeholder.svg', // Example diagram
    },
    {
      title: 'cafe-webapplication',
      description: 'A Kanban-style task management application with drag-and-drop functionality, user collaboration, and real-time updates.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'DnD'],
      githubLink: 'https://github.com/username/task-manager',
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time messaging platform with private conversations, group chats, file sharing, and read receipts.',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/username/chat-app',
    },
  ]);

  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<Partial<ProjectCardProps>>({
    title: '',
    description: '',
    tags: [],
    githubLink: '',
    liveLink: '',
    videoLink: '',
    diagramLink: '',
  });
  const [newTagInput, setNewTagInput] = useState('');

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProject.title && newProject.description && newProject.githubLink) {
      setProjects([
        ...projects,
        {
          title: newProject.title,
          description: newProject.description,
          tags: newProject.tags || [],
          githubLink: newProject.githubLink,
          liveLink: newProject.liveLink,
          videoLink: newProject.videoLink,
          diagramLink: newProject.diagramLink,
        },
      ]);
      setNewProject({
        title: '',
        description: '',
        tags: [],
        githubLink: '',
        liveLink: '',
        videoLink: '',
        diagramLink: '',
      });
      setIsAddProjectModalOpen(false);
    }
  };

  const handleAddTag = () => {
    if (newTagInput && newProject.tags) {
      setNewProject({
        ...newProject,
        tags: [...newProject.tags, newTagInput],
      });
      setNewTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    if (newProject.tags) {
      setNewProject({
        ...newProject,
        tags: newProject.tags.filter((tag) => tag !== tagToRemove),
      });
    }
  };

  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Recent Projects</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectCard {...project} />
            </div>
          ))}
          
          <button
            onClick={() => setIsAddProjectModalOpen(true)}
            className="border-2 border-dashed border-border rounded-2xl h-full min-h-[340px] flex flex-col items-center justify-center p-6 hover:bg-secondary button-transition group"
            data-aos="fade-up"
            data-aos-delay={projects.length * 100}
          >
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 group-hover:bg-accent/10 button-transition">
              <Plus className="w-8 h-8 text-foreground/40 group-hover:text-accent button-transition" />
            </div>
            <p className="text-foreground/70 text-lg font-medium">Add New Project</p>
          </button>
        </div>
      </div>

      {/* Add Project Modal */}
      {isAddProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-background rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="font-medium">Add New Project</h3>
              <button
                onClick={() => setIsAddProjectModalOpen(false)}
                className="p-2 text-foreground/70 hover:text-accent rounded-full button-transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form onSubmit={handleAddProject}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                      Project Name*
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="input-style"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Project Description*
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      className="input-style"
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="githubLink" className="block text-sm font-medium mb-2">
                      GitHub Link*
                    </label>
                    <input
                      id="githubLink"
                      type="url"
                      className="input-style"
                      value={newProject.githubLink}
                      onChange={(e) => setNewProject({ ...newProject, githubLink: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="liveLink" className="block text-sm font-medium mb-2">
                      Live Demo Link (Optional)
                    </label>
                    <input
                      id="liveLink"
                      type="url"
                      className="input-style"
                      value={newProject.liveLink}
                      onChange={(e) => setNewProject({ ...newProject, liveLink: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="videoLink" className="block text-sm font-medium mb-2">
                      Project Video Link (Optional)
                    </label>
                    <input
                      id="videoLink"
                      type="url"
                      className="input-style"
                      value={newProject.videoLink}
                      onChange={(e) => setNewProject({ ...newProject, videoLink: e.target.value })}
                      placeholder="YouTube embed URL"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="diagramLink" className="block text-sm font-medium mb-2">
                      Architecture Diagram Link (Optional)
                    </label>
                    <input
                      id="diagramLink"
                      type="url"
                      className="input-style"
                      value={newProject.diagramLink}
                      onChange={(e) => setNewProject({ ...newProject, diagramLink: e.target.value })}
                      placeholder="URL to diagram image"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Technologies/Tags</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {newProject.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-xs font-medium rounded-full flex items-center"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-2 text-foreground/50 hover:text-accent"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6L6 18"></path>
                              <path d="M6 6l12 12"></path>
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        className="input-style rounded-r-none flex-grow"
                        placeholder="Add a tag"
                        value={newTagInput}
                        onChange={(e) => setNewTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddTag();
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="px-4 bg-accent text-white rounded-r-lg hover:bg-accent/90 button-transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsAddProjectModalOpen(false)}
                    className="px-6 py-2 border border-border rounded-lg font-medium hover:bg-secondary button-transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 button-transition"
                  >
                    Add Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;