import { Link } from 'react-router-dom';

import { Seo } from '../../components/Seo.jsx';

const DESCRIPTION =
  'A FastAPI and Celery service that extracts structured JSON from PDFs with GPT-4o Vision, with deduplication and retry handling built in.';

export function DocumentIntelligence() {
  return (
    <>
      <Seo
        title="Document Intelligence API · Nelson Mwaura"
        description={DESCRIPTION}
        path="/work/document-intelligence"
        image="og-document-intelligence.png"
        imageAlt="Document Intelligence API. Structured JSON from PDFs."
        type="article"
      />

      <section className="lede">
        <Link className="back" to="/work">
          ← Work
        </Link>
        <div className="doc">
          <h1>Document Intelligence API</h1>

          <dl className="doc-meta">
            <dt>Role</dt>
            <dd>Sole engineer</dd>
            <dt>Stack</dt>
            <dd>FastAPI, Celery, Redis, PostgreSQL, GPT-4o Vision, React, Docker</dd>
            <dt>Status</dt>
            <dd>Runs locally via Docker Compose</dd>
          </dl>

          <figure>
            <a className="thumb" href="#the-api">
              <img
                src="/media/docintel-swagger.webp"
                width={1600}
                height={1000}
                decoding="async"
                alt="The generated OpenAPI reference showing the five document endpoints and a health check."
              />
            </a>
            <figcaption>The generated OpenAPI reference. Five endpoints, plus a health check.</figcaption>
          </figure>

          <h2>What it is</h2>
          <p>
            A backend service that takes a PDF and returns structured JSON. It renders each page
            with <code>pdf2image</code>, sends it to GPT-4o Vision, and stores the extracted payload
            against a job record so a front end can poll for the result.
          </p>

          <h2>The problem it solves</h2>
          <p>
            Calling a vision model on a document is slow and occasionally fails. If you do it inside
            the request, the HTTP thread blocks for the length of an external API call you do not
            control, and a transient error loses the user’s upload. Most naive versions of this
            service are one endpoint that hangs and then 500s.
          </p>

          <h2>How I handled it</h2>
          <ul>
            <li>
              <strong>Celery and Redis.</strong> Upload returns <code>202</code> and a job ID
              immediately. The model call happens on a worker, so nothing blocks.
            </li>
            <li>
              <strong>SHA-256 deduplication.</strong> Every file is hashed on arrival. Re-uploading
              a document that has already been processed returns the stored result instead of paying
              OpenAI a second time. On a document pipeline this is the difference between a viable
              cost model and a bad one.
            </li>
            <li>
              <strong>Exponential backoff.</strong> Model calls retry on transient failures rather
              than surfacing a stack trace to the caller.
            </li>
            <li>
              <strong>Explicit job states.</strong> <code>queued</code>, <code>processing</code>,{' '}
              <code>done</code>, <code>failed</code>. The front end polls every two seconds until it
              reaches a terminal state, so a failure is a state the UI can render rather than a hang.
            </li>
          </ul>

          <h2 id="the-api">The API</h2>
          <ul>
            <li>
              <code>POST /documents/upload</code>: start an extraction, returns a job ID
            </li>
            <li>
              <code>GET /documents/{'{job_id}'}/status</code>: current state
            </li>
            <li>
              <code>GET /documents/{'{job_id}'}/result</code>: the extracted JSON
            </li>
            <li>
              <code>GET /documents/</code>: paginated history
            </li>
            <li>
              <code>DELETE /documents/{'{job_id}'}</code>: remove a job
            </li>
          </ul>

          <figure>
            <span className="thumb">
              <img
                src="/media/docintel-dashboard.webp"
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                alt="The upload dashboard: a drop zone for invoice PDFs and a recent-extractions table."
              />
            </span>
            <figcaption>
              The front end that consumes it, polling every two seconds until a job reaches a
              terminal state.
            </figcaption>
          </figure>

          <h2>What I would change</h2>
          <p>
            The deduplication key is the file hash alone, which means the same document extracted
            against a different schema would wrongly hit the cache. If this went to production the
            key would need to include the extraction schema version. It has not bitten me yet, which
            is exactly why it is worth writing down.
          </p>
        </div>
      </section>
    </>
  );
}
