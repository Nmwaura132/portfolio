import { motion } from 'framer-motion';
import {
    ExternalLink, Github, TrendingUp, Clock, Users,
    Database, Brain, Zap, BarChart3
} from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'NSE Analytics',
        category: 'Full-Stack · Data Science',
        description: 'Full-stack Nairobi Securities Exchange analytics platform. Real-time stock data, ML-powered price forecasting, technical indicators (RSI, MACD, Bollinger Bands), Telegram bot alerts, and portfolio management — containerized with Docker.',
        image: null,
        icon: BarChart3,
        color: '#00d4ff',
        status: 'live',
        github: 'https://github.com/Nmwaura132/nse-analytics',
        demo: null,
        technologies: ['Django', 'React', 'Python', 'MySQL', 'Docker', 'scikit-learn', 'Telegram API'],
        impacts: [
            { icon: TrendingUp, value: '60+', label: 'Stocks tracked' },
            { icon: Brain, value: 'ML', label: 'Price forecasting' },
            { icon: Database, value: '3', label: 'Docker services' }
        ],
        highlights: [
            'Random Forest + Linear Regression models for price prediction',
            'Real-time data via RapidAPI with custom NSE scrapers',
            'Telegram bot delivering market alerts and portfolio tracking'
        ]
    },
    {
        id: 2,
        title: 'Kenya Real Estate Price Predictor',
        category: 'Machine Learning · MLOps',
        description: 'ML pipeline predicting Kenyan property prices from scraped listings. Feature engineering on location, size, and amenity data. Experiment tracking with MLflow, served via a FastAPI endpoint with a React dashboard.',
        image: null,
        icon: Brain,
        color: '#10b981',
        status: 'live',
        github: 'https://github.com/Nmwaura132',
        demo: null,
        technologies: ['Python', 'XGBoost', 'MLflow', 'FastAPI', 'pandas', 'React', 'BeautifulSoup'],
        impacts: [
            { icon: TrendingUp, value: 'XGBoost', label: 'Model' },
            { icon: Brain, value: 'MLflow', label: 'Experiment tracking' },
            { icon: Zap, value: 'API', label: 'Live predictions' }
        ],
        highlights: [
            'Web scraping pipeline collecting listings from Kenyan property sites',
            'MLflow tracking across model experiments with feature importance analysis',
            'FastAPI endpoint serving predictions with confidence intervals'
        ]
    },
    {
        id: 3,
        title: 'WhatsApp AI FAQ Bot',
        category: 'AI · Automation',
        description: 'Business FAQ bot built on n8n and the WhatsApp Business API. Uses OpenAI to understand natural language queries, retrieves answers from a knowledge base, and escalates unresolved questions to a human agent.',
        image: null,
        icon: Zap,
        color: '#a855f7',
        status: 'live',
        github: 'https://github.com/Nmwaura132',
        demo: null,
        technologies: ['n8n', 'WhatsApp API', 'OpenAI', 'Python', 'Webhook', 'JSON'],
        impacts: [
            { icon: Zap, value: 'AI', label: 'NLP understanding' },
            { icon: Clock, value: '24/7', label: 'Availability' },
            { icon: Users, value: 'Auto', label: 'Human escalation' }
        ],
        highlights: [
            'n8n workflow handling message routing and OpenAI query processing',
            'Knowledge base lookup with fallback to human escalation',
            'Full conversation history maintained per user session'
        ]
    },
    {
        id: 4,
        title: 'Invoice Generator',
        category: 'Full-Stack',
        description: 'Web app for creating, sending, and tracking invoices. Django REST backend with a React frontend — supports PDF export, client management, payment status tracking, and email delivery.',
        image: null,
        icon: Database,
        color: '#f59e0b',
        status: 'live',
        github: 'https://github.com/Nmwaura132',
        demo: null,
        technologies: ['Django', 'React', 'MySQL', 'REST API', 'PDF generation', 'Docker'],
        impacts: [
            { icon: TrendingUp, value: 'PDF', label: 'Export ready' },
            { icon: Users, value: 'Multi', label: 'Client management' },
            { icon: Zap, value: 'Email', label: 'Auto delivery' }
        ],
        highlights: [
            'Django REST API with React frontend and JWT authentication',
            'PDF invoice generation with customisable templates',
            'Payment status tracking with automated email reminders'
        ]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="projects-section section">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Featured Projects</h2>
                    <p>Real-world solutions with measurable impact</p>
                </motion.div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="project-header">
                                <div
                                    className="project-icon"
                                    style={{ '--project-color': project.color }}
                                >
                                    <project.icon size={32} />
                                </div>
                                <div className="project-meta">
                                    <div className="project-meta-top">
                                        <span className="project-category">{project.category}</span>
                                        {project.status === 'building' && (
                                            <span className="status-badge">In Development</span>
                                        )}
                                    </div>
                                    <h3>{project.title}</h3>
                                </div>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-impacts">
                                {project.impacts.map((impact, i) => (
                                    <div key={i} className="impact-item">
                                        <impact.icon size={18} className="impact-icon" style={{ color: project.color }} />
                                        <div className="impact-data">
                                            <span className="impact-value">{impact.value}</span>
                                            <span className="impact-label">{impact.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="project-highlights">
                                <h4>Key Highlights</h4>
                                <ul>
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i}>
                                            <span className="highlight-bullet" style={{ background: project.color }}></span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tech">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-actions">
                                {project.github ? (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                                        <Github size={18} />
                                        View Code
                                    </a>
                                ) : (
                                    <span className="action-btn action-btn-disabled">
                                        <Github size={18} />
                                        Coming Soon
                                    </span>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn action-btn-secondary">
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .projects-section {
          position: relative;
        }

        .projects-list {
          display: grid;
          gap: 2rem;
        }

        .project-card {
          padding: 2rem;
          display: grid;
          gap: 1.5rem;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .project-icon {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, var(--project-color) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .project-meta {
          flex: 1;
        }

        .project-meta-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .project-category {
          font-size: 0.75rem;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .status-badge {
          font-size: 0.65rem;
          padding: 0.2rem 0.6rem;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #f59e0b;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .project-meta h3 {
          font-size: 1.5rem;
          color: var(--color-text-primary);
        }

        .project-description {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
        }

        .project-impacts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .impact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--color-bg-tertiary);
          border-radius: var(--radius-md);
        }

        .impact-data {
          display: flex;
          flex-direction: column;
        }

        .impact-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .impact-label {
          font-size: 0.7rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-highlights h4 {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }

        .project-highlights ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .project-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .highlight-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          padding: 0.375rem 0.875rem;
          background: var(--color-bg-glass);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          color: var(--color-text-secondary);
        }

        .project-actions {
          display: flex;
          gap: 1rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: var(--gradient-primary);
          border: none;
          border-radius: var(--radius-md);
          color: var(--color-bg-primary);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }

        .action-btn-secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--color-text-primary);
        }

        .action-btn-secondary:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          box-shadow: none;
        }

        .action-btn-disabled {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--color-text-muted);
          cursor: default;
          opacity: 0.5;
        }

        .action-btn-disabled:hover {
          transform: none;
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .project-impacts {
            grid-template-columns: 1fr;
          }

          .project-header {
            flex-direction: column;
            text-align: center;
          }

          .project-icon {
            margin: 0 auto;
          }

          .project-actions {
            flex-direction: column;
          }

          .action-btn {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
}
