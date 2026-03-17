import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Sparkles, ArrowRight, Zap, Brain, Workflow } from 'lucide-react';

const roles = [
  'a Backend Developer',
  'a Data Scientist',
  'an ML Engineer',
  'a CRM Consultant',
  'an Automation Engineer'
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const floatingIcons = [
    { icon: Github, delay: 0, x: -120, y: -80 },
    { icon: Brain, delay: 0.2, x: 150, y: -60 },
    { icon: Workflow, delay: 0.4, x: -100, y: 100 },
    { icon: Zap, delay: 0.6, x: 130, y: 80 },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-effects">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} />
            <span>Open to Remote Roles</span>
          </motion.div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Nelson Mwaura</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">I'm </span>
            <span className="role-text">{displayText}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-description">
            Backend developer and data scientist based in Nairobi, Kenya.
            I build <strong>Django APIs</strong>, <strong>ML pipelines</strong>, and <span className="highlight">n8n automation workflows</span> —
            and I own the full stack from database schema to deployed product.
            Currently open to <strong>remote roles</strong> with US or EU companies.
          </p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="stat-item">
              <span className="stat-value">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">10+</span>
              <span className="stat-label">Apps Shipped</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">100+</span>
              <span className="stat-label">HTB Challenges</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              <Workflow size={20} />
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="https://github.com/Nmwaura132" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={20} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="hero-avatar-container">
            <div className="avatar-ring"></div>
            <div className="avatar-glow"></div>
            <div className="avatar-placeholder">
              <Brain size={80} />
            </div>

            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className="floating-icon"
                style={{ '--x': `${item.x}px`, '--y': `${item.y}px` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: item.delay + 0.5,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: item.delay
                  }
                }}
              >
                <item.icon size={28} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 6rem 0 4rem;
        }

        .hero-bg-effects {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
        }

        .hero-orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
          top: -200px;
          left: -100px;
          animation: float 15s ease-in-out infinite;
        }

        .hero-orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%);
          top: 50%;
          right: -150px;
          animation: float 18s ease-in-out infinite reverse;
        }

        .hero-orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
          bottom: -100px;
          left: 30%;
          animation: float 12s ease-in-out infinite;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 9999px;
          color: var(--color-accent);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-role {
          display: flex;
          align-items: center;
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          font-weight: 600;
          margin-bottom: 1.5rem;
          min-height: 2.5rem;
        }

        .role-prefix {
          color: var(--color-text-secondary);
        }

        .role-text {
          color: var(--color-primary);
          margin-left: 0.5rem;
        }

        .role-cursor {
          color: var(--color-primary);
          animation: blink-cursor 1s infinite;
          margin-left: 2px;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }

        .hero-description strong {
          color: var(--color-text-primary);
        }

        .hero-description .highlight {
          color: var(--color-primary);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.5rem 2rem;
          background: var(--color-bg-glass);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          margin-bottom: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-avatar-container {
          position: relative;
          width: 350px;
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-radius: 50%;
          background: linear-gradient(var(--color-bg-primary), var(--color-bg-primary)) padding-box,
                      var(--gradient-primary) border-box;
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .avatar-glow {
          position: absolute;
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
        }

        .avatar-placeholder {
          width: 200px;
          height: 200px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--color-bg-primary);
          z-index: 1;
        }

        .floating-icon {
          position: absolute;
          width: 56px;
          height: 56px;
          background: var(--color-bg-card);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--color-primary);
          transform: translate(var(--x), var(--y));
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content {
            order: 2;
          }

          .hero-visual {
            order: 1;
          }

          .hero-badge {
            justify-content: center;
          }

          .hero-role {
            justify-content: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-avatar-container {
            width: 280px;
            height: 280px;
          }

          .avatar-placeholder {
            width: 150px;
            height: 150px;
          }

          .floating-icon {
            width: 44px;
            height: 44px;
            transform: translate(calc(var(--x) * 0.7), calc(var(--y) * 0.7));
          }
        }

        @media (max-width: 640px) {
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-divider {
            width: 80px;
            height: 1px;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
