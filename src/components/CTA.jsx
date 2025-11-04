import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl text-slate-900 sm:text-3xl"
          >
            See EDC that feels effortless
          </motion.h3>
          <p className="mt-3 text-slate-600">Book a live walkthrough tailored to your protocol and timelines.</p>

          {!submitted ? (
            <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-md items-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
              >
                Request demo
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          ) : (
            <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 text-emerald-700">
              <CheckCircle className="h-5 w-5" />
              <span>Thanks! We'll be in touch shortly.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
