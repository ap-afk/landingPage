
import React from "react";
export default function Features() {
  const items = [
    {
      title: "24/7 Heart Monitoring",
      desc: "Stay on top of your heart rate with continuous tracking.",
    },
    {
      title: "Sleep Analysis",
      desc: "Understand your sleep patterns for better rest.",
    },
    {
      title: "Water Resistant",
      desc: "Wear it in the pool or shower without worry.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100">
          Features
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {items.map((f, i) => (
            <div
              key={i}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {f.title}
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}