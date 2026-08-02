import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Studio from "./pages/Studio.jsx";
import Reviews from "./pages/Reviews.jsx";
import Visit from "./pages/Visit.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <div className="grain" />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
