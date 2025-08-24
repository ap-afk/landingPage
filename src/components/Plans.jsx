import React from "react";

export default function Plans() {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      features: ["Heart Rate Monitor", "Step Tracking", "Sleep Analysis"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$149",
      features: [
        "Everything in Basic",
        "GPS Tracking",
        "Water Resistance (50m)",
        "Advanced Analytics",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$199",
      features: [
        "Everything in Pro",
        "Personalized Coaching",
        "Priority Support",
        "Exclusive Watch Faces",
      ],
      popular: false,
    },
  ];

  return (
    <section id="plans" className="py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Choose Your Plan
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Find the perfect OmniFit smartwatch for your lifestyle.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 ${
                plan.popular
                  ? "border-indigo-600 ring-2 ring-indigo-600"
                  : "border-zinc-200 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="mb-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-indigo-600">
                {plan.price}
              </p>

              <ul className="mt-4 space-y-2 text-left">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <svg
                      className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Pass plan to Buy form */}
              <a
                href={`?plan=${plan.name}#buy`}
                className={`mt-6 inline-block w-full rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                }`}
              >
                Select
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
