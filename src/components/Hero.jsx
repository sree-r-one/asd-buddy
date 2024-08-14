import React from "react";
import { illustrationIntro } from "../assets";

const Hero = () => {
  return (
    <section id="hero">
      <div className="md:flex-row md:space-y-0 md:mt-14 container mx-auto mt-8 flex flex-col-reverse space-y-12 rounded px-10 pt-5 drop-shadow-sm">
        {/* left item */}
        <div className="md:w-1/2 mb-32 flex flex-col space-y-12">
          <h1 className="md:text-left md:text-5xl max-w-md text-center text-4xl font-bold">
            Bring Everyone Together to Build Better Products
          </h1>
          <p className="md:text-left max-w-md text-center">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="md:justify-start flex justify-center">
            <a
              href="#"
              className="bg-brightRed hover:bg-brightRedLight rounded-full px-6 py-4 text-white"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="dropshadow-sm md:pb-0 mx-auto mb-10 flex w-1/2 items-center justify-center pb-10 drop-shadow">
          <img src={illustrationIntro} alt="" />
        </div>

        {/* Right Item */}
      </div>
    </section>
  );
};

export default Hero;
