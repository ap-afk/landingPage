import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    // initialize from stored preference
    const stored = localStorage.getItem("theme");
    if (stored) setDark(stored === "dark");
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
    }
    // no dependency on purpose (run once)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="rounded-md p-2 ring-1 ring-zinc-300/60 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-zinc-700/60 dark:hover:bg-zinc-800"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {/* Sun / Moon icons (no external deps) */}
      {dark ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 1 0 21.64 13z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm0-14a1 1 0 0 1 1-1V2a1 1 0 1 1-2 0v1a1 1 0 0 1 1 1zm8 7a1 1 0 0 1 1 1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1zM3 12a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm14.95 6.364a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zM4.636 4.636a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 5.343 6.757l-.707-.707a1 1 0 0 1 0-1.414zm0 14.728a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707zM17.657 5.343a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707zM12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 ring-1 ring-zinc-200 dark:bg-zinc-900/70 dark:ring-zinc-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
          aria-label="OmniFit home"
        >
          {/* Simple watch mark */}
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="currentColor">
            <path d="M7 3h10l1 3h1a1 1 0 1 1 0 2h-1l-1 3H8L7 8H6a1 1 0 1 1 0-2h1l1-3zm1.5 12h7a3.5 3.5 0 1 1-7 0z" />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            OmniFit
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#features" className="nav-link">Features</a>
          <a href="#plans" className="nav-link">Plans</a>
          <a href="#support" className="nav-link">Support</a>
          <a href="#download" className="nav-link">Download App</a>
        </div>

        {/* Right side: theme + CTA + burger */}
        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <button className="hidden md:inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => window.location.href = "#buy"}
          >
            Buy Now
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="inline-flex items-center rounded-md p-2 ring-1 ring-zinc-300/60 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden dark:ring-zinc-700/60 dark:hover:bg-zinc-800"
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-5 w-5 transition-transform ${open ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-zinc-200 dark:border-zinc-800 transition-[max-height] duration-300 ease-out ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3">
          <a href="#features" className="mobile-link">Features</a>
          <a href="#plans" className="mobile-link">Plans</a>
          <a href="#support" className="mobile-link">Support</a>
          <a href="#download" className="mobile-link">Download App</a>
          <a
            href="#buy"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
}
