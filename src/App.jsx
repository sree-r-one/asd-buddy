import React from "react";
import {
  Navbar,
  Hero,
  Testimonials,
  CTA,
  Footer,
  Start,
  Pricing,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Start />
      <Pricing />
      <Hero />
      <div className="mx-auto space-y-12"></div>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
