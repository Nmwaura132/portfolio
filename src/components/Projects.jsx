import { motion } from 'framer-motion';
import { Github, ExternalLink, BarChart3, Brain, Zap, FileText } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NSE Analytics',
    category: 'Full-Stack · Data Science',
    description:
      'Full-stack Nairobi Securities Exchange analytics platform. Real-time stock data, ML-powered price forecasting, technical indicators (RSI, MACD, Bollinger Bands), Telegram bot alerts, and portfolio management — containerized with Docker.',
    icon: BarChart3,
    github: 'https://github.com/Nmwaura132/nse-analytics',
    demo: null,
    technologies: ['Django', 'React', 'Python', 'MySQL', 'Docker', 'scikit-learn', 'Telegram API'],
    highlights: [
      'Random Forest + Linear Regression models for price prediction',
      'Real-time data via RapidAPI with custom NSE scrapers',
      'Telegram bot delivering market alerts and portfolio tracking',
    ],
  },
  {
    id: 2,
    title: 'Kenya Real Estate Price Predictor',
    category: 'Machine Learning · MLOps',
    description:
      'ML pipeline predicting Kenyan property prices from scraped listings. Feature engineering on location, size, and amenity data. Experiment tracking with MLflow, served via a FastAPI endpoint with a React dashboard.',
    icon: Brain,
    github: 'https://github.com/Nmwaura132',
    demo: null,
    technologies: ['Python', 'XGBoost', 'MLflow', 'FastAPI', 'pandas', 'React', 'BeautifulSoup'],
    highlights: [
      'Web scraping pipeline collecting listings from Kenyan property sites',
      'MLflow tracking across model experiments with feature importance analysis',
      'FastAPI endpoint serving predictions with confidence intervals',
    ],
  },
  {
    id: 3,
    title: 'WhatsApp AI FAQ Bot',
    category: 'AI · Automation',
    description:
      'Business FAQ bot built on n8n and the WhatsApp Business API. Uses OpenAI to understand natural language queries, retrieves answers from a knowledge base, and escalates unresolved questions to a human agent.',
    icon: Zap,
    github: 'https://github.com/Nmwaura132',
    demo: null,
    technologies: ['n8n', 'WhatsApp API', 'OpenAI', 'Python', 'Webhook', 'JSON'],
    highlights: [
      'n8n workflow handling message routing and OpenAI query processing',
      'Knowledge base lookup with fallback to human escalation',
      'Full conversation history maintained per user session',
    ],
  },
  {
    id: 4,
    title: 'Document Intelligence API',
    category: 'AI · Backend',
    description:
      'Production-ready async API that extracts structured data from invoice PDFs and images using GPT-4o Vision. Celery + Redis job queue, PostgreSQL persistence, per-field confidence scoring, and a React drag-and-drop UI.',
    icon: FileText,
    github: 'https://github.com/Nmwaura132/doc-intel-api',
    demo: null,
    technologies: ['FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'GPT-4o Vision', 'React', 'Docker'],
    highlights: [
      'Async Celery queue — upload returns immediately, client polls for result',
      'Per-field confidence scores (0.0–1.0) with SHA-256 deduplication',
      'Multi-page PDF support via pdf2image at 300 DPI',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-number">02.</p>
        <h2 className="section-heading">Featured Projects</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="project-icon-wrap">
              <project.icon size={22} color="var(--teal)" />
            </div>

            <div className="project-body">
              <div className="project-header">
                <h3 className="project-name">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={15} />
                  Source
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={15} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
