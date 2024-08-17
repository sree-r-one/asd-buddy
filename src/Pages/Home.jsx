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
    <div className="space-y-24">
      <Start />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
