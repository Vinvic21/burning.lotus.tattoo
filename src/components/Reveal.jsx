import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, inView] = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${inView ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
