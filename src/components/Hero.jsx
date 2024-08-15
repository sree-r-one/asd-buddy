import React, { useState, useEffect } from "react";

const Hero = () => {
  return (
    <div className="mx-auto my-10 px-4 sm:px-6 lg:px-8">
      {/* <Features /> */}
      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Start your journey with{" "}
            <span className="text-blue-600">Preline</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>

          {/* Buttons */}
          <div className="mt-7 grid w-full gap-3 sm:inline-flex">
            <a
              className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Get started
              <svg
                className="h-4 w-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
            <a
              className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Contact sales team
            </a>
          </div>
          {/* End Buttons */}

          {/* Review Section */}
          <div className="mt-6 grid grid-cols-2 gap-x-5 lg:mt-10">
            <Review rating={4.6} reviews="12k" />
            <Review rating={4.8} reviews="5k" />
          </div>
          {/* End Review Section */}
        </div>
        {/* End Col */}

        <div className="relative ms-4">
          <img
            className="w-full rounded-md"
            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
            alt="Hero"
          />
          <div className="absolute inset-0 -z-[1] -mb-4 -ms-4 me-4 mt-4 h-full w-full rounded-md bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 lg:-mb-6 lg:-ms-6 lg:me-6 lg:mt-6"></div>

          {/* SVG */}
          <div className="absolute bottom-0 start-0">
            <svg
              className="ms-auto h-auto w-2/3 text-white"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add the SVG shapes here */}
            </svg>
          </div>
          {/* End SVG */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

const Review = ({ rating, reviews }) => {
  return (
    <div className="py-5">
      <div className="flex gap-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="h-4 w-4 text-gray-800"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-800">
        <span className="font-bold">{rating}</span> /5 - from {reviews} reviews
      </p>
      <div className="mt-5">
        {/* Star SVG */}
        <svg
          className="h-auto w-16 text-gray-800"
          width="80"
          height="27"
          viewBox="0 0 80 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Add the star SVG path here */}
        </svg>
        {/* End Star SVG */}
      </div>
    </div>
  );
};

export default Hero;
