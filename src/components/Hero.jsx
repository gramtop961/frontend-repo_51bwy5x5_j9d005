import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />

      {/* 3D Scene */}
      <div className="relative mx-auto h-[520px] w-full max-w-7xl px-6 pt-8 sm:h-[560px] md:h-[600px]">
        <div className="absolute right-0 top-0 h-full w-full md:right-[-6%]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft glow overlays to blend scene with the page without blocking interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/70 via-white/40 to-transparent" />
          <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl pt-10">
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

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            Electronic Data Capture for Modern Clinical Trials
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            A clean, light interface with guided visuals that makes complex study data simple—
            from eCRFs and edit checks to randomization and audit trails.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-3"
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
            <button
              onClick={() => handleScroll('workflow')}
              className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-white/60 px-4 py-3 text-slate-700 backdrop-blur transition hover:bg-white"
            >
              <Play className="h-5 w-5" />
              See how it works
            </button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-tr from-slate-200 to-slate-300"
                />
              ))}
            </div>
            <span>Trusted by research teams across oncology, cardiology, and rare disease.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
