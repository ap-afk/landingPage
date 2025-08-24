export default function Support() {
  const faqs = [
    {
      question: "How long does the battery last?",
      answer: "OmniFit smartwatch lasts up to 7 days on a single charge depending on usage.",
    },
    {
      question: "Is it waterproof?",
      answer: "Yes, it is water resistant up to 50 meters, safe for swimming and showering.",
    },
    {
      question: "Which phones are compatible?",
      answer: "OmniFit works with both iOS (12+) and Android (7+) devices.",
    },
    {
      question: "Can I track sleep patterns?",
      answer: "Absolutely, OmniFit monitors deep, light, and REM sleep automatically.",
    },
  ];

  return (
    <section id="support" className="py-20 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Support & FAQ
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Answers to common questions about OmniFit smartwatch.
        </p>

        <div className="mt-12 space-y-6 text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">{faq.question}</h3>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-zinc-600 dark:text-zinc-400">
            Still have questions? Contact our support team.
          </p>
          <a
            href="mailto:support@omnifit.com"
            className="mt-4 inline-block rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
