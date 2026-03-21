import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const navItems = [
  { id: 'about',    label: 'About'    },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills'   },
  { id: 'contact',  label: 'Contact'  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-10% 0px -60% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Name & Title */}
      <div>
        <h1 className="sidebar-name">Nelson<br />Mwaura</h1>
        <p className="sidebar-title">Backend Dev · Data Scientist · ML Engineer</p>
        <p className="sidebar-tagline">
          Building reliable APIs, data pipelines, and automation systems
          for companies that move fast. Based in Nairobi, open to remote.
        </p>
        <div className="sidebar-badge">
          <span className="sidebar-badge-dot" />
          Open to Remote Roles
        </div>
      </div>

      {/* Navigation */}
      <nav aria-label="Main navigation">
        <ul className="sidebar-nav">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`sidebar-nav-link${activeSection === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Terminal button */}
      <button
        className="sidebar-terminal-btn"
        onClick={() => window.dispatchEvent(new Event('open-terminal'))}
        aria-label="Open terminal"
      >
        <Terminal size={14} />
        <span>Open Terminal</span>
        <code className="sidebar-terminal-hint">`</code>
      </button>

      {/* Social links */}
      <div className="sidebar-social">
        <a
          href="https://github.com/Nmwaura132"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/nelson-peter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a href="mailto:nmwaura132@gmail.com" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
    </motion.div>
  );
}
