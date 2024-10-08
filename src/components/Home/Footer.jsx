import React, { useState, useEffect } from "react";

const Footer = () => {
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
    <footer className="mx-auto mt-auto w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between">
        <div className="col-span-full lg:col-span-1">
          <a
            className="flex-none text-xl font-semibold text-black dark:text-white"
            href="#"
            aria-label="Brand"
          >
            ASDBuddy
          </a>
          <p className="mt-3 text-xs text-gray-600 dark:text-neutral-400 sm:text-sm">
            © 2022 Preline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Product
          </h4>
          <div className="mt-3 space-y-3 text-sm">
            {["Pricing", "Changelog", "Docs", "Download"].map((item) => (
              <p key={item}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Courses
          </h4>
          <div className="mt-3 space-y-3 text-sm">
            {[
              { name: "Freedom Courses ENG", extra: "" },
              { name: "Free Courses", extra: "" },
              { name: "Freedom Courses HIN", extra: "" },
              { name: "Essential", extra: "" },
            ].map((item) => (
              <p key={item.name}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item.name}
                  {item.extra && (
                    <span className="inline text-blue-600 dark:text-blue-500">
                      {item.extra}
                    </span>
                  )}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Resources
          </h4>
          <div className="mt-3 space-y-3 text-sm">
            {[
              "Community",
              "Help & Support",
              "eBook",
              "What's New",
              "Status",
            ].map((item) => (
              <p key={item}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Developers
          </h4>
          <div className="mt-3 space-y-3 text-sm">
            {["Api", "Status", "GitHub — New"].map((item) => (
              <p key={item}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </p>
            ))}
          </div>

          <h4 className="mt-7 text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Industries
          </h4>
          <div className="mt-3 space-y-3 text-sm">
            {["Financial Services", "Education"].map((item) => (
              <p key={item}>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-5 dark:border-neutral-700">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative inline-flex">
              <button
                id="footer-language-dropdown"
                type="button"
                className="inline-flex items-center gap-x-2 rounded-lg border bg-white px-3 py-2 text-sm text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <span>English (US)</span>
                <svg
                  className="size-4 shrink-0 rotate-180 text-gray-500 dark:text-neutral-500"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
            </div>
            <div className="space-x-4 text-sm">
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Terms
              </a>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Privacy
              </a>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Status
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="mt-3 sm:hidden">
              <a
                className="flex-none text-xl font-semibold text-black dark:text-white"
                href="#"
                aria-label="Brand"
              >
                Brand
              </a>
              <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400 sm:text-sm">
                © 2022 Preline.
              </p>
            </div>

            <div className="space-x-4">
              {["twitter", "github", "linkedin"].map((platform) => (
                <a
                  key={platform}
                  className="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="size-4 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d={getPlatformIconPath(platform)} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const getPlatformIconPath = (platform) => {
  switch (platform) {
    case "twitter":
      return "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z";
    case "github":
      return "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z";
    case "linkedin":
      return "M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z";
    default:
      return "";
  }
};

export default Footer;
