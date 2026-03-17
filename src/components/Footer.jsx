import { Workflow, Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <Workflow size={24} />
                        <span>Nelson<span className="accent">.dev</span></span>
                    </div>
                    <p>Building automation solutions that drive business growth.</p>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Nelson Mwaura. Built with <Heart size={14} className="heart" /> and n8n.
                    </p>
                    <p className="tech-stack">
                        React • Django • n8n • AI
                    </p>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background: var(--color-bg-secondary);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3rem 0 2rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-brand {
          text-align: center;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
        }

        .footer-logo svg {
          color: var(--color-primary);
        }

        .footer-logo .accent {
          color: var(--color-primary);
        }

        .footer-brand p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin: 0 auto;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }

        .heart {
          color: #ef4444;
          animation: pulse 1.5s infinite;
        }

        .tech-stack {
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `}</style>
        </footer>
    );
}
