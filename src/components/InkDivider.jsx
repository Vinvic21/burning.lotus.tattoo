import { useReveal } from "./Reveal.jsx";

export default function InkDivider() {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`ink-divider ${inView ? "in" : ""}`}>
      <svg width="220" height="26" viewBox="0 0 220 26" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 13 C 40 2, 70 24, 110 13 S 180 2, 218 13" />
      </svg>
    </div>
  );
}
