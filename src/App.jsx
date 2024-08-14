import React from "react";
import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  CTA,
  Footer,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl space-y-12">
        <Hero />
        <Features />
        <Testimonials />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
