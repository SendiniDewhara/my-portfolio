
const About = () => {
  const skills = [
    { category: 'Frontend', items: ['JavaScript', 'React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'AWS', 'CI/CD'] },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <div data-aos="fade-right">
              <span className="section-subtitle">About Me</span>
              <h2 className="section-title">Passionate about creating meaningful digital experiences</h2>
            </div>
            
            <div className="space-y-6 text-foreground/80" data-aos="fade-up" data-aos-delay="100">
           <p> I am a passionate Full-Stack Developer with a strong foundation in web development and software engineering. Currently, I am pursuing a Software Engineering degree at ICBT, in collaboration with Cardiff Metropolitan University, where I have already completed my Higher Diploma.

           With hands-on experience in HTML, CSS, PHP, MySQL, SQL, Java, and React,</p> 
           <p>I have successfully developed multiple projects using these technologies. My expertise spans both front-end and back-end development, allowing me to create seamless, user-friendly, and efficient web applications.</p>
           <p> Currently, I am expanding my skill set by learning Java Spring Boot to enhance my backend development capabilities.</p>

           <p>I am dedicated to continuous learning and growth in the software development field and am eager to contribute my skills and experience to impactful projects.</p>
            </div>
            
            <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:shadow-lg hover:bg-accent/90 button-transition inline-flex"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-8">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category} 
                  className="glass p-6 rounded-2xl"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-background rounded-full text-sm font-medium border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;