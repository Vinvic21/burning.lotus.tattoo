import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import InkDivider from "../components/InkDivider.jsx";
import { GALLERY, waLink } from "../data/content.js";

export default function Home() {
  return (
    <div className="route">
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/tattoo-archangel.jpg')" }} />
        <div className="hero-scrim" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="dot" /> Denham Springs, Louisiana — Est. custom tattoo studio
          </div>
          <h1>
            Every line
            <br />
            matters<span>.</span>
          </h1>
          <p className="lede">
            Custom tattoo artistry built on trust, patience, and a real conversation about your story — not a
            walk-in flash sheet.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={waLink()} target="_blank" rel="noopener noreferrer">
              Book on WhatsApp
            </a>
            <Link className="btn btn-ghost" to="/gallery">
              View the work
            </Link>
            <div className="hero-rating">
              <span className="stars">★★★★★</span>
              <strong>4.8</strong> from 317 reviews
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">From the owner</div>
          </Reveal>
          <Reveal delay={1}>
            <p className="body-lg">
              Tattooing holds a personal connection that most art forms don't. With painting, it's self-fulfilling —
              but with tattoos, we explore an idea alongside you and hear the story behind it, bringing your words to
              life in a form that lasts forever. Years in, the nervous feeling before a new piece never goes away,
              and every line still matters. Call or message us, and let's start the journey together.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="badge-row">
              <span className="badge">LGBTQ+ Friendly</span>
              <span className="badge">Walk-ins & Appointments</span>
              <span className="badge">Custom Design Consults</span>
              <span className="badge">4.8 ★ · 317 Google Reviews</span>
            </div>
          </Reveal>
        </div>
        <InkDivider />
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="eyebrow">A glimpse of the work</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="title">
              Black &amp; grey, color,
              <br />
              ornamental, illustrative.
            </h2>
          </Reveal>
          <div className="gallery-grid">
            {GALLERY.slice(0, 4).map((g, i) => (
              <Reveal as={Link} to="/gallery" delay={(i % 3) + 1} key={g.src} className="gallery-item">
                <img src={g.src} alt={g.name} loading="lazy" />
                <div className="gallery-caption">
                  <div className="tag">{g.tag}</div>
                  <div className="name">{g.name}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2} style={{ marginTop: 40 }}>
            <Link className="btn btn-ghost" to="/gallery">
              See the full gallery
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
