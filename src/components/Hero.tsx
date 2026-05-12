import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-purple-400 font-semibold tracking-wide uppercase mb-4">Welcome to my portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Mahir Asaf Khan</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10">
            A passionate student at <span className="text-white font-medium">BRAC University</span> dedicated to building modern, efficient, and user-centric web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25">
              View My Work
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white font-medium rounded-full transition-all">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
