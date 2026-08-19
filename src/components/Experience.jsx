import React from 'react';

const skills = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'Redux',
  'REST & GraphQL', 'SSR / PWA / MFE', 'Tailwind / SCSS / MUI',
  'Node.js & Express', 'Agentic AI & LLMs', 'Docker / CI-CD', 'AWS / Azure',
];

const roles = [
  ['Nov 2024 — Present', 'Nimap Infotech', 'Senior Frontend Developer', 'Built scalable React.js and Next.js applications for Forbes India, CNBC TV18 and News18 Features. Developed reusable UI libraries, REST integrations, SSR and SEO improvements, caching strategies, performance tuning, code reviews and mentoring.'],
  ['Oct 2023 — Aug 2024', 'Sapphire Human Capital', 'Frontend Developer', 'Rebuilt DEI.jobs with React.js, SSR optimization and reusable UI architecture. Developed Salary Hike Calculator and HRA Exemption Tool with API integrations, responsive routing and cross-browser support.'],
  ['Aug 2021 — Mar 2023', 'Tech Mahindra', 'Web Specialist', 'Developed responsive web pages and reusable React.js components. Improved UI responsiveness and cross-browser compatibility while supporting frontend debugging, enhancements and releases.'],
];

export default function Experience() {
  return (
    <section name="experience" className="mesh-dark border-t hairline py-24 text-[#101114] md:py-32">
      <div className="section-shell grid gap-14 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow">03 / Career snapshot</p>
          <h2 className="display mt-5 text-5xl font-extrabold md:text-7xl">
            Recent<br /><span className="text-[#7d9d28]">roles.</span>
          </h2>
        </div>

        <div>
          <div className="mb-12 space-y-7">
            {roles.map(([date, company, title, detail]) => (
              <div key={company} className="grid gap-2 border-b border-[#101114]/15 pb-7 sm:grid-cols-[145px_1fr]">
                <p className="eyebrow">{date}</p>
                <div>
                  <h3 className="text-lg font-extrabold">{title} <span className="font-normal text-[#686b73]">@ {company}</span></h3>
                  <p className="mt-2 text-sm leading-6 text-[#686b73]">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-5">
            {skills.map((skill) => <span key={skill} className="text-base font-semibold text-[#303238]">{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
