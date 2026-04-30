import { motion } from 'motion/react';

export default function Navbar() {
  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#111119]/70 backdrop-blur-xl border-b border-white/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tighter text-slate-100"
        >
          HUANJIA HONG
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="font-sans tracking-tight text-sm uppercase font-medium text-slate-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.a 
          href="https://www.linkedin.com/in/huanjia-hong-867887327/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,112,243,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-container text-white px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(0,112,243,0.3)] block"
        >
          Resume
        </motion.a>
      </nav>
    </header>
  );
}
