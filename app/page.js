const audience = [
  "Builders shaping products, internal tools, and applied automation.",
  "Operators who want practical systems that remove drag instead of adding hype.",
  "Founders and owners evaluating where autonomous agents can create leverage.",
  "Technical people who care how agent harnesses behave in real environments."
];

const topics = [
  "OpenClaw, agent harnesses, and applied autonomous workflows.",
  "What works, what breaks, and how to make these systems more usable.",
  "Practical demos, honest discussion, and a stronger local builder network."
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Northwest Arkansas</p>
          <h1>NWA OpenClaw Meetup</h1>
          <p className="lede">
            A clean, local meetup page for people in <strong>Northwest Arkansas</strong>{" "}
            who want to explore OpenClaw, agent harnesses, and practical autonomous
            systems with other serious builders.
          </p>
        </div>

        <div className="hero-actions">
          <a className="primary-cta" href="#signup">
            Get notified when signup opens
          </a>
          <p className="cta-note">
            Venue, date, and RSVP details are being finalized now.
          </p>
        </div>

        <div className="hero-meta">
          <span>One-page landing site for meetup discovery.</span>
          <span>Designed to be easy to demo live and easy to update later.</span>
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
          <p className="section-label">Why Show Up</p>
          <h2>Practical discussion, local connection, and a solid starting point.</h2>
          <ul>
            {topics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="note-panel" id="signup">
        <p className="section-label">Signup</p>
        <h2>RSVP link coming next.</h2>
        <p>
          This section is intentionally ready for the real signup form or RSVP link.
          When that is available, replace this block with the destination you want
          people to use and keep the rest of the page as-is.
        </p>
      </section>
    </main>
  );
}
