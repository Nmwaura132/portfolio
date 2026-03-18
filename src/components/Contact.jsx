import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-number">04.</p>
        <h2 className="section-heading">Get In Touch</h2>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-card card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="contact-intro">
            I'm always open to new opportunities and interesting projects.
            Whether you need a Django backend, an ML pipeline, or an n8n
            automation workflow — let's talk.
          </p>

          <div className="contact-links">
            <a href="mailto:nmwaura132@gmail.com" className="contact-link">
              <div className="contact-link-icon"><Mail size={18} /></div>
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">nmwaura132@gmail.com</div>
              </div>
            </a>

            <a href="tel:+254100368483" className="contact-link">
              <div className="contact-link-icon"><Phone size={18} /></div>
              <div>
                <div className="contact-link-label">Phone</div>
                <div className="contact-link-value">+254 100 368 483</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/nelson-peter"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon"><Linkedin size={18} /></div>
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">nelson-peter</div>
              </div>
            </a>

            <a
              href="https://github.com/Nmwaura132"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon"><Github size={18} /></div>
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">Nmwaura132</div>
              </div>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
            <MapPin size={16} />
            <span>Nairobi, Kenya</span>
          </div>
        </motion.div>

        <motion.div
          className="contact-card card"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="contact-cta-title">Ready to Work Together?</h3>
          <p className="contact-cta-text">
            Let's discuss your needs and build something reliable.
          </p>

          <ul className="contact-services">
            <li>Django Backend Systems</li>
            <li>ML Pipelines &amp; Data Science</li>
            <li>n8n Workflow Automation</li>
            <li>AI Chatbot Integration</li>
            <li>CRM &amp; ERP Solutions</li>
            <li>Data Analytics &amp; BI</li>
          </ul>

          <a href="mailto:nmwaura132@gmail.com" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Mail size={18} />
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
