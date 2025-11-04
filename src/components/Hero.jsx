import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-sky-100 via-white to-slate-50"
    >
      {/* 3D Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays (do not block pointer events) */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[60vh] w-[120vw] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[40vh] w-[70vw] translate-x-1/6 rounded-full bg-sky-300/30 blur-3xl" />

      {/* Foreground content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-800 md:text-6xl">
          Electronic Data Capture for Clinical Trials
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          A modern EDC platform with real-time validation, audit trails, and seamless site workflows. Powered by an interactive 3D experience.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            onClick={(e) => handleScroll(e, 'features')}
            className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
          >
            Explore Features
          </a>
          <a
            href="#workflow"
            onClick={(e) => handleScroll(e, 'workflow')}
            className="inline-flex items-center justify-center rounded-lg border border-sky-200 bg-white px-5 py-3 text-sky-700 shadow-sm transition hover:shadow-md"
          >
            See Workflow
          </a>
        </div>
      </div>
    </section>
  );
}
