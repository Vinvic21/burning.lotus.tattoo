import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LotusMark from "./LotusMark.jsx";

const ITEMS = [
  ["/", "Home"],
  ["/gallery", "Gallery"],
  ["/studio", "Studio"],
  ["/reviews", "Reviews"],
  ["/visit", "Visit"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    navigate("/");
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand" onClick={goHome}>
        <LotusMark />
        Burning Lotus Tattoo
      </div>
      <div className={`nav-links ${open ? "mobile-open" : ""}`}>
        {ITEMS.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <button className="nav-burger" onClick={() => setOpen((o) => !o)}>
        {open ? "CLOSE" : "MENU"}
      </button>
    </nav>
  );
}
