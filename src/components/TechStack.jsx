import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Backend',
    skills: [
      { name: 'Python',  level: 9, desc: 'Data Analysis · ML · Automation' },
      { name: 'Django',  level: 8, desc: 'REST APIs · ORM · CRM Systems' },
      { name: 'FastAPI', level: 7, desc: 'ML serving · lightweight APIs' },
      { name: 'SQL',     level: 8, desc: 'Database Design · Optimization' },
    ],
  },
  {
    title: 'Data & ML',
    skills: [
      { name: 'scikit-learn', level: 7, desc: 'Predictive Models · Feature Eng' },
      { name: 'pandas',       level: 8, desc: 'Data Wrangling · Analysis' },
      { name: 'Power BI',     level: 7, desc: 'Dashboards · Visualization' },
    ],
  },
  {
    title: 'Frontend & Automation',
    skills: [
      { name: 'React', level: 7, desc: 'SPAs · Component Architecture' },
      { name: 'n8n',   level: 9, desc: 'Workflow Automation · Integrations' },
    ],
  },
  {
    title: 'Platforms',
    skills: [
      { name: 'Docker',       level: 6, desc: 'Containerization · Compose' },
      { name: 'WhatsApp API', level: 8, desc: 'Chatbots · Business Messaging' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-number">03.</p>
        <h2 className="section-heading">Skills &amp; Arsenal</h2>
      </motion.div>

      <div className="rpg-grid">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
          >
            <h3 className="rpg-category-title">{cat.title}</h3>
            {cat.skills.map((skill) => (
              <div key={skill.name}>
                <div className="rpg-skill-row">
                  <span className="rpg-skill-name">{skill.name}</span>
                  <div className="rpg-bar-track">
                    <motion.div
                      className="rpg-bar-fill"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{
                        width: `${(skill.level / 10) * 100}%`,
                        transformOrigin: 'left',
                      }}
                    />
                  </div>
                  <span className="rpg-level">Lv.{skill.level}</span>
                </div>
                <div className="rpg-skill-row" style={{ padding: 0 }}>
                  <span />
                  <p className="rpg-skill-desc">{skill.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
