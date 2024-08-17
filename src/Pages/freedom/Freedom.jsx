import React from "react";
import { Outlet, Link } from "react-router-dom";

const CARDS = [
  { path: "1", heading: "Freedom 1", description: "Encouraging Looking" },
  { path: "2", heading: "Freedom 2", description: "Simple Expectation" },
  { path: "3", heading: "Freedom 3", description: "Engagement Established" },
  { path: "4", heading: "Freedom 4", description: "Dynamism Initiated" },
  { path: "3", heading: "Freedom 3", description: "Engagement Established" },
  { path: "3", heading: "Freedom 3", description: "Engagement Established" },
  { path: "3", heading: "Freedom 3", description: "Engagement Established" },
  { path: "3", heading: "Freedom 3", description: "Engagement Established" },
  { path: "3", heading: "Freedom 3", description: "Engagement Established" },
];

const FreeCard = ({ card }) => {
  return (
    <div className="">
      <Link
        to={card.path}
        className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {card.heading}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {card.description}
        </p>
      </Link>
    </div>
  );
};
const Freedom = () => {
  return (
    <div className="container mx-auto">
      <h1>Freedom Main Section</h1>
      <div className="grid items-start justify-start gap-12 md:grid-cols-4">
        {CARDS.map((card, i) => (
          <FreeCard key={i} card={card} />
        ))}
      </div>
      <Outlet />{" "}
      {/* This is where the nested route content (like Freedom1) will be rendered */}
    </div>
  );
};

export default Freedom;
