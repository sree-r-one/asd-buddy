import React from "react";
import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  CTA,
  Footer,
  Start,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Start />
      <Features />
      <Hero />
      <div className="mx-auto space-y-12"></div>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
