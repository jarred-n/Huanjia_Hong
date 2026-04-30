import { motion } from 'motion/react';
import { Layers, Zap, Cpu, BarChart3 } from 'lucide-react';

export default function Strengths() {
  const strengths = [
    {
      title: 'Frontend Architecture',
      description: 'Mastering component design, sophisticated state management systems, and scalable enterprise patterns for complex applications.',
      icon: Layers,
      color: 'text-primary-container',
      span: 'md:col-span-2'
    },
    {
      title: 'Performance',
      description: 'Core Web Vitals auditing, bundle size reduction, and advanced performance profiling.',
      icon: Zap,
      color: 'text-secondary'
    },
    {
      title: 'Real-time',
      description: 'Building low-latency collaboration tools using Socket.IO and WebRTC protocols.',
      icon: Cpu,
      color: 'text-tertiary'
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 mb-40">
      <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
        <BarChart3 className="text-primary-container" size={32} />
        Technical Strengths
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {strengths.map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-8 rounded-xl ${item.span || ''}`}
          >
            <item.icon className={`${item.color} mb-4`} size={32} />
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 rounded-xl md:col-span-4"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <BarChart3 className="text-primary-container mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-3">Data Visualization & Enterprise UI</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Architecting complex, data-driven interfaces using D3.js and HTML5 Canvas for high-density information displays in mission-critical environments.
              </p>
            </div>
            <div className="hidden md:flex w-48 h-12 glass-card border-none items-center justify-center overflow-hidden">
              <div className="flex gap-1.5 h-full items-end pb-2">
                {[40, 20, 60, 30, 50, 25, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className={`w-1 rounded-full ${i % 2 === 0 ? 'bg-primary-container' : 'bg-secondary'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
