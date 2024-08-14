import React from "react";

const CTA = () => {
  return (
    <section className="bg-brightRed shadow-md" id="cta">
      {/* Flex Container */}
      <div className="mx-auto mt-12 flex flex-col items-center justify-between space-y-12 px-10 py-12 md:flex-row md:space-y-0 md:px-6">
        <h2 className="text-center text-5xl font-bold text-white md:max-w-xl md:text-left md:text-4xl">
          Simplify how your team works today
        </h2>
        <a
          href="#"
          className="rounded-full bg-white px-6 py-2 text-brightRed shadow-2xl hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
