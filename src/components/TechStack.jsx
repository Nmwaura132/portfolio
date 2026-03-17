import { motion } from 'framer-motion';

const technologies = [
    {
        name: 'Python',
        icon: '🐍',
        color: '#3776ab',
        proficiency: 95,
        description: 'Data Analysis, ML, Automation'
    },
    {
        name: 'Django',
        icon: '🎯',
        color: '#092e20',
        proficiency: 90,
        description: 'Backend, REST APIs, ERP Systems'
    },
    {
        name: 'React',
        icon: '⚛️',
        color: '#61dafb',
        proficiency: 85,
        description: 'Frontend, UI/UX, SPAs'
    },
    {
        name: 'n8n',
        icon: '🔄',
        color: '#ea4b71',
        proficiency: 92,
        description: 'Workflow Automation, Integrations'
    },
    {
        name: 'SQL',
        icon: '🗃️',
        color: '#f29111',
        proficiency: 90,
        description: 'Database Design, Queries, Optimization'
    },
    {
        name: 'Power BI',
        icon: '📊',
        color: '#f2c811',
        proficiency: 88,
        description: 'Data Visualization, Dashboards'
    },
    {
        name: 'Machine Learning',
        icon: '🤖',
        color: '#ff6f61',
        proficiency: 82,
        description: 'Predictive Models, TensorFlow'
    },
    {
        name: 'WhatsApp API',
        icon: '💬',
        color: '#25d366',
        proficiency: 88,
        description: 'Chatbots, Business Messaging'
    }
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="tech-stack-section section">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Tech Stack</h2>
                    <p>Technologies I use to build powerful automation solutions</p>
                </motion.div>

                <div className="tech-grid">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            className="tech-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="tech-header">
                                <div className="tech-icon" style={{ '--tech-color': tech.color }}>
                                    <span>{tech.icon}</span>
                                </div>
                                <div className="tech-info">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>
                            </div>

                            <div className="tech-proficiency">
                                <div className="proficiency-header">
                                    <span>Proficiency</span>
                                    <span className="proficiency-value">{tech.proficiency}%</span>
                                </div>
                                <div className="proficiency-bar">
                                    <motion.div
                                        className="proficiency-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${tech.proficiency}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
                                        style={{ '--tech-color': tech.color }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .tech-stack-section {
          position: relative;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .tech-card {
          padding: 1.5rem;
        }

        .tech-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .tech-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--tech-color) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          flex-shrink: 0;
        }

        .tech-info h4 {
          color: var(--color-text-primary);
          margin-bottom: 0.25rem;
        }

        .tech-info p {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        .tech-proficiency {
          margin-top: auto;
        }

        .proficiency-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .proficiency-value {
          color: var(--color-primary);
          font-weight: 600;
        }

        .proficiency-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .proficiency-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--tech-color), var(--color-primary));
          border-radius: var(--radius-full);
          position: relative;
        }

        .proficiency-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          animation: shine 2s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 640px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
