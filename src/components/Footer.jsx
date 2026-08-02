import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container">
      <span>&copy; {new Date().getFullYear()} Burning Lotus Tattoo — Denham Springs, LA</span>
      <span>30891 LA-16, Denham Springs, LA 70726</span>
      <Link
        to="/visit"
        style={{
          color: "inherit",
          fontFamily: "var(--font-mono)",
          fontSize: "11.5px",
          letterSpacing: "0.08em",
        }}
      >
        Get directions →
      </Link>
    </footer>
  );
}
