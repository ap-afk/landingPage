import { useEffect, useState } from "react";

export default function BuyNow() {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  useEffect(() => {
    // Get ?plan=Pro from URL
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) setSelectedPlan(plan);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const order = {
      name: formData.get("name"),
      email: formData.get("email"),
      plan: selectedPlan,
    };

    console.log("Order submitted:", order);
    alert(`Order submitted for ${order.name} - ${order.plan}`);
  };

  return (
    <section
      id="buy"
      className="max-w-2xl mx-auto mt-16 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Complete Your Purchase
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>

        {/* Plan selection */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Plan
          </label>
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="Basic">Basic</option>
            <option value="Pro">Pro</option>
            <option value="Elite">Elite</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Order
        </button>
      </form>
    </section>
  );
}
