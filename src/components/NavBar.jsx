import React, { useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const items = ['about', 'work', 'experience', 'contact'];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const go = (name) => (
    <Link
      to={name}
      smooth
      duration={700}
      onClick={() => setOpen(false)}
      className="cursor-pointer"
    >
      {name}
    </Link>
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b hairline bg-[#090b10]/90 backdrop-blur-md lg:h-screen lg:w-[255px] lg:border-b-0 lg:border-r">
      <nav className="section-shell flex h-[72px] items-center justify-between lg:flex-col lg:items-stretch lg:px-3 lg:py-8">
        <Link to="home" smooth duration={700} className="cursor-pointer text-sm font-extrabold tracking-[-.04em] text-white lg:mb-8 lg:px-3">
          ritikesh-raj.dev<span className="text-[#ff8299]">/</span>
        </Link>

        <div className="hidden items-center gap-8 text-xs font-bold capitalize text-[#aeb0b9] md:flex lg:flex-col lg:items-stretch lg:gap-2">
          {items.map((item) => <span key={item} className="rounded-lg px-3 py-3 transition hover:bg-white/10 hover:text-white">{go(item)}</span>)}
          <a href="https://wa.me/918538946710" target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-1 rounded-lg bg-white/10 px-3 py-3 text-white hover:bg-white/15">
            Let's talk <FiArrowUpRight />
          </a>
        </div>

        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="text-2xl text-white md:hidden">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="section-shell border-t hairline bg-[#090b10] py-5 text-white md:hidden">
          <div className="flex flex-col gap-5 text-2xl font-bold capitalize">
            {items.map((item) => <span key={item}>{go(item)}</span>)}
          </div>
        </div>
      )}
    </header>
  );
}
