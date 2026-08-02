import Reveal from "../components/Reveal.jsx";
import InkDivider from "../components/InkDivider.jsx";
import { STUDIO_PHOTOS } from "../data/content.js";

export default function Studio() {
  return (
    <div className="route">
      <section className="section" style={{ paddingTop: 150 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">The Studio</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="title">
              A clean, calm space
              <br />
              for permanent decisions.
            </h2>
          </Reveal>
          <div className="studio-grid">
            <Reveal delay={2}>
              <p className="studio-quote">
                "There's never a point where you casually tattoo and overlook what you're doing — every line
                matters. You have to love it to do it, and thankfully it's an art that keeps giving."
              </p>
              <div className="stat-strip">
                <div className="stat">
                  <div className="num">4.8</div>
                  <div className="label">Average rating</div>
                </div>
                <div className="stat">
                  <div className="num">317</div>
                  <div className="label">Google reviews</div>
                </div>
                <div className="stat">
                  <div className="num">LGBTQ+</div>
                  <div className="label">Friendly studio</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={3} className="studio-photos">
              {STUDIO_PHOTOS.map((src) => (
                <img key={src} src={src} alt="Inside Burning Lotus Tattoo" loading="lazy" />
              ))}
            </Reveal>
          </div>
        </div>
        <InkDivider />
      </section>
    </div>
  );
}
