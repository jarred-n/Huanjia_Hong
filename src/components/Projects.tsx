import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

const projects = [
  {
    title: 'Medical MDT Teleconsultation Platform',
    tag: 'Healthcare',
    tagColor: 'bg-primary-container/20 text-primary-container',
    description: 'Developed a high-concurrency consultation ecosystem. Engineered PACS progressive loading and WebWorker decoding for zero-lag imaging. Implemented WebRTC conferencing and Socket.IO for multi-expert real-time collaboration.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC37uOWdfkWjqRDLHkhLOhfcJNUHhbLdNhuEVDNucjERx4vwXAMuKSdD9ICOvlczkV23UnM49PbnT7goc_NkJmuMHf9wyhQtegLjJ9xDOvnSVHqhrf0kgPWFuf4-hpsdPxLX3rLL7PYS7ACUO_GS81oC4v9W8xK420lGqgQlK6jmmIOljYgzVJzluuIOubRWRHZHPJDGGRj5HvHG2xf55PlitUW0oR01Re0mv0p4nuJLuMJv0B4k4VQ6Kc2xl9zi_97UxYzxyoEdiZa',
    tech: ['Socket.IO', 'WebRTC', 'NW.js', 'WebWorker'],
    overlayColor: 'bg-primary-container/10'
  },
  {
    title: 'Tobacco Factory Energy Management',
    tag: 'Enterprise',
    tagColor: 'bg-secondary/20 text-secondary',
    description: 'Re-architected factory monitoring using Vue 3. Implemented dynamic routing, Role-Based Access Control (RBAC), and a custom theming engine. Optimized high-frequency data streams for equipment health tracking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAquyaNXs86Q1cP6RRXzi4e3_6q3Facai5gkoR7kEdAFXlQaye3eKj0tCwVtv6e3CzIIMkfP98nr1OOm-FyL8IPezjXfGW9zBaQHhfl_AL-ZY1iWDeum2K83jLZBTg9I4jU1OV6fCJAiWwBOBmcUvGgl5RMZ5usr_9obkOXtlDy1qTXYMfBQrZoOfqs6hX95NwAcr8rte6lM2JiT7djSJN_oHanaPdDk5QjawG2KgLkSwAGnyf50eRfoaQ_aIqgkF5XXIasZx24RepW',
    tech: ['Vue 3', 'Pinia', 'Vite', 'RBAC'],
    reverse: true,
    overlayColor: 'bg-secondary/10'
  },
  {
    title: 'Blood Cloud 2.0',
    tag: 'Analytics',
    tagColor: 'bg-tertiary-container/20 text-tertiary-container',
    description: 'Built with Angular and NgRx for robust state management. Designed high-density dashboards using D3.js and Canvas for real-time blood inventory tracking. Ensured military-grade secure frontend data transmission.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzJOFZAsnpwcoKZgnNFM3-tBe0fjD-XfYURMc1GdDCFU2sVcu4sCWFF4NMVmhPbY-cAHHsZ2A7xyDbhIjPQyx6QqZencCbkQX0JoOK7SXVvtIiUgM2F3suZCM4Qg21nnHFK3Hy6JQGXrNbqrZAu8CnNAkRtxks1dk-m42j-K0b4D3t5t1V1iAwHD3N8F28ksKcTzxpfnAuT6N_o0032x6HE3v3xfm0PODAAuvQaqHxCiqsWi2tvLEH991kOYdmbijH0SnxNSwrctHe',
    tech: ['Angular', 'NgRx', 'D3.js', 'Canvas'],
    overlayColor: 'bg-tertiary-container/10'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 mb-40">
      <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
        <Terminal className="text-primary-container" size={32} />
        Featured Engineering Projects
      </h3>
      
      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, x: project.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group border-white/5"
          >
            <div className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="lg:w-[450px] aspect-video relative overflow-hidden">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  src={project.image} 
                />
                <div className={`absolute inset-0 ${project.overlayColor} group-hover:bg-transparent transition-all duration-500`} />
              </div>
              
              <div className="p-10 flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
                  <span className={`${project.tagColor} px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest`}>
                    {project.tag}
                  </span>
                </div>
                
                <p className="text-on-surface-variant mb-8 leading-relaxed max-w-xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-3 py-1 bg-white/5 border border-white/10 text-on-surface-variant font-mono text-xs rounded transition-colors group-hover:border-primary-container/30 group-hover:text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/huanjia-hong-867887327/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary border border-primary/30 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all"
                  >
                    View Technical Case
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
