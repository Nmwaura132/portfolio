import { Link } from 'react-router-dom';

import { Seo } from '../../components/Seo.jsx';

const DESCRIPTION =
  "Designing, building, and driving adoption of the CRM that Optiven's sales team runs on, integrated with the existing ERP.";

export function OptivenCrm() {
  return (
    <>
      <Seo
        title="CRM System at Optiven · Nelson Mwaura"
        description={DESCRIPTION}
        path="/work/optiven-crm"
        image="og-optiven-crm.png"
        imageAlt="CRM System at Optiven. The CRM the sales team runs on."
        type="article"
      />

      <section className="lede">
        <Link className="back" to="/work">
          ← Work
        </Link>
        <div className="doc">
          <h1>CRM System at Optiven</h1>

          <dl className="doc-meta">
            <dt>Role</dt>
            <dd>Lead: design, build, ERP integration, rollout</dd>
            <dt>Stack</dt>
            <dd>Django, Python, MySQL, n8n, REST, React</dd>
            <dt>Status</dt>
            <dd>In daily use by the sales team</dd>
            <dt>Code</dt>
            <dd>Private, internal system</dd>
          </dl>

          <h2>What it is</h2>
          <p>
            The CRM that Optiven’s sales team uses to track deals and manage client relationships. I
            led the design and development, wired it into the ERP the business already ran on, and
            then did the part most engineers hand off: getting people to use it.
          </p>

          <h2>The hard part was not the software</h2>
          <p>
            A CRM is not technically difficult. What kills CRM projects is that sales teams already
            have a system that works for them, usually a spreadsheet and their own memory, and a new
            tool has to be better than that on day one or it quietly gets abandoned.
          </p>
          <p>
            So I spent as much time on workflows, dashboards, and reporting as on the data model,
            and I ran the training sessions for the sales and marketing teams myself. Sitting with
            the people who would use it every day surfaced problems no amount of internal review
            would have caught.
          </p>

          <h2>Integration</h2>
          <p>
            The CRM does not live alone. It exchanges data with the existing ERP so that a change in
            one is not a stale record in the other, with n8n handling the scheduled syncs and the
            alerting around them. I also contributed to the ERP itself in Django, which meant I
            could design the integration from both ends rather than negotiating with a black box.
          </p>

          <h2>What I took from it</h2>
          <p>
            Adoption is an engineering problem. If a workflow takes eleven clicks, people route
            around it and your data is wrong, which makes every dashboard built on top of it wrong
            too. I now treat the question of whether someone will actually use a thing as part of
            the design work, not as someone else’s job after launch.
          </p>
        </div>
      </section>
    </>
  );
}
