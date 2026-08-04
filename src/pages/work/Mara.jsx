import { Link } from 'react-router-dom';

import { Seo } from '../../components/Seo.jsx';

const DESCRIPTION =
  'Mara is a live analytics platform for the Nairobi Securities Exchange: price forecasting, portfolio tracking, and backtesting. Built and operated solo.';

export function Mara() {
  return (
    <>
      <Seo
        title="Mara · Nelson Mwaura"
        description={DESCRIPTION}
        path="/work/mara"
        image="og-mara.png"
        imageAlt="Mara. A live analytics platform for the Nairobi Securities Exchange."
        type="article"
      />

      <section className="lede">
        <Link className="back" to="/work">
          ← Work
        </Link>
        <div className="doc">
          <h1>Mara</h1>

          <dl className="doc-meta">
            <dt>Role</dt>
            <dd>Sole engineer: design, build, deploy, operate</dd>
            <dt>Stack</dt>
            <dd>Django, React, scikit-learn, PostgreSQL, Docker</dd>
            <dt>Status</dt>
            <dd>Live and in use</dd>
            <dt>Link</dt>
            <dd>
              <a href="https://heymara.co.ke" target="_blank" rel="noopener">
                heymara.co.ke
              </a>
            </dd>
          </dl>

          <figure>
            <a className="thumb" href="https://heymara.co.ke" target="_blank" rel="noopener">
              {/* Above the fold, so it decodes async but is not lazy. */}
              <img
                src="/media/mara-brief.webp"
                width={1600}
                height={1000}
                decoding="async"
                alt="The Mara home page: a plain-English pitch, a live NSE ticker strip, market breadth figures, and the NASI index at 239.11."
              />
            </a>
            <figcaption>The daily brief. Live market data, no jargon.</figcaption>
          </figure>

          <h2>What it is</h2>
          <p>
            Mara is an analytics platform for the Nairobi Securities Exchange. It does real-time
            stock analysis, machine learning price forecasting, portfolio management, and strategy
            backtesting, and it has a Telegram bot so people can get answers without opening a
            dashboard.
          </p>
          <p>
            It is a real product with real users, not a demo. I designed it, built the backend and
            the frontend, trained the models, deployed it, and I still run it.
          </p>

          <h2>Why I built it</h2>
          <p>
            Kenyan retail investors have very little tooling. The data exists but it is scattered,
            mostly unstructured, and priced for institutions. I wanted to find out whether one
            person could close that gap end to end, and the honest answer is that the modelling was
            the easy part. Getting reliable NSE data, keeping it fresh, and presenting it in a way
            that does not mislead someone about to spend their own money turned out to be the actual
            work.
          </p>

          <h2>How it works</h2>
          <ul>
            <li>
              A Django backend owns ingestion, the API, and the scheduled jobs that keep prices
              current.
            </li>
            <li>
              Forecasting runs on scikit-learn. I keep the models deliberately simple, because a
              model I can explain to a user is worth more here than one that scores marginally
              better offline.
            </li>
            <li>A React frontend covers the dashboard, portfolio views, and backtest results.</li>
            <li>
              A Telegram bot handles the lightweight questions, which is how most people actually
              use it.
            </li>
            <li>The whole stack is containerised and deployed with Docker.</li>
          </ul>

          <figure>
            <a
              className="thumb"
              href="https://heymara.co.ke/analytics"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/media/mara-analytics.webp"
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                alt="The Analytics Lab: every listed ticker, a three-month candle chart, news sentiment, and an AI analysis action."
              />
            </a>
            <figcaption>The Analytics Lab: charts, model ranges, and strategy backtesting.</figcaption>
          </figure>

          <figure>
            <a className="thumb" href="https://heymara.co.ke/bonds" target="_blank" rel="noopener">
              <img
                src="/media/mara-ladder.webp"
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                alt="The fixed income view comparing money market funds, treasury bills, and bonds."
              />
            </a>
            <figcaption>Fixed income: money market funds, T-bills, and bonds side by side.</figcaption>
          </figure>

          <h2>The decision I am most sure about</h2>
          <p>
            Every number the platform shows is labelled with what it is and what it is not.
            Backtests report both gross and net returns, forecasts are framed as forecasts, and the
            disclaimer that this is not financial advice is in the product rather than buried in a
            footer. It would be easy to make the numbers look better than they are. In a product
            that touches people’s savings, that is the one thing I am not willing to do.
          </p>

          <h2>What it taught me</h2>
          <p>
            Operating something is a different skill from building it. Scrapers break, upstream
            sources change their markup without warning, and a job that silently fails is worse than
            one that loudly crashes. Most of what I have learned from Mara is about monitoring,
            retries, and designing for the day the data source stops cooperating.
          </p>

          <div className="actions">
            <a className="btn" href="https://heymara.co.ke" target="_blank" rel="noopener">
              Open Mara
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
