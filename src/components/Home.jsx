import React from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-scroll';
import resume from '../assets/Ritikesh_Raj.pdf';

const stats = [
  ['5+', 'years building frontend products'],
  ['4', 'core frontend strengths'],
  ['3', 'companies across my career'],
];

export default function Home() {
  return (
    <section id="home" name="home" className="pt-32 md:pt-44">
      <div className="section-shell">
        <p className="eyebrow">Hello, I’m Ritikesh Raj <span className="text-lg">👋</span></p>
        <h1 className="display mt-7 max-w-5xl text-[clamp(3.2rem,8vw,7.5rem)] font-extrabold">I build frontend products with strong UI/UX and scalable systems.</h1>
        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#686b73]">
          <span>Senior ReactJS Developer</span><span>·</span><span>React.js</span><span>·</span><span>Next.js</span><span>·</span><span>TypeScript</span><span>·</span><span>Agentic AI</span>
        </div>
          <div className="mt-10 flex flex-wrap gap-3"><Link to="work" smooth duration={700} className="flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#101114] transition hover:-translate-y-1">See selected work <FiArrowUpRight /></Link><a href={resume} download className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold transition hover:bg-white/10">Download CV</a></div>
        <div className="mt-8 flex gap-5 text-xl"><a aria-label="LinkedIn" href="https://www.linkedin.com/in/ritikesh-raj-894aa3157/" target="_blank" rel="noreferrer"><FiLinkedin /></a><a aria-label="GitHub" href="https://github.com/Ritikesh123" target="_blank" rel="noreferrer"><FiGithub /></a><a href="https://wa.me/918538946710" target="_blank" rel="noreferrer" className="text-sm font-bold">WhatsApp ↗</a></div>

        <div className="mt-24 grid border-y hairline sm:grid-cols-3">
          {stats.map(([value, label]) => <div key={label} className="border-b hairline py-6 sm:border-b-0 sm:border-r sm:px-6 first:sm:pl-0 last:border-0"><p className="text-4xl font-extrabold tracking-[-.06em]">{value}</p><p className="mt-2 max-w-[170px] text-sm leading-5 text-[#686b73]">{label}</p></div>)}
        </div>
      </div>
    </section>
  );
}
