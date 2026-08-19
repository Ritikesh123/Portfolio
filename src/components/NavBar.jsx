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
    <header className="fixed left-0 top-0 z-50 w-full border-b hairline bg-[#f7f7f5]/90 backdrop-blur-md">
      <nav className="section-shell flex h-[72px] items-center justify-between">
        <Link to="home" smooth duration={700} className="cursor-pointer text-sm font-extrabold tracking-[-.04em]">
          ritikesh-raj.dev<span className="text-[#8cae31]">/</span>
        </Link>

        <div className="hidden items-center gap-8 text-xs font-bold capitalize md:flex">
          {items.map((item) => <span key={item}>{go(item)}</span>)}
          <a href="https://wa.me/918538946710" target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-full bg-[#101114] px-4 py-2 text-white">
            Let's talk <FiArrowUpRight />
          </a>
        </div>

        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="text-2xl md:hidden">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="section-shell border-t hairline py-5 md:hidden">
          <div className="flex flex-col gap-5 text-2xl font-bold capitalize">
            {items.map((item) => <span key={item}>{go(item)}</span>)}
          </div>
        </div>
      )}
    </header>
  );
}
