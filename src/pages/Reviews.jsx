import Reveal from "../components/Reveal.jsx";
import Stars from "../components/Stars.jsx";
import { REVIEWS } from "../data/content.js";

export default function Reviews() {
  return (
    <div className="route">
      <section className="section" style={{ paddingTop: 150 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Reviews</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rating-summary">
              <div className="rating-big">4.8</div>
              <div>
                <Stars n={5} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--parchment-dim)", marginTop: 6 }}>
                  Based on 317 Google reviews
                </div>
              </div>
            </div>
          </Reveal>
          <div className="review-grid">
            {REVIEWS.map((r, i) => (
              <Reveal as="div" delay={(i % 3) + 1} key={r.name} className="review-card">
                <Stars n={r.rating} />
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="review-meta">
                  <span className="name">{r.name}</span>
                  <span>{r.meta}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
