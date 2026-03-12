"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 mix-blend-difference">
        <Link href="/" className="font-bebas text-xl tracking-widest text-[#f0ede6]">
          {siteConfig.initials}
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[#f0ede6] backdrop-blur-md transition-colors md:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-4 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-4 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#f0ede6] opacity-60 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed left-4 right-4 top-20 z-50 rounded-[1.75rem] border border-[#d8b38a]/10 bg-[linear-gradient(180deg,rgba(24,20,18,0.96),rgba(14,12,11,0.9))] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-3 pointer-events-none opacity-0"
        }`}
      >
        <div className="mb-2 flex items-center justify-between px-2">
          <span className="font-mono text-[0.52rem] uppercase tracking-[0.28em] text-[#d8b38a]/65">
            Navigation
          </span>
          <span className="font-mono text-[0.52rem] uppercase tracking-[0.2em] text-[#f0ede6]/35">
            Menu
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#f0ede6]/82 transition-colors hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
