import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Reveal elements on scroll
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663457078197/DinfnZythyH5gEpdmgWfxS/project-showcase-bg-KGVUq254oNjfrMCZ4N36zS.webp',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user authentication, and team collaboration features built with React and Firebase.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      link: '#',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663457078197/DinfnZythyH5gEpdmgWfxS/tech-pattern-accent-S2WUsXdQETU6PZQPT4nEUX.webp',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that fetches real-time weather data, displays forecasts, and provides location-based weather information.',
      technologies: ['React', 'API Integration', 'Tailwind CSS', 'Geolocation'],
      link: '#',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663457078197/DinfnZythyH5gEpdmgWfxS/project-showcase-bg-KGVUq254oNjfrMCZ4N36zS.webp',
    },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'CI/CD'] },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            <span className="font-serif">SHUVO</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize link-underline text-sm font-medium transition-colors ${
                  activeSection === item ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-fade-in-up">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663457078197/DinfnZythyH5gEpdmgWfxS/hero-abstract-geometric-isiNev4ygpMjhmtHvxcjVu.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-serif">
            Hi, I'm <span className="text-primary">SHUVO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A passionate web developer crafting beautiful, responsive, and interactive digital experiences
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold btn-hover flex items-center gap-2"
            >
              View My Work
              <ExternalLink size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold btn-hover hover:bg-primary hover:text-white"
            >
              Get In Touch
            </button>
          </div>
          <div className="mt-12 animate-float-up">
            <ChevronDown size={32} className="mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663457078197/DinfnZythyH5gEpdmgWfxS/tech-pattern-accent-S2WUsXdQETU6PZQPT4nEUX.webp"
                    alt="About"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              </div>
            </div>
            <div className="scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                I'm a full-stack web developer with 5+ years of experience building scalable web applications. I specialize in modern JavaScript frameworks and have a passion for creating user-centric digital solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a career dedicated to solving complex problems through elegant code and thoughtful design.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Github size={28} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 font-serif">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="scroll-reveal card-hover bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all link-underline"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 font-serif">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="scroll-reveal bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6 font-serif">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:shuvo@example.com"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold btn-hover flex items-center gap-2 justify-center"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="#"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold btn-hover hover:bg-primary hover:text-white flex items-center gap-2 justify-center"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 SHUVO. All rights reserved. | Designed & Built with <span className="text-primary">❤️</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
