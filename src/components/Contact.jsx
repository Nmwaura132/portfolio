import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Let's Build Something Amazing</h2>
                    <p>Ready to automate your business processes? Let's talk.</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Get in Touch</h3>
                        <p className="contact-intro">
                            I'm always excited to work on new automation challenges.
                            Whether you need a custom n8n workflow, a Django backend,
                            or an AI chatbot — let's discuss how I can help.
                        </p>

                        <div className="contact-links">
                            <a href="mailto:nmwaura132@gmail.com" className="contact-link">
                                <div className="link-icon">
                                    <Mail size={22} />
                                </div>
                                <div className="link-info">
                                    <span className="link-label">Email</span>
                                    <span className="link-value">nmwaura132@gmail.com</span>
                                </div>
                                <ArrowUpRight size={18} className="link-arrow" />
                            </a>

                            <a href="tel:+254100368483" className="contact-link">
                                <div className="link-icon">
                                    <Phone size={22} />
                                </div>
                                <div className="link-info">
                                    <span className="link-label">Phone</span>
                                    <span className="link-value">+254 100 368 483</span>
                                </div>
                                <ArrowUpRight size={18} className="link-arrow" />
                            </a>

                            <a href="https://www.linkedin.com/in/nelson-peter" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <div className="link-icon linkedin">
                                    <Linkedin size={22} />
                                </div>
                                <div className="link-info">
                                    <span className="link-label">LinkedIn</span>
                                    <span className="link-value">nelson-peter</span>
                                </div>
                                <ArrowUpRight size={18} className="link-arrow" />
                            </a>

                            <a href="https://github.com/Nmwaura132" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <div className="link-icon github">
                                    <Github size={22} />
                                </div>
                                <div className="link-info">
                                    <span className="link-label">GitHub</span>
                                    <span className="link-value">Nmwaura132</span>
                                </div>
                                <ArrowUpRight size={18} className="link-arrow" />
                            </a>
                        </div>

                        <div className="location">
                            <MapPin size={18} />
                            <span>Nairobi, Kenya</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-cta glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="cta-content">
                            <div className="cta-badge">
                                <span className="badge-dot"></span>
                                Available for Projects
                            </div>
                            <h3>Ready to Automate?</h3>
                            <p>
                                Let's discuss your automation needs and build
                                solutions that save time and drive growth.
                            </p>
                            <ul className="cta-features">
                                <li>✓ n8n Workflow Development</li>
                                <li>✓ AI Chatbot Integration</li>
                                <li>✓ Django Backend Systems</li>
                                <li>✓ CRM & ERP Solutions</li>
                                <li>✓ Data Analytics & BI</li>
                            </ul>
                            <a href="mailto:nmwaura132@gmail.com" className="btn btn-primary cta-btn">
                                <Mail size={20} />
                                Start a Conversation
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        .contact-section {
          position: relative;
          padding-bottom: 6rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .contact-info,
        .contact-cta {
          padding: 2.5rem;
        }

        .contact-info h3 {
          font-size: 1.5rem;
          color: var(--color-text-primary);
          margin-bottom: 1rem;
        }

        .contact-intro {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--color-bg-tertiary);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
          text-decoration: none;
        }

        .contact-link:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateX(4px);
        }

        .contact-link:hover .link-arrow {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        .link-icon {
          width: 48px;
          height: 48px;
          background: var(--gradient-primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-bg-primary);
        }

        .link-icon.linkedin {
          background: #0077b5;
        }

        .link-icon.github {
          background: #333;
        }

        .link-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .link-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .link-value {
          font-size: 0.95rem;
          color: var(--color-text-primary);
          font-weight: 500;
        }

        .link-arrow {
          color: var(--color-primary);
          opacity: 0;
          transition: all var(--transition-base);
        }

        .location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        .contact-cta {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          border-color: rgba(0, 212, 255, 0.2);
          display: flex;
          align-items: center;
        }

        .cta-content {
          width: 100%;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-full);
          color: var(--color-accent);
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--color-accent);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .cta-content h3 {
          font-size: 2rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .cta-features {
          list-style: none;
          margin-bottom: 2rem;
        }

        .cta-features li {
          padding: 0.5rem 0;
          color: var(--color-text-secondary);
          font-size: 0.95rem;
        }

        .cta-btn {
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
