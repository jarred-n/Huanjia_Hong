import { motion } from 'motion/react';

export default function Hero() {
  const techStack = [
    { name: 'React', color: 'border-[#47faf3] text-secondary' },
    { name: 'TypeScript', color: 'border-[#0070f3] text-primary-container' },
    { name: 'Vue', color: 'border-[#42b883] text-green-400' },
    { name: 'Angular', color: 'border-[#dd0031] text-red-400' },
    { name: 'Node.js', color: 'border-[#68a063] text-green-500' },
    { name: 'Socket.IO', color: 'border-white text-on-surface' },
    { name: 'WebRTC', color: 'border-orange-400 text-orange-400' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 mb-40 pt-32">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="status-dot bg-secondary animate-pulse" />
            <span className="font-display text-xs text-secondary uppercase tracking-[0.2em] font-semibold">
              Available for new opportunities
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl font-bold tracking-tighter text-white mb-6"
          >
            HuanJia Hong
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-semibold text-primary mb-8"
          >
            Graduate Software Engineer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-on-surface-variant text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Frontend-focused engineer building healthcare, enterprise, and real-time collaboration software. 
            Specialized in architecting high-performance web applications with a focus on data integrity and user experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {techStack.map((tech) => (
              <motion.span 
                key={tech.name} 
                whileHover={{ y: -2, scale: 1.05 }}
                className={`tech-tag cursor-default ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,112,243,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container text-white px-8 py-3 rounded-lg font-bold text-center transition-colors hover:bg-inverse-primary"
            >
              Explore Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-bold text-center backdrop-blur-md transition-all"
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[400px] aspect-square glass-card rounded-2xl p-1 flex items-center justify-center relative overflow-hidden group"
        >
          <img 
            alt="Code development" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJvmlQcsmHiRL5ycb1oo5M5qvwYRgWMqp-VEMaU2MtmHFERpuZyU168Neybu0fmoztvgtofWd16JH_7dWRbaCOH7QXiaAKABUVouxdy7Qyu-GLnJM_chUqt_aZISO0Ii4RO18_BlbMmgKCAefSR-qpBdl50NIKEnZX4uCqLqhWyHz4lnDrzE_LLiuqAGaqMj6awTa12bDxM4u3xA8QKG5wqVHtE_7cAYSuG46vOMEydAuH2uj7lWG1c1jpcmuL_cjIUz6KJydGykao" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-6 left-6 font-mono text-xs space-y-1">
            <p className="text-primary-container">system.init()</p>
            <p className="text-secondary">status: optimal</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
