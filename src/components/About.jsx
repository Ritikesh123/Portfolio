import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function About() {
  return (
    <section name="about" className="mesh-light border-t hairline py-24 md:py-32">
      <div className="section-shell grid gap-12 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow">01 / About</p>
          <h2 className="display mt-5 text-5xl font-extrabold md:text-7xl">Currently<br />building.</h2>
        </div>
        <div className="max-w-2xl md:pt-12">
          <p className="text-2xl font-semibold leading-tight md:text-4xl">Scalable interfaces, thoughtful systems and AI-ready frontend engineering.</p>
          <p className="mt-8 leading-7 text-[#686b73]">I build responsive, high-performance applications with React.js, Next.js and TypeScript. My work spans enterprise and media platforms including Forbes India, CNBC TV18 and News18 Features, with a focus on reusable components, SSR, API integration and performance.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['5+ years', 'SSR & PWA', 'Agentic AI', 'Frontend architecture'].map((item) => <span key={item} className="rounded-full border border-[#deded9] px-3 py-2 text-xs font-bold">{item}</span>)}
          </div>
          <a href="mailto:ritikesh.raj04@gmail.com" className="mt-8 inline-flex items-center gap-2 border-b border-[#101114] pb-2 text-sm font-bold">Let’s work together <FiArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}
