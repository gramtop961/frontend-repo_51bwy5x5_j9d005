import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-sky-600" />
            <span className="font-semibold">Clarity EDC</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#features" className="hover:text-slate-900">Capabilities</a>
            <a href="#workflow" className="hover:text-slate-900">Workflow</a>
            <a href="#cta" className="hover:text-slate-900">Request demo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Workflow />
        <CTA />
      </main>

      <footer className="border-t border-slate-200 bg-gradient-to-t from-slate-50 via-white to-transparent py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Clarity EDC. All rights reserved.</p>
          <div className="flex gap-5 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Security</a>
            <a href="#" className="hover:text-slate-700">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
