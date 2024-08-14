import React from "react";

const Heading = ({ number, heading, paragraph }) => {
  return (
    <div className="flex flex-col space-y-3 rounded-lg bg-white p-2 shadow">
      <div className="flex items-start space-x-2">
        <div className="bg-brightRed items-start rounded-full px-4 py-2 text-white">
          {number}
        </div>
        {/* Heading */}
        <div className="space-y-2 p-2">
          <h3 className="text-base font-bold">{heading}</h3>
          <p className="text-darkGrayishBlue">{paragraph}</p>
        </div>
      </div>
      {/* Description */}
    </div>
  );
};

const Features = () => {
  return (
    <section id="features">
      <div className="md:mt-12 md:flex-row md:space-y-0 container mx-auto mt-8 flex flex-col space-y-12 rounded-lg bg-white p-10 shadow-sm">
        {/* Whats different */}
        <div className="md:w-1/2 flex flex-col space-y-12">
          {/* max-w-md text-center text-4xl font-bold md:text-left md:text-5xl */}
          <h2 className="md:text-left max-w-md text-center text-4xl font-bold">
            What's different about Manage?
          </h2>
          <p className="text-darkGrayishBlue md:ml-0 md:text-left mx-auto max-w-sm text-center">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Numbered List */}
        <div className="md:w-1/2 flex flex-col space-y-12">
          {/* Item 1  */}
          <Heading
            number="01"
            heading="Track company-wide progress"
            paragraph="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again."
          />
          <Heading
            number="02"
            heading="Everything you need in one place"
            paragraph="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution"
          />
          <Heading
            number="03"
            heading=" Advanced built-in reports"
            paragraph="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
