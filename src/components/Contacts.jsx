import React from 'react';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';

export default function Contacts() {
  return (
    <footer name="contact" className="mesh-dark my-6 py-24 text-white md:my-8 md:py-32">
      <div className="section-shell">
        <p className="eyebrow">04 / Contact</p>
        <h2 className="display mt-6 max-w-4xl text-6xl font-extrabold md:text-8xl">Have a good<br />idea? <span className="text-[#ff8299]">Let’s talk.</span></h2>
        <div className="mt-12 flex flex-wrap gap-3"><a href="https://wa.me/918538946710" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#101114] transition hover:-translate-y-1">Chat on WhatsApp <FiMail /></a><a href="https://wa.me/918538946710" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-white/20 px-6 py-4 text-sm font-bold transition hover:bg-white/10">+91 85389 46710</a></div>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 text-xs font-bold md:flex-row"><span>© {new Date().getFullYear()} Ritikesh Raj · Patna, Bihar</span><span className="flex gap-5"><a href="https://github.com/Ritikesh123" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight className="inline" /></a><a href="https://www.linkedin.com/in/ritikesh-raj-894aa3157/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight className="inline" /></a></span></div>
      </div>
    </footer>
  );
}
