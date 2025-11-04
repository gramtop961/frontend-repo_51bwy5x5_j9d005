import React from 'react';
import { Shield, Database, Activity, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Regulatory-Grade Security',
    desc: '21 CFR Part 11-ready with role-based access, audit trails, and eSignatures.',
  },
  {
    icon: Database,
    title: 'Reliable Data Capture',
    desc: 'Source-verified forms, edit checks, and seamless query management across sites.',
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    desc: 'Dashboards for enrollment, deviations, and endpoint readiness with exports.',
  },
  {
    icon: Zap,
    title: 'Fast, Modern UX',
    desc: 'Responsive, accessible, and optimized for coordinators and CRAs on the go.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative w-full border-t border-sky-200 bg-gradient-to-b from-white via-sky-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">Purpose-built for EDC</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to run compliant, efficient clinical trials while keeping data clean and actionable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-sky-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-sky-200 bg-sky-50 text-sky-700">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
              <button className="mt-4 inline-flex items-center text-sm font-medium text-sky-700 underline-offset-4 hover:underline">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
