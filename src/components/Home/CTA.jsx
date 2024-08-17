import React from "react";

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
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-buddyBlue px-4 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              View more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
