import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Project",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "University Project One",
      description: "A detailed description of a significant project completed during coursework.",
      tech: ["Python", "Flask", "SQLite"],
      github: "#",
      demo: "#"
    },
    {
      title: "University Project Two",
      description: "Another important academic project showcasing technical problem-solving.",
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all group"
            >
              <div className="h-48 bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-slate-400 font-mono">Project Preview</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} className="text-slate-300 hover:text-white transition-colors flex items-center text-sm">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href={project.demo} className="text-slate-300 hover:text-white transition-colors flex items-center text-sm">
                    <ExternalLink size={18} className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
