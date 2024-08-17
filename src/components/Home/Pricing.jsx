import React from "react";

const PRICINGDETAILS = [
  {
    class: "Free",
    pricing: "INR 0",
    description: "(Always)",
    buttonDescription: "Begin Free",
    items: [
      "Free app Download",
      "Access to Blogs",
      "Access to Community",
      "Access 1 week of content on each FREEDOM Course Once a year 6-week parent training access",
    ],
  },
  {
    class: "Guided Self Study",
    pricing: "INR 385/week",
    description: "(Single payment - 13 weeks course)",
    buttonDescription: "Begin a Freedom",
    items: [
      "Free app Download",
      "Access to Blogs",
      "Access to Community",
      "Access ONE 13 week full FREEDOM Course",
      "Parent Training and Q&A every 15 days - LIVE Group",
      "Even when your FREEDOM course is over, you will be invited to CoffeeTime with Founder",
    ],
  },
  {
    class: "Customized",
    pricing: "INR 5000/Week",
    description: "(Single payment - 12 weeks)",
    buttonDescription: "Begin Customized",
    items: [
      "Free app Download",
      "Access to Blogs",
      "Access to Community",
      "12 weeks - Goal-Based - NDBI Guided Program",
      "Everyday parent videos ASDBUDDY feedback",
      "Individualised Family Based - Weekly -60minute consultation with hands-on Parent Training and Demos",
      "CoffeeTime with Founder - Life-long access",
    ],
  },
];

const PricingCard = ({ item }) => {
  return (
    <div className="max-w-72 rounded-lg border p-6 shadow-sm shadow-buddyBlueLight transition-all hover:shadow-md hover:shadow-buddyBlue">
      <h3 className="text-xl font-semibold text-gray-900">{item.class}</h3>
      <p className="mt-4 text-gray-500">{item.pricing}</p>
      <p className="text-sm text-gray-400">{item.description}</p>

      <ul className="mt-6 space-y-4 text-gray-600">
        {item.items.map((description, i) => (
          <li className="flex" key={i}>
            ✔️ <div className="pl-2">{description}</div>{" "}
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white">
        {item.buttonDescription}
      </button>
    </div>
  );
};
const Pricing = () => {
  return (
    <div id="pricing" className="container mx-auto mt-48 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-thin text-gray-900 sm:text-6xl">
          Providing you value and paying our employees!
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Plan 03 - Usually parents make a single paid appointment to meet and
          then commit
        </p>
      </div>
      <div className="flex items-center justify-center p-10">
        <div className="grid max-w-4xl gap-12 md:grid-cols-3">
          {PRICINGDETAILS.map((item, i) => (
            <PricingCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
