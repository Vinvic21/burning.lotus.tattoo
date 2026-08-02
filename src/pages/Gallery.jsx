import { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { GALLERY } from "../data/content.js";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="route">
      <section className="section" style={{ paddingTop: 150 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Portfolio</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="title">Recent work</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="body-lg">A cross-section of pieces from our chairs — tap any piece for a closer look.</p>
          </Reveal>
          <div className="gallery-grid">
            {GALLERY.map((g, i) => (
              <Reveal
                as="div"
                delay={(i % 3) + 1}
                key={g.src}
                className="gallery-item"
                onClick={() => setActive(g)}
              >
                <img src={g.src} alt={g.name} loading="lazy" />
                <div className="gallery-caption">
                  <div className="tag">{g.tag}</div>
                  <div className="name">{g.name}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)}>
            ✕
          </button>
          <img src={active.src} alt={active.name} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
