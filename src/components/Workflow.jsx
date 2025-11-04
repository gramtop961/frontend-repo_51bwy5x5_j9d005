import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, Upload, BarChart3, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <Pencil className="h-5 w-5" />, 
    title: 'Design',
    text: 'Model visits, eCRFs, and edit checks with reusable components and version control.'
  },
  {
    icon: <Upload className="h-5 w-5" />, 
    title: 'Capture',
    text: 'Collect source data at sites with guided forms, queries, and automated validations.'
  },
  {
    icon: <BarChart3 className="h-5 w-5" />, 
    title: 'Review',
    text: 'Resolve discrepancies, lock forms, and track progress across sites in real time.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />, 
    title: 'Submit',
    text: 'Generate exports with full audit trail, eSignatures, and regulator-ready formats.'
  },
];

const Workflow = () => {
  return (
    <section id="workflow" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-sky-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">A guided path from protocol to submission</h2>
          <p className="mt-4 text-slate-600">Microinteractions, smooth scroll, and clear hierarchy keep teams aligned at every step.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-sky-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-slate-700">
                  {s.icon}
                </div>
                <span className="text-sm font-medium text-slate-500">Step {idx + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-slate-600">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Workflow;
