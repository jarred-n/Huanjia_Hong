import { motion } from 'motion/react';
import { History } from 'lucide-react';

const experiences = [
  {
    period: '2021 — PRESENT',
    role: 'Software Engineer',
    description: 'Leading the architectural transition of enterprise platforms to modern tech stacks. Focused on improving developer experience and performance metrics across large-scale distributed teams.',
    active: true
  },
  {
    period: '2019 — 2021',
    role: 'Junior Web Developer',
    description: 'Developed and maintained various healthcare administration tools. Specialized in implementing complex RBAC systems and real-time messaging features.',
    active: false
  },
  {
    period: '2017 — 2019',
    role: 'Education & Early Projects',
    description: 'Academic background focused on Computer Science. Completed several internships focused on data visualization and frontend performance.',
    active: false
  }
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-8 mb-40">
      <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
        <History className="text-primary-container" size={32} />
        Professional Journey
      </h3>
      
      <div className="relative border-l border-white/10 ml-4 pl-12 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <div className={`absolute -left-[56px] top-1.5 w-4 h-4 rounded-full border-4 border-background ${exp.active ? 'bg-primary-container scale-125' : 'bg-surface-container-highest opacity-50'}`} />
            
            <span className={`font-mono text-xs mb-2 block tracking-widest ${exp.active ? 'text-primary-container font-bold' : 'text-slate-500'}`}>
              {exp.period}
            </span>
            <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
            <p className="text-on-surface-variant max-w-3xl leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
