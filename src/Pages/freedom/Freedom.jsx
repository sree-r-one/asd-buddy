import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const CARDS = [
  {
    id: 1,
    path: "1",
    heading: "Freedom 1",
    description: "Encouraging Looking",
  },
  { id: 2, path: "2", heading: "Freedom 2", description: "Simple Expectation" },
  {
    id: 3,
    path: "3",
    heading: "Freedom 3",
    description: "Engagement Established",
  },
  { id: 4, path: "4", heading: "Freedom 4", description: "Dynamism Initiated" },
  {
    id: 5,
    path: "5",
    heading: "Freedom 5",
    description: "Engagement Established",
  },
  {
    id: 6,
    path: "6",
    heading: "Freedom 6",
    description: "Engagement Established",
  },
  {
    id: 7,
    path: "7",
    heading: "Freedom 7",
    description: "Engagement Established",
  },
  {
    id: 8,
    path: "8",
    heading: "Freedom 8",
    description: "Engagement Established",
  },
  {
    id: 9,
    path: "9",
    heading: "Freedom 9",
    description: "Engagement Established",
  },
  {
    id: 10,
    path: "10",
    heading: "Freedom 10",
    description: "Engagement Established",
  },
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

const FreedomTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="md:flex">
      <ul className="mb-4 flex space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:mb-0 md:mr-4 md:flex-col">
        {CARDS.map((freedom) => (
          <li key={freedom.id}>
            <button
              onClick={() => setActiveTab(freedom.id)}
              className={`inline-flex w-32 items-center rounded-lg px-4 py-3 ${
                activeTab === freedom.id
                  ? "bg-blue-700 text-white dark:bg-blue-600"
                  : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              }`}
            >
              <span>{freedom.heading}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="text-medium w-full rounded-lg bg-gray-50 p-6 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
        {CARDS.map((freedom) =>
          activeTab === freedom.path ? (
            <div key={freedom.id}>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                {freedom.name}
              </h3>
              <p>{freedom.content}</p>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};

const Freedom = () => {
  return (
    <div className="container mx-auto p-2">
      <FreedomTabs />
    </div>
  );
};

export default Freedom;
