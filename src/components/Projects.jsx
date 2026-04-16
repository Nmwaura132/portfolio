import { motion } from 'framer-motion';
import { Github, ExternalLink, BarChart3, Zap, FileText, CheckSquare, TrendingUp, Briefcase } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NSE Analytics',
    category: 'Full-Stack · Machine Learning',
    description:
      'Full-stack Nairobi Securities Exchange analytics platform with a production-hardened ML layer. Walk-forward validated Random Forest price forecasting, Markowitz portfolio optimisation with Ledoit-Wolf covariance shrinkage, MACD/RSI strategy backtesting with Sharpe ratio, and a Telegram bot delivering real-time alerts — containerized with Docker.',
    icon: BarChart3,
    github: 'https://github.com/Nmwaura132/nse-analytics',
    demo: null,
    technologies: ['Django', 'React', 'Python', 'MySQL', 'Docker', 'scikit-learn', 'Telegram API'],
    highlights: [
      'Walk-forward cross-validation (5 folds) with directional accuracy benchmarked against persistence baseline',
      'Markowitz portfolio optimiser with Ledoit-Wolf covariance shrinkage for stable efficient frontier on NSE equities',
      'MACD + RSI backtester reporting Sharpe ratio, max drawdown, and equity curve vs buy-and-hold',
    ],
  },
  {
    id: 2,
    title: 'Kenya Mobile Money EDA',
    category: 'Data Science · EDA',
    description:
      'Exploratory data analysis tracing Kenya\'s fintech revolution across 16 years of M-Pesa CBK data. Growth curves from 2007 launch to 77M+ accounts, multiplicative seasonal decomposition, year-over-year analysis with COVID-19 impact, and correlation analysis identifying the agent network as the leading indicator of transaction volume.',
    icon: TrendingUp,
    github: 'https://github.com/Nmwaura132/mpesa-growth-eda',
    demo: null,
    technologies: ['Python', 'pandas', 'matplotlib', 'seaborn', 'statsmodels', 'Jupyter'],
    highlights: [
      'Traced Kenya\'s fintech revolution across 16 years of M-Pesa data — from 2007 launch to 77M+ registered accounts',
      'Identified seasonal transaction spikes (Dec/Jan) and the 2020 COVID-era volume dip with annotated visualisations',
      'Correlation analysis (r > 0.98) revealed agent network growth as the strongest predictor of transaction value',
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
    title: 'FlowTodo',
    category: 'Full-Stack · Productivity',
    description:
      'Cross-platform offline-first Kanban + todo app. Web (React + Vite) and mobile (React Native + Expo) share a Zustand store, syncing via Supabase Realtime. Features NLP date parsing, a custom Calendly-style date picker, recurring tasks, and push reminders.',
    icon: CheckSquare,
    github: 'https://github.com/Nmwaura132/flow-todo',
    demo: null,
    technologies: ['React', 'React Native', 'Expo', 'FastAPI', 'Supabase', 'Zustand', 'dnd-kit', 'Celery', 'TypeScript'],
    highlights: [
      'True offline-first with IndexedDB queue and last-write-wins conflict resolution',
      'NLP date detection via chrono-node — type "fix bug tomorrow" and the date auto-fills',
      'Celery beat generates next recurrence when a recurring task is marked done',
    ],
  },
  {
    id: 5,
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
  {
    id: 6,
    title: 'CareerOps — Job Board & ATS',
    category: 'Full-Stack · HR Tech',
    description:
      'Public job board and applicant tracking portal built for an enterprise real estate firm. Candidates browse live vacancies, submit multi-step applications with CV upload, and track progress through a personal dashboard with an interview calendar. Backed by a Django REST API.',
    icon: Briefcase,
    github: 'https://github.com/Nmwaura132',
    demo: null,
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'shadcn/ui', 'Redux Toolkit', 'FullCalendar', 'Recharts', 'Axios'],
    highlights: [
      'Live vacancy feed from a REST API with date/status filtering — only active, externally-published roles shown',
      'Applicant dashboard with application history, progress tracking, and an interview calendar (FullCalendar)',
      'Protected routes with JWT auth, auto-logout on inactivity, and Zod-validated multi-step application forms',
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
              <project.icon size={22} color="var(--blue)" />
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
