import React from 'react';
import { Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />

      {/* Spline 3D scene */}
      <div className="absolute right-0 top-0 h-[520px] w-full md:w-1/2">
        <Spline scene="https://prod.spline.design/gsJgUqg8pZpFj2qP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay to blend with background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/90 via-white/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 md:pt-32">
        {/* Top micro-badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm"
        >
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          HIPAA & 21 CFR Part 11 ready
        </motion.div>

        <div className="mt-6 grid gap-8 md:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            Electronic Data Capture for Modern Clinical Trials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-slate-600"
          >
            A clean, light interface with guided 3D visuals that makes complex study data simple—
            from eCRFs and edit checks to randomization and audit trails.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => handleScroll('features')}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
            >
              <Rocket className="h-5 w-5" />
              Explore capabilities
            </button>
            <button
              onClick={() => handleScroll('cta')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 transition hover:bg-slate-50"
            >
              Get a demo
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
