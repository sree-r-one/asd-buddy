import React from "react";
import {
  avatarAnisha,
  avatarAli,
  avatarRichard,
  avatarShanai,
} from "../assets";

const Testimonial = ({ img, name, description }) => {
  return (
    <div className="m-2 flex flex-col items-center space-y-6 rounded-lg bg-gray-100 p-6 drop-shadow-md">
      <img src={img} alt={name} className="-mt-14 w-16" />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-darkGrayishBlue text-center text-sm">{description}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="mt-32 rounded-lg bg-white p-10 shadow-sm"
    >
      {/* Container for heading and testimonial blocks */}
      <div className="max-w-6xl rounded">
        <h2 className="pb-12 text-center text-4xl font-bold">
          What's Different About Manage
        </h2>

        {/* Testimonials  */}
        <div className="md:flex-row md:space-y-0 my-12 flex flex-col space-y-12">
          <Testimonial
            img={avatarAnisha}
            name="Anisha Li"
            description="Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated"
          />
          <Testimonial
            img={avatarAli}
            name="Ali Brav"
            description="We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused"
          />
          <Testimonial
            img={avatarRichard}
            name="Richard Watts"
            description="Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="bg-brightRed hover:bg-brightRedLight rounded-full px-6 py-2 text-white"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
