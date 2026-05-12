import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Student Researcher",
      company: "BRAC University",
      location: "Dhaka, Bangladesh",
      duration: "2023 - Present",
      description: "Working on various academic research projects and collaborating with faculty members."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1.5 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/30 transition-all shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-600/10 rounded-lg text-purple-500 mr-4">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-slate-400 text-sm flex flex-col items-end">
                  <span className="font-semibold">{exp.duration}</span>
                  <div className="flex items-center mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed border-t border-slate-700 pt-4 mt-4">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
