"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/logo";

const navigationItems = [
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

function isActiveRoute(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f4ec]/90 backdrop-blur-xl">
        <div className="container-shell flex min-h-20 items-center justify-between gap-6">
          <Logo />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-2 lg:flex"
          >
            {navigationItems.map((item) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-5 py-3 text-sm font-semibold ${
                    active
                      ? "bg-[#28533f] text-white"
                      : "text-[#3f4b44] hover:bg-[#ebe5d7] hover:text-[#28533f]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className={`btn rounded-full px-7 ${
                pathname === "/login"
                  ? "border-[#28533f] bg-[#28533f] text-white"
                  : "btn-outline"
              }`}
            >
              <UserRound className="size-4" />

              Login
            </Link>
          </div>

          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="grid size-12 place-items-center rounded-2xl border border-black/10 bg-white text-[#18231d] lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0"
            onClick={() => setMobileMenuOpen(false)}
          />

          <aside className="absolute top-20 right-0 bottom-0 w-[min(88%,380px)] overflow-y-auto border-l border-black/10 bg-[#f7f4ec] p-6 shadow-2xl">
            <div className="rounded-[1.75rem] bg-[#28533f] p-6 text-white">
              <p className="text-xs font-bold tracking-[0.18em] text-white/65 uppercase">
                Explore TileMuse
              </p>

              <h2 className="display-font mt-3 text-3xl font-bold">
                Find a finish that completes your space.
              </h2>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="mt-6 flex flex-col gap-2"
            >
              {navigationItems.map((item) => {
                const active = isActiveRoute(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex min-h-14 items-center justify-between rounded-2xl px-5 font-semibold ${
                      active
                        ? "bg-[#28533f] text-white"
                        : "border border-black/10 bg-white text-[#18231d] hover:border-[#28533f]"
                    }`}
                  >
                    {item.label}

                    <span aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/login"
              className="btn btn-primary mt-6 w-full rounded-full"
            >
              <UserRound className="size-4" />

              Login
            </Link>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-sm leading-6 text-[#65716a]">
                Explore ceramic, marble, porcelain, mosaic, and
                handcrafted tile collections.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}