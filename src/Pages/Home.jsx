import React from "react";
import {
  Testimonials,
  Hero,
  CTA,
  Footer,
  Start,
  Pricing,
} from "../components/Home";

const Home = () => {
  return (
    <div>
      <Start />
      <Pricing />
      <Hero />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
