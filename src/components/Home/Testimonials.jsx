import React, { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    photo:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    alias: "Pri - Mother to 3 yr old – Mumbai, June 2016",
    data: "ASDBUDDY provides a holistic approach to a child's development, allowing parents to see their child as a whole rather than through isolated therapies. The program encourages collaboration and thoughtful goal-setting, helping parents gain clarity and confidence in addressing their child's needs. Video feedback and regular sessions offer valuable insights, enabling parents to better understand and support their child's social and behavioral progress.",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    alias: "Mother of Adi, Oct 2023 - Freedom 3, Dubai",
    data: "ASDBuddy provided the breakthrough my son needed when traditional therapies stopped working. It helped me shift my parenting approach, bringing renewed hope and a structured way to address the core issues of Autism. The platform's videos, explanations, and regular feedback sessions have been invaluable, offering practical guidance and supporting meaningful progress in my son's development.",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    alias: "Pri - Mother to 6 yr old – TamilNadu, June 2020",
    data: "I have done other therapies for my child before starting the relationship model, but have not seen much progress with the child. The child is made to do a task like a robot and complete it without the child not even being aware as to what they are doing. The child is only physically present in that environment. But here they make sure that the child happily engages with us in our day-to-day activities and is also given in the home environment.",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    alias: "Dr. A.M. Hemalatha - TamilNadu, June 2022",
    data: "The book is an eye opener and made me understand the humanistic Relationship Based Method of treating autism and the growth possibilities. I admire the confidence and home remedy ideas the book provides to new parents",
  },
];

const Testimony = ({ testimony }) => {
  return (
    <div className="flex flex-col rounded-xl bg-white shadow-sm shadow-buddyBlueLight transition-all hover:shadow-buddyBlue hover:drop-shadow-lg dark:bg-neutral-900">
      <div className="flex-auto p-4 md:p-6">
        <p className="text-base italic text-gray-800 dark:text-neutral-200 md:text-lg">
          {testimony.data}
        </p>
      </div>

      <div className="rounded-b-xl bg-gray-100 p-4 dark:bg-neutral-800 md:px-7">
        <div className="flex items-center gap-x-3">
          <div className="shrink-0">
            <img
              className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
              src={testimony.photo}
              alt="Avatar"
            />
          </div>

          <div className="grow">
            <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200 sm:text-base">
              {testimony.alias}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
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
    <div className="overflow-hidden" id="testimonials">
      <div className="relative mx-auto max-w-[85rem] rounded-xl bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Title */}
        <div className="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2">
          <h2 className="text-4xl font-semibold text-black sm:text-3xl lg:text-6xl">
            Testimonials
          </h2>
          <p className="mt-2 font-thin leading-6">
            Your identity is strictly kept confidential
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="flex items-center justify-center p-10">
          <div className="grid items-start justify-start gap-12 md:grid-cols-4">
            {TESTIMONIALS.map((testimony, i) => (
              <Testimony key={i} testimony={testimony} />
            ))}
          </div>
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Testimonials;
