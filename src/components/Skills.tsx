import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "Frontend Development", items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { name: "Backend Development", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Tools & Others", items: ["Git", "Docker", "AWS", "Figma", "Agile"] }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="h-1.5 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-900 text-purple-400 rounded-lg text-sm font-medium border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
