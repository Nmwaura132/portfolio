import { Seo } from '../components/Seo.jsx';

const DESCRIPTION =
  'Nelson Mwaura is a backend developer and data scientist in Nairobi, currently at Optiven and building Mara. Computer science background with a security major.';

const TOOLSET = [
  {
    group: 'Backend',
    tools: [
      ['Python', 'for data work, ML, and anything that needs automating.'],
      ['Django', 'for REST APIs, ORM modelling, and the CRM at Optiven.'],
      ['FastAPI', 'when the job is serving a model or a light async API.'],
      ['PostgreSQL and MySQL', 'for schema design, not just querying.'],
      ['Celery and Redis', 'to keep slow external calls off the request thread.'],
    ],
  },
  {
    group: 'Data and ML',
    tools: [
      ['scikit-learn', 'for forecasting and classification that has to stay explainable.'],
      ['pandas', 'for wrangling and feature preparation.'],
      ['MLflow', 'so experiments are comparable months later.'],
      ['Power BI', 'for dashboards people outside engineering actually open.'],
    ],
  },
  {
    group: 'Automation and infrastructure',
    tools: [
      ['n8n', 'for ERP syncs, alerting pipelines, and scheduled ETL.'],
      ['Docker', 'for everything I deploy, Mara included.'],
      ['Linux and shell', 'because that is where the things I run live.'],
      ['Git', 'with a bias toward reproducible, documented workflows.'],
    ],
  },
  {
    group: 'Frontend',
    tools: [
      ['React', 'for the Mara dashboard and client work.'],
      ['HTML and CSS', 'written by hand when a framework would be overhead.'],
    ],
  },
];

const CERTIFICATIONS = [
  'Business Data Analysis and Machine Learning · DMK IT Solutions',
  'Artificial Intelligence Analyst · IBM',
  'Practical Network Penetration Testing · TCM Security',
  'Hacking (and Defending) Active Directory · TCM Security',
  'Advanced Google Analytics · Google',
  'Android Development · Udacity',
];

export function About() {
  return (
    <>
      <Seo
        title="About · Nelson Mwaura"
        description={DESCRIPTION}
        path="/about"
        image="og-about.png"
        imageAlt="About Nelson Mwaura, backend developer and data scientist in Nairobi."
        type="profile"
      />

      <section className="lede">
        <picture>
          {/* The animated still is served only where motion is welcome, and
              <picture> means just one of the two files is ever downloaded. */}
          <source
            media="(prefers-reduced-motion: no-preference)"
            srcSet="/media/avatar-wave.webp"
            type="image/webp"
          />
          <img
            className="avatar avatar-portrait"
            src="/media/avatar-laptop.webp"
            width={512}
            height={512}
            decoding="async"
            alt="Nelson Mwaura working at a laptop"
          />
        </picture>
        <h1>About</h1>
      </section>

      <section className="section">
        <div className="doc">
          <p>
            I am a backend developer and data scientist in Nairobi. I started out on freelance data
            and software projects in 2022, and since 2024 I have been at Optiven, where I own the
            pipelines that feed the company’s analytics and the CRM its sales team runs on.
          </p>
          <p>
            The through line is that I like owning whole systems. Most of my work has been the only
            version of itself at the company: the CRM at Optiven was not a rewrite of an existing
            one, and Mara is a product I designed, built, deployed, and still operate on my own.
            That shapes how I work. I care more about whether something survives contact with real
            users than whether the architecture is impressive on a whiteboard.
          </p>
          <p>
            I studied computer science at St Paul’s University and majored in system security, which
            is also why I still work through Hack The Box challenges for fun. Over 100 of them so
            far. It makes me a more paranoid backend developer than I would otherwise be, and I
            think that is a good trait in someone who ships things.
          </p>
          <p>I speak English, Swahili, and Russian.</p>

          <h2>Where I have worked</h2>
        </div>

        <div>
          <div className="record">
            <p className="record-when">2024 to present</p>
            <div className="record-what">
              <p className="record-role">Data Scientist &amp; Backend Developer</p>
              <p className="record-where">Optiven, Nairobi</p>
              <p className="record-note">
                Predictive models for customer engagement and payment behaviour. Designed and built
                the CRM the sales team runs on, integrated it with the existing ERP, and contributed
                to the internal ERP system in Django. Ran the training that drove adoption.
              </p>
            </div>
          </div>

          <div className="record">
            <p className="record-when">2022 to 2024</p>
            <div className="record-what">
              <p className="record-role">Freelance Developer</p>
              <p className="record-where">Data and software projects, remote</p>
              <p className="record-note">
                Data analysis and application work for clients end to end: cleaning,
                transformation, and delivery, plus integrations and data flows between systems.
              </p>
            </div>
          </div>
        </div>

        <div className="doc">
          <h2>Education</h2>
        </div>

        <div>
          <div className="record">
            <p className="record-when">Degree</p>
            <div className="record-what">
              <p className="record-role">BSc Computer Science, major in system security</p>
              <p className="record-where">St Paul’s University</p>
            </div>
          </div>
          <div className="record">
            <p className="record-when">Diploma</p>
            <div className="record-what">
              <p className="record-role">Computer Science</p>
              <p className="record-where">St Paul’s University</p>
            </div>
          </div>
          <div className="record">
            <p className="record-when">Certificate</p>
            <div className="record-what">
              <p className="record-role">Data Analytics and Machine Learning</p>
              <p className="record-where">Data Networks Learning LLC</p>
            </div>
          </div>
        </div>

        <div className="doc">
          <h2>What I use</h2>
          <p>Tools I reach for, and what I actually use each one for.</p>
        </div>

        <div className="toolset">
          {TOOLSET.map(({ group, tools }) => (
            <div className="tool-group" key={group}>
              <h3>{group}</h3>
              <ul>
                {tools.map(([name, use]) => (
                  <li className="tool" key={name}>
                    <b>{name}</b> {use}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="doc">
          <h2>Certifications</h2>
          <ul>
            {CERTIFICATIONS.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>

          <h2>Working together</h2>
          <img
            className="avatar avatar-inline"
            src="/media/avatar-smirk.webp"
            width={512}
            height={512}
            loading="lazy"
            decoding="async"
            alt=""
          />
          <p>
            I am open to remote senior engineering roles, particularly at companies building AI or
            automation heavy products, data platforms, or anything where backend and data science
            sit close together.
          </p>
          <div className="actions">
            <a className="btn" href="mailto:Nmwaura132@gmail.com">
              Email me
            </a>
            <a className="btn btn-ghost" href="/media/nelson-mwaura-cv.pdf" download>
              Download CV (PDF)
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/nelson-peter"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
