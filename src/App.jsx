import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import CTA from './components/CTA';

export default function App() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-100 via-white to-slate-50">
      {/* Sticky navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-sky-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-lg font-semibold text-slate-800">
            HelixEDC
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-slate-700 hover:text-sky-700">Features</a>
            <a href="#workflow" onClick={(e) => handleScroll(e, 'workflow')} className="text-slate-700 hover:text-sky-700">Workflow</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-slate-700 hover:text-sky-700">Contact</a>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="hidden rounded-lg bg-sky-600 px-4 py-2 text-white shadow-sm transition hover:bg-sky-700 md:inline-flex"
          >
            Request demo
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <Features />
        <Workflow />
        <CTA />
      </main>

      <footer className="border-t border-sky-200 bg-gradient-to-b from-white via-slate-50 to-sky-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-slate-600">
          <span>© {new Date().getFullYear()} HelixEDC</span>
          <div className="flex gap-4">
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-sky-700">Features</a>
            <a href="#workflow" onClick={(e) => handleScroll(e, 'workflow')} className="hover:text-sky-700">Workflow</a>
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-sky-700">Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
