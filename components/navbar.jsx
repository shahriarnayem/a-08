"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const {
    data: session,
    isPending,
  } = authClient.useSession();

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
      href: session
        ? "/my-profile"
        : "/login",
    },
  ];

  async function handleLogout() {
    try {
      setLogoutLoading(true);

      await authClient.signOut();

      setOpen(false);

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(
        "Logout failed:",
        error
      );
    } finally {
      setLogoutLoading(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f0]/95 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between">

        {/* Plain Text Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-[-0.05em] text-[#17201d]"
        >
          TileMuse
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          {links.map((link) => {
            const active =
              pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition ${
                  active
                    ? "text-[#245b46]"
                    : "text-black/55 hover:text-[#245b46]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

        </nav>


        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Loading Session */}
          {isPending && (
            <div className="h-10 w-24 animate-pulse rounded-full bg-black/10" />
          )}


          {/* Logged In */}
          {!isPending && session && (
            <>
              <Link
                href="/my-profile"
                className="flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-4 transition hover:bg-[#eeeae2]"
              >

                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#245b46] text-sm font-black uppercase text-white">
                    {session.user.name
                      ?.charAt(0)
                      ?.toUpperCase() || "U"}
                  </div>
                )}

                <span className="max-w-[120px] truncate text-sm font-bold text-[#17201d]">
                  {session.user.name}
                </span>

              </Link>


              <button
                type="button"
                onClick={handleLogout}
                disabled={logoutLoading}
                className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-bold text-[#17201d] transition hover:border-[#245b46] hover:text-[#245b46] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {logoutLoading
                  ? "Logging out..."
                  : "Logout"}
              </button>
            </>
          )}


          {/* Logged Out */}
          {!isPending && !session && (
            <Link
              href="/login"
              className="rounded-full bg-[#173f35] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#102e27]"
            >
              Login
            </Link>
          )}

        </div>


        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() =>
            setOpen(!open)
          }
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="relative block h-4 w-5">

            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-black transition ${
                open
                  ? "translate-y-[7px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-black transition ${
                open
                  ? "opacity-0"
                  : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-black transition ${
                open
                  ? "-translate-y-[7px] -rotate-45"
                  : ""
              }`}
            />

          </span>
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-black/10 bg-[#f7f5f0] md:hidden">

          <div className="container-shell py-5">

            {session && (
              <Link
                href="/my-profile"
                onClick={() =>
                  setOpen(false)
                }
                className="mb-4 flex items-center gap-3 rounded-[18px] bg-white p-3"
              >

                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#245b46] font-black text-white">
                    {session.user.name
                      ?.charAt(0)
                      ?.toUpperCase() || "U"}
                  </div>
                )}

                <div className="min-w-0">
                  <p className="truncate font-bold">
                    {session.user.name}
                  </p>

                  <p className="truncate text-xs text-black/45">
                    {session.user.email}
                  </p>
                </div>

              </Link>
            )}


            <nav className="flex flex-col">

              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="border-b border-black/5 py-4 font-semibold text-black/65"
                >
                  {link.label}
                </Link>
              ))}

            </nav>


            {!isPending &&
              !session && (
                <Link
                  href="/login"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="mt-5 block rounded-full bg-[#173f35] px-6 py-3 text-center font-bold text-white"
                >
                  Login
                </Link>
              )}


            {!isPending &&
              session && (
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={logoutLoading}
                  className="mt-5 w-full rounded-full bg-[#173f35] px-6 py-3 text-center font-bold text-white disabled:opacity-50"
                >
                  {logoutLoading
                    ? "Logging out..."
                    : "Logout"}
                </button>
              )}

          </div>

        </div>
      )}

    </header>
  );
}