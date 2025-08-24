import Features from "../components/Features";
import Plans from "../components/Plans";
import Support from "../components/Support";

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100">
          OmniFit Smartwatch
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Track fitness, sleep, and health — all from your wrist.
        </p>
        <a
          href="#buy"
          className="mt-6 inline-block rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
        >
          Buy Now
        </a>
      </section>

      {/* Sections */}
      <Features />
      <Plans />
      <Support />
    </main>
  );
}
