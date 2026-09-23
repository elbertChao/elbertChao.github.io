import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience/Experience";
import Particle from "./components/Particle";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    let revealTimer;

    const reveal = () => {
      revealTimer = window.setTimeout(() => setLoad(false), 120);
    };

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
    }

    const fallbackTimer = window.setTimeout(() => setLoad(false), 500);
    const particleTimer = window.setTimeout(() => setShowParticles(true), 350);

    return () => {
      window.removeEventListener("load", reveal);
      window.clearTimeout(revealTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(particleTimer);
    };
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {showParticles && <Particle />}
        <Navbar />
        <Home />
        <Experience />
        <Projects />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
