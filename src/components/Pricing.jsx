import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Choose the right plan for you
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-lg gap-6 lg:max-w-none lg:grid-cols-3">
        {/* Basic Plan */}
        <div className="rounded-lg border p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
          <p className="mt-4 text-gray-500">$15/month</p>
          <p className="text-sm text-gray-400">
            $12 per month if paid annually
          </p>
          <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white">
            Buy plan
          </button>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>✔️ 5 products</li>
            <li>✔️ Up to 1,000 subscribers</li>
            <li>✔️ Basic analytics</li>
            <li>✔️ 48-hour support response time</li>
          </ul>
        </div>
        {/* Essential Plan */}
        <div className="rounded-lg border p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900">Essential</h3>
          <p className="mt-4 text-gray-500">$30/month</p>
          <p className="text-sm text-gray-400">
            $24 per month if paid annually
          </p>
          <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white">
            Buy plan
          </button>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>✔️ Everything in Basic</li>
            <li>✔️ 25 products</li>
            <li>✔️ Up to 10,000 subscribers</li>
            <li>✔️ Advanced analytics</li>
            <li>✔️ 24-hour support response time</li>
            <li>✔️ Marketing automations</li>
          </ul>
        </div>
        {/* Growth Plan */}
        <div className="rounded-lg border p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900">Growth</h3>
          <p className="mt-4 text-gray-500">$60/month</p>
          <p className="text-sm text-gray-400">
            $48 per month if paid annually
          </p>
          <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white">
            Buy plan
          </button>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>✔️ Everything in Essential</li>
            <li>✔️ Unlimited products</li>
            <li>✔️ Unlimited subscribers</li>
            <li>✔️ Advanced analytics</li>
            <li>✔️ 1-hour dedicated support response time</li>
            <li>✔️ Marketing automations</li>
            <li>✔️ Custom reporting tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
