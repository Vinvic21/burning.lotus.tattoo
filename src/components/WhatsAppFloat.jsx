import { useState } from "react";
import { waLink } from "../data/content.js";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  return (
    <>
      <a
        className="wa-float"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path
            fill="#0B0A09"
            d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.5.7 4.8 1.9 6.8L3 29l6.9-2.1c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.6 12.7-12.5S23 3 16 3z"
          />
          <path
            fill="#25D366"
            d="M16 4.4c-6.2 0-11.2 5-11.2 11.1 0 2.3.7 4.5 2 6.3l-1.3 4.7 4.9-1.3c1.7 1 3.6 1.5 5.6 1.5 6.2 0 11.2-5 11.2-11.1S22.2 4.4 16 4.4z"
          />
          <path
            fill="#fff"
            d="M12.2 9.9c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3s1.3 3.4 1.5 3.6c.2.3 2.5 4 6.2 5.4 3 1.2 3.6 1 4.3.9.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.2-.3-.3-.7-.5-.4-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.4-.9 1.1-1.1 1.3-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.9-1.1-1-1.8-2.2-2-2.5-.2-.4 0-.5.2-.7.2-.2.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.8-2-1.1-2.6z"
          />
        </svg>
      </a>
      <div className={`wa-tooltip ${show ? "show" : ""}`}>Book on WhatsApp →</div>
    </>
  );
}
