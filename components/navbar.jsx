"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "All Tiles",
      href: "/all-tiles",
    },
    {
      label: "My Profile",
      href: "/my-profile",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f0]/95 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between">

        {/* Plain text logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-[-0.05em] text-[#17201d]"
        >
          TileMuse
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition ${
                  active
                    ? "text-[#173f35]"
                    : "text-black/55 hover:text-[#173f35]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Login */}
        <Link
          href="/login"
          className="hidden rounded-full bg-[#173f35] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#102e27] md:inline-flex"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 md:hidden"
          aria-label="Toggle Menu"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-black transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-black transition ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-black transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-black/10 bg-[#f7f5f0] md:hidden">
          <nav className="container-shell flex flex-col py-5">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-4 font-semibold text-black/65"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-[#173f35] px-6 py-3 text-center font-bold text-white"
            >
              Login
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}