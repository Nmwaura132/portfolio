import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, RefreshCw, Brain, MessageSquare,
    Database, FileSpreadsheet, TrendingUp, X,
    ArrowRight, Zap, Clock, Target
} from 'lucide-react';

const automations = [
    {
        id: 1,
        title: 'Lead Generation Bot',
        category: 'Sales Automation',
        icon: Users,
        color: '#00d4ff',
        description: 'Automated prospect capture from multiple channels, enriched with AI-powered lead scoring.',
        impact: {
            metric: '500+',
            label: 'Leads Captured Monthly'
        },
        features: ['Multi-channel ingestion', 'AI lead scoring', 'Auto-segmentation', 'CRM sync'],
        workflow: `
      graph LR
        A[📨 Form/WhatsApp] --> B[🔄 n8n Webhook]
        B --> C[🤖 AI Enrichment]
        C --> D[📊 Lead Scoring]
        D --> E[💾 CRM Database]
        E --> F[📧 Follow-up Email]
    `
    },
    {
        id: 2,
        title: 'Automated CRM Sync',
        category: 'Data Integration',
        icon: RefreshCw,
        color: '#a855f7',
        description: 'Real-time bidirectional sync between CRM, ERP, and marketing platforms.',
        impact: {
            metric: '80%',
            label: 'Manual Entry Reduced'
        },
        features: ['Real-time sync', 'Conflict resolution', 'Data validation', 'Error handling'],
        workflow: `
      graph LR
        A[🏢 CRM] <--> B[🔄 n8n Sync Engine]
        B <--> C[📦 ERP System]
        B <--> D[📧 Email Marketing]
        B --> E[📊 Analytics]
    `
    },
    {
        id: 3,
        title: 'AI Sentiment Analysis',
        category: 'AI/ML Pipeline',
        icon: Brain,
        color: '#10b981',
        description: 'Process customer feedback to extract insights and trigger appropriate responses.',
        impact: {
            metric: '10K+',
            label: 'Interactions Analyzed'
        },
        features: ['NLP processing', 'Emotion detection', 'Priority routing', 'Trend analysis'],
        workflow: `
      graph LR
        A[💬 Customer Message] --> B[🤖 AI Analysis]
        B --> C{Sentiment?}
        C -->|Positive| D[⭐ Testimonial Flow]
        C -->|Negative| E[🚨 Escalation]
        C -->|Neutral| F[📋 Standard Response]
    `
    },
    {
        id: 4,
        title: 'WhatsApp Chatbot',
        category: 'Conversational AI',
        icon: MessageSquare,
        color: '#25d366',
        description: 'Intelligent chatbot handling customer queries with context-aware AI responses.',
        impact: {
            metric: '40+',
            label: 'Hours Saved Weekly'
        },
        features: ['Natural language', 'Context memory', 'Multi-turn dialog', 'Human handoff'],
        workflow: `
      graph LR
        A[📱 WhatsApp] --> B[🔄 n8n Webhook]
        B --> C[🤖 AI Agent]
        C --> D{Need Human?}
        D -->|No| E[💬 AI Response]
        D -->|Yes| F[👤 Agent Escalation]
    `
    },
    {
        id: 5,
        title: 'Data Warehouse ETL',
        category: 'Data Engineering',
        icon: Database,
        color: '#f59e0b',
        description: 'Automated data extraction, transformation, and loading from multiple sources.',
        impact: {
            metric: '99.9%',
            label: 'Data Accuracy'
        },
        features: ['Multi-source ingestion', 'Data validation', 'Error recovery', 'Scheduling'],
        workflow: `
      graph LR
        A[📊 Source Systems] --> B[🔄 Extract]
        B --> C[⚙️ Transform]
        C --> D[✅ Validate]
        D --> E[💾 Data Warehouse]
        E --> F[📈 Power BI]
    `
    },
    {
        id: 6,
        title: 'Report Automation',
        category: 'Business Intelligence',
        icon: FileSpreadsheet,
        color: '#ec4899',
        description: 'Scheduled report generation and distribution to stakeholders.',
        impact: {
            metric: '20+',
            label: 'Reports Automated'
        },
        features: ['Scheduled runs', 'Dynamic data', 'Multi-format export', 'Email delivery'],
        workflow: `
      graph LR
        A[⏰ Schedule] --> B[📊 Query Data]
        B --> C[📝 Generate Report]
        C --> D[📄 PDF/Excel]
        D --> E[📧 Email Delivery]
        E --> F[📁 Archive]
    `
    }
];

export default function AutomationGallery() {
    const [selectedAutomation, setSelectedAutomation] = useState(null);

    return (
        <section id="automations" className="automations-section section">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Automation Gallery</h2>
                    <p>n8n workflows that drive business efficiency and growth</p>
                </motion.div>

                <div className="automations-grid">
                    {automations.map((automation, index) => (
                        <motion.div
                            key={automation.id}
                            className="automation-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedAutomation(automation)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="card-header">
                                <div
                                    className="card-icon"
                                    style={{ '--card-color': automation.color }}
                                >
                                    <automation.icon size={28} />
                                </div>
                                <span className="card-category">{automation.category}</span>
                            </div>

                            <h3 className="card-title">{automation.title}</h3>
                            <p className="card-description">{automation.description}</p>

                            <div className="card-impact" style={{ '--card-color': automation.color }}>
                                <TrendingUp size={20} />
                                <div className="impact-content">
                                    <span className="impact-metric">{automation.impact.metric}</span>
                                    <span className="impact-label">{automation.impact.label}</span>
                                </div>
                            </div>

                            <div className="card-features">
                                {automation.features.slice(0, 3).map((feature, i) => (
                                    <span key={i} className="feature-tag">{feature}</span>
                                ))}
                            </div>

                            <button className="card-cta">
                                View Workflow <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for workflow details */}
            <AnimatePresence>
                {selectedAutomation && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedAutomation(null)}
                    >
                        <motion.div
                            className="modal-content glass-card"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="modal-close"
                                onClick={() => setSelectedAutomation(null)}
                            >
                                <X size={24} />
                            </button>

                            <div className="modal-header">
                                <div
                                    className="modal-icon"
                                    style={{ '--card-color': selectedAutomation.color }}
                                >
                                    <selectedAutomation.icon size={36} />
                                </div>
                                <div>
                                    <span className="modal-category">{selectedAutomation.category}</span>
                                    <h2>{selectedAutomation.title}</h2>
                                </div>
                            </div>

                            <p className="modal-description">{selectedAutomation.description}</p>

                            <div className="modal-stats">
                                <div className="stat-box">
                                    <Zap size={24} />
                                    <div>
                                        <span className="stat-value">{selectedAutomation.impact.metric}</span>
                                        <span className="stat-label">{selectedAutomation.impact.label}</span>
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <Clock size={24} />
                                    <div>
                                        <span className="stat-value">24/7</span>
                                        <span className="stat-label">Always Running</span>
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <Target size={24} />
                                    <div>
                                        <span className="stat-value">99%</span>
                                        <span className="stat-label">Success Rate</span>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-features">
                                <h4>Key Features</h4>
                                <div className="features-list">
                                    {selectedAutomation.features.map((feature, i) => (
                                        <span key={i} className="feature-item">
                                            <span className="feature-dot" style={{ background: selectedAutomation.color }}></span>
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-workflow">
                                <h4>Workflow Visualization</h4>
                                <div className="workflow-diagram">
                                    <pre>{selectedAutomation.workflow}</pre>
                                </div>
                                <p className="workflow-note">
                                    💡 This workflow runs on n8n and integrates with your existing systems
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .automations-section {
          position: relative;
        }

        .automations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .automation-card {
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .card-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--card-color) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .card-category {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.25rem 0.75rem;
          background: var(--color-bg-glass);
          border-radius: var(--radius-full);
        }

        .card-title {
          font-size: 1.25rem;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
        }

        .card-description {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .card-impact {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
          color: var(--card-color);
        }

        .impact-content {
          display: flex;
          flex-direction: column;
        }

        .impact-metric {
          font-size: 1.5rem;
          font-weight: 800;
        }

        .impact-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .card-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .feature-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: var(--color-bg-tertiary);
          border-radius: var(--radius-full);
          color: var(--color-text-secondary);
        }

        .card-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          color: var(--color-primary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .card-cta:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: var(--color-primary);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--color-text-primary);
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .modal-icon {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, var(--card-color) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .modal-category {
          font-size: 0.75rem;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .modal-header h2 {
          font-size: 1.75rem;
          margin-top: 0.25rem;
        }

        .modal-description {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .modal-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--color-bg-tertiary);
          border-radius: var(--radius-md);
          color: var(--color-primary);
        }

        .stat-box .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
          display: block;
        }

        .stat-box .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .modal-features h4,
        .modal-workflow h4 {
          font-size: 1rem;
          color: var(--color-text-primary);
          margin-bottom: 1rem;
        }

        .features-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .workflow-diagram {
          background: var(--color-bg-primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          overflow-x: auto;
          margin-bottom: 1rem;
        }

        .workflow-diagram pre {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          white-space: pre-wrap;
        }

        .workflow-note {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          text-align: center;
        }

        @media (max-width: 768px) {
          .automations-grid {
            grid-template-columns: 1fr;
          }

          .modal-stats {
            grid-template-columns: 1fr;
          }

          .modal-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
        </section>
    );
}
