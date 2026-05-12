import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-800 p-8 rounded-lg">
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  I am a driven student currently pursuing my undergraduate degree at BRAC University. My journey in technology is fueled by a deep curiosity for how things work and a desire to create impactful solutions.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  I specialize in modern web development and enjoy tackling complex problems with elegant code. When I'm not studying or coding, I'm constantly exploring new technologies to broaden my skill set.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Why Work With Me?</h3>
            <ul className="space-y-4">
              {[
                "Strong foundation in computer science principles",
                "Quick learner of new technologies and frameworks",
                "Dedicated to writing clean, maintainable code",
                "Effective communicator and team collaborator"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-500 mr-2">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
