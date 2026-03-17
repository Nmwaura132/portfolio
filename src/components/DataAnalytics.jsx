import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, Brain, Database, 
  PieChart, LineChart, Target, Zap, FileSpreadsheet
} from 'lucide-react';

const analyticsCapabilities = [
  {
    id: 1,
    title: 'Predictive Analytics',
    icon: Brain,
    color: '#a855f7',
    description: 'Machine learning models that forecast customer behavior, payment patterns, and engagement trends.',
    metrics: [
      { label: 'Model Accuracy', value: '94%' },
      { label: 'Features Analyzed', value: '50+' }
    ],
    tools: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas']
  },
  {
    id: 2,
    title: 'Business Intelligence',
    icon: BarChart3,
    color: '#00d4ff',
    description: 'Interactive Power BI dashboards providing real-time insights for executive decision-making.',
    metrics: [
      { label: 'Dashboards Built', value: '20+' },
      { label: 'KPIs Tracked', value: '100+' }
    ],
    tools: ['Power BI', 'DAX', 'SQL', 'Excel']
  },
  {
    id: 3,
    title: 'Data Warehousing',
    icon: Database,
    color: '#10b981',
    description: 'ETL pipelines that extract, transform, and load data from multiple sources into centralized warehouses.',
    metrics: [
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'Sources Integrated', value: '15+' }
    ],
    tools: ['Python', 'SQL', 'PostgreSQL', 'n8n']
  },
  {
    id: 4,
    title: 'Customer Analytics',
    icon: Target,
    color: '#f59e0b',
    description: 'Segmentation models and cohort analysis to understand customer lifetime value and churn risk.',
    metrics: [
      { label: 'Retention Improved', value: '25%' },
      { label: 'Segments Identified', value: '8' }
    ],
    tools: ['Python', 'NumPy', 'SQL', 'Power BI']
  }
];

const dataProjects = [
  {
    title: 'Heart Disease Risk Prediction',
    description: 'ML model predicting cardiovascular risk using patient health metrics',
    accuracy: '94%',
    impact: '1000+ predictions made'
  },
  {
    title: 'Customer Payment Forecasting',
    description: 'Time-series model forecasting payment behavior patterns',
    accuracy: '89%',
    impact: 'Improved collections by 30%'
  },
  {
    title: 'Lead Scoring Engine',
    description: 'AI-powered scoring for prioritizing high-value prospects',
    accuracy: '92%',
    impact: 'Conversion rate +35%'
  }
];

export default function DataAnalytics() {
  return (
    <section id="data-analytics" className="analytics-section section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Data Science & Analytics</h2>
          <p>Transforming raw data into actionable insights that drive business growth</p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="analytics-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <TrendingUp className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">10K+</span>
              <span className="stat-label">Data Points Analyzed Daily</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <PieChart className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">20+</span>
              <span className="stat-label">BI Dashboards Created</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <LineChart className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">5</span>
              <span className="stat-label">ML Models in Production</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Zap className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">30%</span>
              <span className="stat-label">Avg. Efficiency Gain</span>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="capabilities-grid">
          {analyticsCapabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              className="capability-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="capability-header">
                <div 
                  className="capability-icon"
                  style={{ '--cap-color': capability.color }}
                >
                  <capability.icon size={28} />
                </div>
                <h3>{capability.title}</h3>
              </div>

              <p className="capability-description">{capability.description}</p>

              <div className="capability-metrics">
                {capability.metrics.map((metric, i) => (
                  <div key={i} className="metric-item">
                    <span className="metric-value" style={{ color: capability.color }}>
                      {metric.value}
                    </span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="capability-tools">
                {capability.tools.map((tool, i) => (
                  <span key={i} className="tool-tag">{tool}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ML Projects Showcase */}
        <motion.div 
          className="ml-showcase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="showcase-header">
            <Brain size={28} />
            <h3>Machine Learning Models in Action</h3>
          </div>
          
          <div className="ml-projects">
            {dataProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="ml-project-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <div className="project-stats">
                  <div className="accuracy-badge">
                    <span className="accuracy-value">{project.accuracy}</span>
                    <span className="accuracy-label">Accuracy</span>
                  </div>
                  <div className="impact-text">
                    <FileSpreadsheet size={16} />
                    {project.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .analytics-section {
          position: relative;
          background: linear-gradient(180deg, transparent 0%, rgba(168, 85, 247, 0.03) 50%, transparent 100%);
        }

        .analytics-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 2rem 3rem;
          background: var(--color-bg-glass);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          padding: 12px;
          background: var(--gradient-secondary);
          border-radius: var(--radius-md);
          color: white;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .capability-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .capability-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .capability-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--cap-color) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .capability-header h3 {
          font-size: 1.25rem;
          color: var(--color-text-primary);
        }

        .capability-description {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          flex-grow: 1;
        }

        .capability-metrics {
          display: flex;
          gap: 1.5rem;
          padding: 1rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .metric-item {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .metric-label {
          font-size: 0.7rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .capability-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tool-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: var(--color-bg-tertiary);
          border-radius: var(--radius-full);
          color: var(--color-text-secondary);
        }

        .ml-showcase {
          background: var(--color-bg-glass);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: var(--radius-xl);
          padding: 2rem;
        }

        .showcase-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: var(--color-secondary);
        }

        .showcase-header h3 {
          font-size: 1.25rem;
          background: var(--gradient-secondary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ml-projects {
          display: grid;
          gap: 1rem;
        }

        .ml-project-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: var(--color-bg-tertiary);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
        }

        .ml-project-card:hover {
          background: rgba(168, 85, 247, 0.1);
          transform: translateX(4px);
        }

        .project-info h4 {
          font-size: 1rem;
          color: var(--color-text-primary);
          margin-bottom: 0.25rem;
        }

        .project-info p {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .project-stats {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .accuracy-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
        }

        .accuracy-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .accuracy-label {
          font-size: 0.6rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .impact-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .analytics-stats {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .stat-divider {
            width: 80px;
            height: 1px;
          }

          .capabilities-grid {
            grid-template-columns: 1fr;
          }

          .ml-project-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .project-stats {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}
