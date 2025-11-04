import React from 'react';
import { Activity, Database, Lock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Database className="h-6 w-6 text-sky-600" />,
    title: 'Configurable eCRFs',
    desc: 'Design forms in minutes with versioned changes, branching logic, and reusable components across studies.',
  },
  {
    icon: <Activity className="h-6 w-6 text-emerald-600" />,
    title: 'Real-time Edit Checks',
    desc: 'Prevent data entry errors with point-in-time validations, range checks, and cross-form rules.',
  },
  {
    icon: <Lock className="h-6 w-6 text-violet-600" />,
    title: 'Audit & Compliance',
    desc: 'Part 11 compliant audit trail, role-based access, and immutable signatures for approvals.',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
    title: 'Randomization & Visits',
    desc: 'Stratified randomization, visit schedules, and monitoring dashboards for sites and sponsors.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">Built for quality clinical data</h2>
          <p className="mt-4 text-slate-600">
            Clean, modular sections keep complex workflows simple—so sites can focus on patients, not software.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-sky-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-slate-600">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
