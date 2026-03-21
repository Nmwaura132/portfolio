import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowDown, Linkedin } from 'lucide-react';

const roles = [
  'a Backend Developer',
  'a Data Scientist',
  'an ML Engineer',
  'a CRM Consultant',
  'an Automation Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="about" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="hero-greeting">Hi, my name is</p>

        <h1 className="hero-name">Nelson Mwaura.</h1>

        <div className="hero-role-line">
          I&apos;m <span className="hero-role-text">{displayed}</span>
          <span className="hero-cursor" />
        </div>

        <p className="hero-description">
          Backend engineer and data scientist based in Nairobi, Kenya with 5+ years
          building Django REST APIs, ML pipelines, and n8n automation workflows.
          Passionate about turning raw data into reliable systems. Open to full-time
          remote roles with US/EU companies.
        </p>

        <div className="hero-stats">
          <span className="hero-stat-item"><span>5+</span> Years Experience</span>
          <span className="hero-stat-item"><span>10+</span> Apps Shipped</span>
          <span className="hero-stat-item"><span>100+</span> HTB Challenges</span>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            <ArrowDown size={16} />
            View Projects
          </a>
          <a
            href="https://github.com/Nmwaura132"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nelson-peter"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
