import React, { useState, useEffect } from "react";

const Start = () => {
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
    <div className="mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="aspect-w-16 aspect-h-7">
        <img
          className="h-[500px] w-full rounded-xl object-cover"
          src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="Features Image"
        />
      </div>

      {/* Grid */}
      <div className="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
            We tackle the challenges start-ups face
          </h2>
          <p className="mt-2 text-gray-500 md:mt-4 dark:text-neutral-400">
            Besides working with start-up enterprises as a partner for
            digitalization, we have built enterprise products for common pain
            points that we have encountered in various products and projects.
          </p>
        </div>
        {/* End Col */}

        <div className="lg:col-span-2">
          <div className="grid gap-8 sm:grid-cols-2 md:gap-12">
            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="mt-1 size-6 shrink-0 text-blue-600"
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
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Creative minds
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  We choose our teams carefully. Our people are the secret to
                  great work.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="mt-1 size-6 shrink-0 text-blue-600"
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
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Simple and affordable
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  From boarding passes to movie tickets, there's pretty much
                  nothing you can't store with Preline.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="mt-1 size-6 shrink-0 text-blue-600"
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
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Industry-leading documentation
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Our documentation and extensive Client libraries contain
                  everything a business needs to build a custom integration.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="mt-1 size-6 shrink-0 text-blue-600"
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Designing for people
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  We actively pursue the right balance between functionality and
                  aesthetics, creating delightful experiences.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Start;
