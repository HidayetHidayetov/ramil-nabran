"use client";

import { useState } from "react";

const links = [
  ["Bioqrafiya", "#bio"],
  ["Musiqi", "#musiqi"],
  ["Kliplər", "#klip"],
  ["Qalereya", "#qalereya"],
  ["Sosial", "#sosial"],
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menyu"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full ember-border"
      >
        <span className={`h-0.5 w-5 bg-[#ffc400] transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`h-0.5 w-5 bg-[#ffc400] transition ${open ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-5 bg-[#ffc400] transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>
      {open && (
        <div className="anim-fade-up absolute inset-x-0 top-full border-b border-[#ff6a00]/20 bg-black/95 px-4 pb-5 pt-2 backdrop-blur">
          {links.map(([t, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 font-bold text-neutral-200 last:border-0"
            >
              {t}
            </a>
          ))}
          <a href="#sosial" onClick={() => setOpen(false)} className="ember-btn mt-3 block rounded-full px-4 py-3 text-center text-sm">
            Dinlə
          </a>
        </div>
      )}
    </div>
  );
}
