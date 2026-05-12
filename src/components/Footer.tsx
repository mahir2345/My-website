import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          I'm always looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:placeholder@example.com"
            aria-label="Email"
            className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Mail size={24} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Twitter size={24} />
          </a>
        </div>
        
        <div className="pt-8 border-t border-slate-900">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mahir Asaf Khan. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
