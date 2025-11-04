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
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-bleed light gradient foundation */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-slate-50" />

      {/* 3D Scene full-bleed (DNA + capsule stays) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle light overlays to brighten dark areas without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/70 via-white/40 to-transparent" />
        <div className="pointer-events-none absolute right-[-6rem] top-12 h-[28rem] w-[28rem] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute left-[-8rem] bottom-[-6rem] h-[24rem] w-[24rem] rounded-full bg-sky-100/60 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pt-24 pb-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-sm text-slate-600 shadow-sm backdrop-blur"
        >
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          HIPAA & 21 CFR Part 11 ready
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          Electronic Data Capture for Modern Clinical Trials
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700"
        >
          A clean, light interface that makes complex study data simple— from eCRFs and edit checks to randomization and audit trails.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => handleScroll('features')}
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-white shadow-lg shadow-sky-600/25 transition hover:-translate-y-0.5 hover:bg-sky-700"
          >
            <Rocket className="h-5 w-5" />
            Explore capabilities
          </button>
          <button
            onClick={() => handleScroll('cta')}
            className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white/90 px-5 py-3 text-slate-700 backdrop-blur transition hover:bg-white"
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

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600"
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
    </section>
  );
};

export default Hero;
