import React from 'react';

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative w-full border-t border-sky-200 bg-gradient-to-b from-sky-50 via-white to-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-b from-white via-sky-50 to-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-800 md:text-3xl">See it in action</h2>
          <p className="mt-2 text-slate-600">Request a demo to explore forms, monitoring, and export workflows.</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <input
              type="text"
              required
              placeholder="Full name"
              className="w-full rounded-lg border border-sky-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600/30"
            />
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full rounded-lg border border-sky-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600/30"
            />
            <input
              type="text"
              placeholder="Organization"
              className="w-full rounded-lg border border-sky-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600/30 sm:col-span-2"
            />
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 font-medium text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
            >
              Request demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
