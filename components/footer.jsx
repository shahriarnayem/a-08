import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#102e27] text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="text-2xl font-black tracking-[-0.05em] text-white"
          >
            TileMuse
          </Link>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
            Discover carefully selected tile designs for modern, timeless
            and expressive interiors.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            Explore
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/"
              className="text-white/75 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/all-tiles"
              className="text-white/75 transition hover:text-white"
            >
              All Tiles
            </Link>

            <Link
              href="/my-profile"
              className="text-white/75 transition hover:text-white"
            >
              My Profile
            </Link>

            <Link
              href="/login"
              className="text-white/75 transition hover:text-white"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            Contact Us
          </h3>

          <div className="mt-5 space-y-3 text-sm text-white/70">
            <p>hello@tilemuse.com</p>
            <p>+1 555 014 8820</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TileMuse. All rights reserved.</p>

          <p>Tiles Gallery Project</p>
        </div>
      </div>
    </footer>
  );
}