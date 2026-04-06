const audience = [
  "Builders shaping products, internal tools, and applied automation.",
  "Business operators looking for practical systems that can reduce drag.",
  "Business owners evaluating where autonomous agents can create leverage.",
  "Technicians who care how agent harnesses behave in real environments."
];

const topics = [
  "Agentic workflows grounded in real business and technical constraints.",
  "Autonomous systems, agent harnesses, and the tooling around them.",
  "What works, what breaks, and where current approaches still need rigor."
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Northwest Arkansas</p>
        <h1>NWA OpenClaw Meetup</h1>
        <p className="lede">
          NWA means <strong>Northwest Arkansas</strong>. This meetup is for
          people who are fascinated by agentic autonomous systems and the
          harnesses used to run them well.
        </p>
        <div className="hero-meta">
          <span>100+ people have already signed up.</span>
          <span>Logistics and date details are still being finalized.</span>
        </div>
      </section>

      <section className="content-grid" aria-label="Meetup details">
        <article className="panel">
          <p className="section-label">Who It Is For</p>
          <h2>People building, operating, and pressure-testing real systems.</h2>
          <ul>
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <p className="section-label">What We Explore</p>
          <h2>Practical conversations about autonomous agents, not vague hype.</h2>
          <ul>
            {topics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="note-panel">
        <p className="section-label">Current Status</p>
        <p>
          Interest is already strong, with more than 100 sign-ups so far. The
          meetup page will be updated once venue, schedule, and RSVP details are
          confirmed.
        </p>
      </section>
    </main>
  );
}
