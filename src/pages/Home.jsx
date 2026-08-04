import { Link } from 'react-router-dom';

import { CyclingAvatar } from '../components/CyclingAvatar.jsx';
import { Entry } from '../components/Entry.jsx';
import { Seo } from '../components/Seo.jsx';

const DESCRIPTION =
  'Backend developer and data scientist in Nairobi. Django, ML pipelines, and workflow automation. Currently building Mara, a live NSE analytics platform.';

export function Home() {
  return (
    <>
      <Seo
        title="Nelson Mwaura · Backend Developer & Data Scientist"
        description={DESCRIPTION}
        path="/"
        image="og-default.png"
        imageAlt="Nelson Mwaura. I build systems that run in production."
      />

      <section className="lede">
        <CyclingAvatar />
        <p className="status">
          <b>Open</b> to remote senior engineering roles
        </p>
        <h1>I build systems that run in production.</h1>
        <p>
          Backend developer and data scientist in Nairobi. <strong>Django</strong> services,{' '}
          <strong>ML pipelines</strong>, and <strong>n8n</strong> automation, usually inside the
          same project.
        </p>
        <p>
          Right now I run data science and backend at <strong>Optiven</strong>, and I build and
          operate <strong>Mara</strong>, a live analytics platform for the Nairobi Securities
          Exchange.
        </p>
        <div className="actions">
          <Link className="btn" to="/work">
            See the work
          </Link>
          <a className="btn btn-ghost" href="mailto:Nmwaura132@gmail.com">
            Nmwaura132@gmail.com
          </a>
        </div>
      </section>

      <section className="section section-wide">
        <div className="section-head">
          <h2>Selected work</h2>
          <Link className="more" to="/work">
            All work
          </Link>
        </div>

        <div className="index">
          <Entry
            title="Mara"
            href="/work/mara"
            note="A live analytics platform for the Nairobi Securities Exchange: price forecasting, portfolio tracking, and strategy backtesting. Django, React, scikit-learn, deployed on Docker."
            stack={['Django', 'React', 'scikit-learn', 'PostgreSQL', 'Docker']}
            thumb={{
              href: '/work/mara',
              src: '/media/mara-brief.webp',
              alt: 'The Mara daily brief: a live NSE market table, index level, and gainers panel.',
            }}
            links={[
              { label: 'Case study', href: '/work/mara' },
              { label: 'Live', href: 'https://heymara.co.ke', external: true },
            ]}
          />

          <Entry
            title="Document Intelligence API"
            href="/work/document-intelligence"
            note="Extracts structured JSON from PDFs using GPT-4o Vision. Celery workers keep the request thread free, SHA-256 hashing kills duplicate spend, and failed model calls retry with exponential backoff."
            stack={['FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'GPT-4o']}
            links={[{ label: 'Case study', href: '/work/document-intelligence' }]}
          />

          <Entry
            title="CRM System at Optiven"
            href="/work/optiven-crm"
            note="Designed and built the CRM that sales runs on, integrated it with the existing ERP, and trained the sales and marketing teams that use it daily."
            stack={['Django', 'Python', 'MySQL', 'n8n', 'REST']}
            links={[{ label: 'Case study', href: '/work/optiven-crm' }]}
          />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>What I actually do</h2>
        </div>
        <div className="doc">
          <h3>Backend</h3>
          <p>
            Django and FastAPI services, REST API design, schema design in PostgreSQL and MySQL. I
            own systems from the schema up rather than picking up tickets against someone else’s
            design.
          </p>
          <h3>Data science and ML</h3>
          <p>
            Forecasting and classification with scikit-learn, experiment tracking in MLflow, feature
            work in pandas. The models I ship are the ones that stay in production, which usually
            means simpler than the notebook version.
          </p>
          <h3>Automation</h3>
          <p>
            n8n workflows wired into real systems: ERP syncs, alerting pipelines, scheduled ETL.
            This is the part most teams skip, and it is where a lot of my leverage comes from.
          </p>
          <h3>Analytics</h3>
          <p>
            SQL, ETL pipelines, and Power BI dashboards that people outside engineering actually
            open.
          </p>
        </div>
      </section>

      <section className="section section-close">
        <div className="section-head">
          <h2>Get in touch</h2>
        </div>
        <div className="doc">
          <p>
            I am looking for remote senior engineering work, ideally somewhere the job includes
            backend, data, and the automation between them. If that is the role you are filling,
            email is the fastest way to reach me.
          </p>
          <div className="contact-list">
            <a className="contact-row" href="mailto:Nmwaura132@gmail.com">
              <span className="label">Email</span>
              <span className="value">Nmwaura132@gmail.com</span>
            </a>
            <a
              className="contact-row"
              href="https://www.linkedin.com/in/nelson-peter"
              target="_blank"
              rel="noopener"
            >
              <span className="label">LinkedIn</span>
              <span className="value">nelson-peter</span>
            </a>
            <a
              className="contact-row"
              href="https://github.com/Nmwaura132"
              target="_blank"
              rel="noopener"
            >
              <span className="label">GitHub</span>
              <span className="value">Nmwaura132</span>
            </a>
            <a className="contact-row" href="/media/nelson-mwaura-cv.pdf" download>
              <span className="label">CV</span>
              <span className="value">nelson-mwaura-cv.pdf</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
