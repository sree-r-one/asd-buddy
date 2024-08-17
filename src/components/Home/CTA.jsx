import React from "react";
import { logoAppleStore, logoGoogleStore } from "../../assets";
const CTA = () => {
  return (
    <section className="bg-white px-4 dark:bg-gray-900">
      <div className="m-10 mx-auto max-w-screen-xl rounded-lg bg-white p-10 drop-shadow-md">
        <div className="max-w-screen-lg space-y-10">
          <h2 className="tracking-loose mb-4 text-6xl font-extrabold text-buddyBlue dark:text-white">
            Let's find more that brings us together.
          </h2>
          <p className="mb-8 max-w-screen-md font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            ASDBuddy helps you connect with a supportive community, empowering
            you to make informed decisions and discover new opportunities.
            Together, we can unlock the potential within every child.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <img src={logoAppleStore} alt="applestore" className="h-16" />
            <img src={logoGoogleStore} alt="applestore" className="h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
