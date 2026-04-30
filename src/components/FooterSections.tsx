import { motion } from 'motion/react';
import { Grid, Mail, Link as LinkIcon, MapPin } from 'lucide-react';

const skillCategories = [
  {
    title: 'FRONTEND',
    skills: ['React', 'Vue', 'Angular', 'TypeScript'],
    color: 'text-secondary'
  },
  {
    title: 'STATE & UI',
    skills: ['NgRx', 'Pinia', 'Redux', 'Tailwind'],
    color: 'text-primary'
  },
  {
    title: 'VIS / REALTIME',
    skills: ['D3.js', 'Canvas', 'Socket.IO', 'WebRTC'],
    color: 'text-tertiary'
  },
  {
    title: 'BACKEND / TOOLING',
    skills: ['Node.js', 'Git', 'Vite', 'Webpack'],
    color: 'text-on-surface-variant'
  }
];

export function Stack() {
  return (
    <section id="stack" className="max-w-7xl mx-auto px-8 mb-40">
      <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
        <Grid className="text-primary-container" size={32} />
        Skills Matrix
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-xl hover:bg-white/[0.03]"
          >
            <h4 className={`font-display text-xs font-bold tracking-widest mb-6 ${cat.color}`}>{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-2 py-1 bg-white/5 text-on-surface text-[10px] font-mono rounded-sm border border-transparent hover:border-white/20 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 mb-40">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-12 md:p-20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left relative overflow-hidden"
      >
        <div className="relative z-10">
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">Let's build together</h3>
          <p className="text-on-surface-variant text-lg">Currently based in Auckland, New Zealand. Open to global collaboration.</p>
        </div>
        
        <div className="flex gap-8 relative z-10">
          <ContactLink icon={Mail} label="Email" href="mailto:hhuanjia86@gmail.com" />
          <ContactLink icon={LinkIcon} label="LinkedIn" href="https://www.linkedin.com/in/huanjia-hong-867887327/" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-secondary border-secondary/30">
              <MapPin size={24} />
            </div>
            <span className="font-display text-[10px] uppercase font-bold text-slate-500 tracking-wider">Auckland, NZ</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[100px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] -ml-32 -mb-32" />
      </motion.div>
    </section>
  );
}

function ContactLink({ icon: Icon, label, href }: { icon: any, label: string, href: string }) {
  return (
    <motion.a 
      href={href} 
      target={href.startsWith('http') || href.startsWith('mailto') ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-2 group transition-transform"
    >
      <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center group-hover:text-primary-container group-hover:border-primary-container/50 transition-all duration-300">
        <Icon size={24} />
      </div>
      <span className="font-display text-[10px] uppercase font-bold text-slate-500 group-hover:text-white tracking-wider transition-colors">{label}</span>
    </motion.a>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-16 border-t border-white/5 bg-background/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase font-light text-slate-500">
          © {new Date().getFullYear()} HUANJIA HONG // ARCHITECTING THE FUTURE
        </p>
        <div className="flex gap-10">
          {[
            { label: 'Email', href: 'mailto:hhuanjia86@gmail.com' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/huanjia-hong-867887327/' },
            { label: 'GitHub', href: '#' }
          ].map(link => (
            <a 
              key={link.label} 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-[0.3em] uppercase font-medium text-slate-500 hover:text-primary-container transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
