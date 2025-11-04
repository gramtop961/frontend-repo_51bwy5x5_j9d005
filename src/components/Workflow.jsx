import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Design CRFs',
    desc: 'Build eCRFs with edit checks, branching logic, and controlled vocabularies.',
  },
  {
    title: 'Site Activation',
    desc: 'Onboard sites, assign roles, and enable eSignatures with full audit trails.',
  },
  {
    title: 'Data Entry & Review',
    desc: 'Coordinators enter data, monitors query and verify, sponsors review KPIs.',
  },
  {
    title: 'Lock & Export',
    desc: 'Freeze datasets, resolve final queries, and export to SDTM/ADaM pipelines.',
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative w-full border-t border-sky-200 bg-gradient-to-b from-white via-slate-50 to-sky-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">Clinical Workflow, Simplified</h2>
          <p className="mt-3 text-slate-600">Step-by-step flow designed around coordinators, monitors, and sponsors.</p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <li
              key={s.title}
              className="relative rounded-xl border border-sky-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2 text-sky-700">
                <CheckCircle size={18} />
                <span className="text-sm font-medium">Step {idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              {idx < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 text-sky-400 md:block">
                  <ArrowRight />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
