/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Instagram, 
  Linkedin, 
  ChevronRight, 
  Sparkles,
  Heart,
  BookOpen,
  User,
  Coffee,
  Moon,
  Dog,
  Cake,
  Camera,
  Palette
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-white/10 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xs font-mono tracking-[0.3em] uppercase opacity-60 text-sky-600"
      >
        TJ / 2026
      </motion.div>
      <div className="flex gap-8">
        {['About', 'Education', 'Hobbies', 'Contact'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-[10px] uppercase tracking-widest font-bold text-sky-800 hover:text-coral-500 transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden beachy-gradient">
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-coral-300/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center md:text-left">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sky-600 font-mono text-xs tracking-[0.4em] uppercase mb-6"
        >
          Creative & Detail-Oriented
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-[11rem] font-display leading-[0.85] mb-8 tracking-tight text-sky-900 italic"
        >
          Twisha <br />
          <span className="text-coral-400 not-italic">Jain</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 md:items-center justify-center md:justify-start"
        >
          <div className="flex items-center gap-2 text-sky-800/60">
            <MapPin size={14} />
            <span className="text-xs uppercase tracking-widest">Mumbai, India</span>
          </div>
          <div className="hidden md:block w-12 h-[1px] bg-sky-800/20" />
          <div className="flex items-center gap-2 text-sky-800/60">
            <GraduationCap size={14} />
            <span className="text-xs uppercase tracking-widest">Jai Hind College</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-sky-800/40">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400 to-transparent" />
      </motion.div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16">
    <p className="text-coral-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">{subtitle}</p>
    <h2 className="text-4xl md:text-6xl font-serif italic text-sky-900">{title}</h2>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-24 bg-white">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-center">
        <div>
          <SectionHeader title="A Creative Soul" subtitle="About Me" />
          <div className="space-y-6 text-xl text-sky-900/80 leading-relaxed font-serif italic">
            <p>
              "Hi, I’m a creative and detail-oriented individual with a strong interest in design, content, and digital media. I enjoy working on visually engaging projects and exploring new tools that help bring ideas to life. I believe in continuous learning and love experimenting with different styles to improve my skills."
            </p>
            <div className="flex gap-4 pt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest">
                <Palette size={14} /> Design
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-coral-100 text-coral-700 text-xs font-bold uppercase tracking-widest">
                <Camera size={14} /> Content
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://picsum.photos/seed/creative/1000/1000" 
            alt="Twisha Jain" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const items = [
    {
      year: "2022 - Present",
      title: "Bachelors in Digital Strategy (BDS)",
      institution: "Jai Hind College, Mumbai",
      description: "Exploring the intersection of creativity and strategy in the digital world.",
      icon: <Sparkles size={20} />
    },
    {
      year: "2020 - 2022",
      title: "Higher Secondary Education",
      institution: "Delhi Public School Ludhiana",
      description: "Where my journey into design and digital media began.",
      icon: <BookOpen size={20} />
    }
  ];

  return (
    <section id="education" className="py-32 px-6 md:px-24 bg-sky-50/50">
      <SectionHeader title="My Academic Path" subtitle="Education" />
      <div className="space-y-12">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 md:gap-16 group"
          >
            <div className="hidden md:block text-xs font-mono text-sky-600/60 pt-2 w-32 shrink-0">
              {item.year}
            </div>
            <div className="relative pl-8 border-l-2 border-sky-200 pb-12 group-last:pb-0">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-sky-400" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-white shadow-sm text-sky-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-sky-900">{item.title}</h3>
              </div>
              <p className="text-coral-500 text-sm mb-4 font-bold uppercase tracking-widest">{item.institution}</p>
              <p className="text-sky-800/60 leading-relaxed max-w-2xl">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Hobbies = () => {
  const hobbies = [
    {
      title: "Baking Magic",
      desc: "There's something therapeutic about the smell of fresh cookies and the precision of a perfect cake.",
      icon: <Cake className="text-coral-400" />,
      img: "https://picsum.photos/seed/baking/600/400"
    },
    {
      title: "Animal Lover",
      desc: "I love animals so deeply. They bring a pure kind of joy that nothing else can match.",
      icon: <Dog className="text-sky-400" />,
      img: "https://picsum.photos/seed/pets/600/400"
    },
    {
      title: "The Art of Sleep",
      desc: "Recharging is a creative act too! I value my rest and the dreams that come with it.",
      icon: <Moon className="text-purple-400" />,
      img: "https://picsum.photos/seed/sleep/600/400"
    },
    {
      title: "Coffee & Design",
      desc: "Fueling my creativity one cup at a time while exploring new digital tools.",
      icon: <Coffee className="text-amber-400" />,
      img: "https://picsum.photos/seed/coffee/600/400"
    }
  ];

  return (
    <section id="hobbies" className="py-32 px-6 md:px-24">
      <SectionHeader title="More About Me" subtitle="Hobbies & Interests" />
      
      {/* Video Feature Section */}
      <div className="mb-20 rounded-[3rem] overflow-hidden relative aspect-video shadow-2xl glass-card">
        <video 
          className="w-full h-full object-cover opacity-80"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://picsum.photos/seed/beach-video/1920/1080"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-gentle-waves-on-a-sandy-beach-1579-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <h3 className="text-white text-4xl md:text-6xl font-display italic drop-shadow-lg">Beachy Vibes</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {hobbies.map((hobby, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img 
                src={hobby.img} 
                alt={hobby.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-sm shadow-sm">
                {hobby.icon}
              </div>
            </div>
            <h3 className="text-2xl font-serif text-sky-900 mb-3">{hobby.title}</h3>
            <p className="text-sky-800/60 leading-relaxed">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-24">
      <div className="glass-card p-12 md:p-24 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral-200/30 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <SectionHeader title="Let's Say Hi" subtitle="Contact" />
          <p className="text-xl text-sky-800/60 mb-12 font-serif italic">
            Whether it's about a project, a baking recipe, or just to share a cute animal photo, I'd love to hear from you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:twishaa07@gmail.com" 
              className="flex items-center gap-3 px-10 py-5 rounded-full bg-sky-500 text-white font-bold hover:bg-sky-600 transition-all shadow-lg hover:shadow-sky-200 group"
            >
              <Mail size={18} />
              <span>Email Me</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={24} />, label: 'Instagram', href: '#' },
                { icon: <Linkedin size={24} />, label: 'LinkedIn', href: '#' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-sky-100 text-sky-500 hover:bg-sky-50 hover:text-sky-600 transition-all shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-24 border-t border-sky-100 flex flex-col md:flex-row justify-between items-center gap-6 bg-white">
      <div className="text-[10px] uppercase tracking-[0.3em] text-sky-800/40 font-bold">
        © 2026 Twisha Jain. Made with Love.
      </div>
      <div className="flex gap-8">
        <span className="text-[10px] uppercase tracking-[0.2em] text-sky-800/40 font-bold">Beachy Vibes Only</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-sky-800/40 font-bold">Jai Hind College</span>
      </div>
    </footer>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen selection:bg-sky-200">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#FDFBF7] flex items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-sky-400 font-mono text-sm tracking-[1em] uppercase"
            >
              Sandy...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
