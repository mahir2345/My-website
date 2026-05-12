import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "BRAC University",
      degree: "Bachelor of Science in Computer Science",
      duration: "Present",
      description: "Focused on core computer science concepts including Algorithms, Data Structures, and Software Engineering."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="h-1.5 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 border-l-2 border-slate-700 pb-12 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center text-purple-400 mb-2">
                  <GraduationCap size={20} className="mr-2" />
                  <span className="font-semibold uppercase tracking-wider text-sm">{edu.degree}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                <div className="flex items-center text-slate-400 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  <span>{edu.duration}</span>
                </div>
                <p className="text-slate-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
