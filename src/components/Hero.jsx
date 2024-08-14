import React from "react";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <section id="hero">
      <div className="">
        <div className="relative mx-auto mt-12">
          <img
            src={heroImg}
            alt=""
            className="mx-auto max-w-96 rounded-2xl drop-shadow-xl md:max-w-7xl"
          />
          <h1 className="absolute left-[50px] top-1/4 text-9xl font-bold leading-tight text-white">
            NDBI
          </h1>
          <p className="text-md absolute left-[60px] top-[360px] font-bold leading-tight text-white">
            Naturalistic Developmental Behavioural Intervention
          </p>
        </div>
        <div className="">
          {/* left item */}
          <div className="">
            <div className=""></div>
            <div className=""></div>
            <p className="">
              ASDBUDDY "FREEDOM courses" show you "HOW" a parent should work
              with the ASD mind and implement change differently while engaging
              with the child
            </p>
            <div className="">
              <a
                href="#"
                className="bg-buddyBlue hover:bg-buddyBlueLight rounded-full px-6 py-4 text-white"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}

          {/* Right Item */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
