import { Entry } from '../components/Entry.jsx';
import { Seo } from '../components/Seo.jsx';

const DESCRIPTION =
  'Systems Nelson Mwaura has designed and shipped: NSE analytics, document extraction, CRM, threat intelligence automation, and ML pipelines.';

export function Work() {
  return (
    <>
      <Seo
        title="Work · Nelson Mwaura"
        description={DESCRIPTION}
        path="/work"
        image="og-work.png"
        imageAlt="Work. Systems I designed, built, and in most cases still operate."
      />

      <section className="lede">
        <h1>Work</h1>
        <p>
          Systems I designed, built, and in most cases still operate. The three with case studies
          are the ones where I owned the whole thing, from schema to deployment.
        </p>
        <p>
          Three are marked private. Two of those handle client payment records and patient health
          records, so the code and the screenshots stay where they are. I would rather show you a
          gap than publish someone else’s data.
        </p>
      </section>

      <section className="section">
        <div className="index">
          <Entry
            headingLevel="h2"
            title="Mara"
            href="/work/mara"
            note="A live analytics platform for the Nairobi Securities Exchange: walk-forward random-forest price forecasting, Markowitz portfolio optimisation, strategy backtesting, and a Telegram bot for people who would rather not open a dashboard. Built and operated solo."
            stack={['Django', 'React', 'scikit-learn', 'PostgreSQL', 'Docker']}
            thumb={{
              href: '/work/mara',
              src: '/media/mara-analytics.webp',
              alt: "Mara's Analytics Lab: a ticker selector, a three-month price chart for SCOM, and strategy backtesting controls.",
            }}
            links={[
              { label: 'Case study', href: '/work/mara' },
              { label: 'Live', href: 'https://heymara.co.ke', external: true },
            ]}
          />

          <Entry
            headingLevel="h2"
            title="Document Intelligence API"
            href="/work/document-intelligence"
            note="Turns invoice PDFs into structured JSON with GPT-4o Vision. Async Celery workers, SHA-256 deduplication so the same document never costs twice, confidence scoring on extracted fields, exponential backoff on model failures, and polling endpoints for front ends to consume."
            stack={['FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'GPT-4o Vision', 'Docker']}
            thumb={{
              href: '/work/document-intelligence',
              src: '/media/docintel-swagger.webp',
              alt: 'The Document Intelligence API reference: upload, status, result, list, and delete endpoints.',
            }}
            links={[
              { label: 'Case study', href: '/work/document-intelligence' },
              {
                label: 'Code',
                href: 'https://github.com/Nmwaura132/doc-intel-api',
                external: true,
              },
            ]}
          />

          <Entry
            headingLevel="h2"
            title="CRM System at Optiven"
            href="/work/optiven-crm"
            note="The CRM the sales team runs on. I designed it, built it, integrated it with the existing ERP so data flows both ways, and ran the training that got people to actually use it."
            stack={['Django', 'Python', 'MySQL', 'n8n', 'REST', 'React']}
            links={[{ label: 'Case study', href: '/work/optiven-crm' }]}
          />

          <Entry
            headingLevel="h2"
            title="VulnWatch"
            note="Threat intelligence monitor that ingests CISA KEV, NVD, BleepingComputer, and The Hacker News, scores each item with a GPT-4o triage step, and posts only what matters to Slack."
            stack={['n8n', 'Python', 'OpenAI', 'Slack API', 'CISA KEV', 'NVD']}
            state="Private"
          />

          <Entry
            headingLevel="h2"
            title="ClientScore"
            note="Predicts client payment likelihood on a 1 to 10 scale from payment history, transaction records, and contract signals. Experiments tracked in MLflow."
            stack={['Python', 'scikit-learn', 'MLflow', 'pandas', 'MySQL', 'FastAPI']}
            state="Private"
          />

          <Entry
            headingLevel="h2"
            title="Clinical Data Warehouse"
            note="Warehouse for electronic health records pulled from existing EHR systems, with an ETL pipeline that validates on the way in and notifies on failure rather than silently dropping rows."
            stack={['Python', 'SQL', 'ETL', 'Power BI']}
            state="Private"
          />

          <Entry
            headingLevel="h2"
            title="FlowTodo"
            note="Offline-first Kanban across web and mobile, sharing one Zustand store synced through Supabase Realtime, with natural-language date parsing on task entry."
            stack={['React', 'Expo', 'Supabase', 'FastAPI']}
            thumb={{
              href: 'https://github.com/Nmwaura132/flow-todo',
              external: true,
              src: '/media/flowtodo-api.webp',
              alt: 'The FlowTodo API reference: offline-first todo and Kanban endpoints with real-time sync.',
            }}
            links={[
              { label: 'Code', href: 'https://github.com/Nmwaura132/flow-todo', external: true },
            ]}
          />

          <Entry
            headingLevel="h2"
            title="M-Pesa Growth EDA"
            note="Sixteen years of Kenyan mobile money growth, analysed from a monthly dataset I reconstructed and calibrated against published CBK and KNBS annual totals, since the monthly series is not public. Growth curves, seasonal decomposition, and correlation analysis across the COVID period."
            stack={['pandas', 'statsmodels', 'seaborn', 'Jupyter']}
            links={[
              {
                label: 'Code',
                href: 'https://github.com/Nmwaura132/mpesa-growth-eda',
                external: true,
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
