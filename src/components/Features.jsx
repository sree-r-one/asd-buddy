import React, { useState, useEffect } from "react";

const Features = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex justify-end"></div>

      <div className="grid items-center gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {/* Icon Block */}
        <a
          className="group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href="#"
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600">
            <svg
              className="size-6 shrink-0 text-white"
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
              <rect width="10" height="14" x="3" y="8" rx="2" />
              <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
              <path d="M8 18h.01" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
              Responsive
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Responsive, and mobile-first project on the web
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline group-focus:underline">
              Learn more
              <svg
                className="size-4 shrink-0"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
        </a>
        {/* End Icon Block */}

        {/* Icon Block */}
        <a
          className="group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href="#"
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600">
            <svg
              className="size-6 shrink-0 text-white"
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
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
              Customizable
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Components are easily customized and extendable
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline group-focus:underline">
              Learn more
              <svg
                className="size-4 shrink-0"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
        </a>
        {/* End Icon Block */}

        {/* Icon Block */}
        <a
          className="group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href="#"
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600">
            <svg
              className="size-6 shrink-0 text-white"
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
              Documentation
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Every component and plugin is well documented
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline group-focus:underline">
              Learn more
              <svg
                className="size-4 shrink-0"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
        </a>
        {/* End Icon Block */}

        {/* Icon Block */}
        <a
          className="group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href="#"
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600">
            <svg
              className="size-6 shrink-0 text-white"
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
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
              24/7 Support
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Contact us 24 hours a day, 7 days a week
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline group-focus:underline">
              Learn more
              <svg
                className="size-4 shrink-0"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
        </a>
        {/* End Icon Block */}
      </div>
    </div>
  );
};

export default Features;
