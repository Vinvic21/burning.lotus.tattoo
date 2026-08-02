import Reveal from "../components/Reveal.jsx";
import SocialIcon from "../components/SocialIcon.jsx";
import { SOCIALS, waLink } from "../data/content.js";

const MAP_SRC = "https://www.google.com/maps?q=30891+LA-16,+Denham+Springs,+LA+70726&output=embed";

export default function Visit() {
  return (
    <div className="route">
      <section className="section" style={{ paddingTop: 150 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Visit / Book</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="title">
              Come see us,
              <br />
              or start on WhatsApp.
            </h2>
          </Reveal>
          <div className="visit-grid">
            <Reveal delay={2}>
              <ul className="info-list">
                <li>
                  <span className="k">Address</span>
                  <span className="v">
                    30891 LA-16
                    <br />
                    Denham Springs, LA 70726
                  </span>
                </li>
                <li>
                  <span className="k">Hours</span>
                  <span className="v">
                    Opens 10 AM Mon
                    <br />
                    (hours vary by artist)
                  </span>
                </li>
                <li>
                  <span className="k">Shop phone</span>
                  <span className="v">
                    <a href="tel:+12252718230">+1 225-271-8230</a>
                  </span>
                </li>
                <li>
                  <span className="k">Booking</span>
                  <span className="v">
                    <a href={waLink()} target="_blank" rel="noopener noreferrer">
                      WhatsApp: +1 315-696-0147
                    </a>
                  </span>
                </li>
              </ul>
              <div className="social-row">
                {SOCIALS.map((s) => (
                  <a
                    key={s.key}
                    className="social-btn"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <SocialIcon type={s.key} />
                  </a>
                ))}
              </div>
              <div style={{ marginTop: 36 }}>
                <a className="btn btn-solid" href={waLink()} target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <iframe
                className="map-frame"
                src={MAP_SRC}
                loading="lazy"
                title="Burning Lotus Tattoo location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
