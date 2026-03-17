import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Workflow, Code, Briefcase, Mail, BarChart3 } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home', icon: Code },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#tech-stack', label: 'Tech Stack', icon: BarChart3 },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo">
          <div className="logo-icon">
            <Workflow size={24} />
          </div>
          <span className="logo-text">
            Nelson<span className="logo-accent">.dev</span>
          </span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon size={20} />
                {link.label}
              </a>
            ))}
            <a href="mailto:nmwaura132@gmail.com" className="mobile-chat-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <Mail size={20} />
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 0;
          transition: all var(--transition-base);
        }

        .navbar.scrolled {
          background: rgba(10, 14, 26, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.75rem 0;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-icon {
          width: 44px;
          height: 44px;
          background: var(--gradient-primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-bg-primary);
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .logo-accent {
          color: var(--color-primary);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link {
          padding: 0.625rem 1rem;
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--color-text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-chat-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          background: var(--gradient-primary);
          border: none;
          border-radius: var(--radius-full);
          color: var(--color-bg-primary);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .nav-chat-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }

        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--color-text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 1rem;
          background: var(--color-bg-secondary);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          color: var(--color-text-secondary);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .mobile-nav-link:hover {
          color: var(--color-text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-chat-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          margin-top: 0.5rem;
          background: var(--gradient-primary);
          border: none;
          border-radius: var(--radius-md);
          color: var(--color-bg-primary);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .navbar-links {
            display: none;
          }

          .nav-chat-btn {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </motion.nav>
  );
}
