import Link from "next/link";
import { Logo } from "./logo";

const tileLinks = [
  {
    label: "Ceramic Tiles",
    href: "/all-tiles",
  },
  {
    label: "Marble Tiles",
    href: "/all-tiles",
  },
  {
    label: "Mosaic Tiles",
    href: "/all-tiles",
  },
  {
    label: "Patterned Tiles",
    href: "/all-tiles",
  },
];

const usefulLinks = [
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
  {
    label: "Login",
    href: "/login",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    shortLabel: "IG",
    href: "https://www.instagram.com",
  },
  {
    label: "Pinterest",
    shortLabel: "PI",
    href: "https://www.pinterest.com",
  },
  {
    label: "Facebook",
    shortLabel: "FB",
    href: "https://www.facebook.com",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#18231d] text-white">
      <div className="pattern-grid">
        <div className="container-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo light />

            <p className="mt-6 max-w-sm leading-7 text-white/65">
              A curated gallery of tile materials, colors, textures,
              and patterns created to inspire distinctive interiors.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit TileMuse on ${social.label}`}
                  title={social.label}
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-xs font-bold tracking-wide text-white hover:border-white hover:bg-white hover:text-[#18231d]"
                >
                  {social.shortLabel}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="display-font text-xl font-bold">
              Tile Collections
            </h2>

            <ul className="mt-6 space-y-4 text-sm text-white/65">
              {tileLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#e5bd61]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="display-font text-xl font-bold">
              Quick Links
            </h2>

            <ul className="mt-6 space-y-4 text-sm text-white/65">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#e5bd61]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="display-font text-xl font-bold">
              Contact Us
            </h2>

            <div className="mt-6 space-y-6 text-sm text-white/65">
              <div>
                <p className="mb-2 font-semibold text-white">
                  Visit our gallery
                </p>

                <address className="leading-6 not-italic">
                  42 Artisan Avenue
                  <br />
                  Design District, New York
                </address>
              </div>

              <div>
                <p className="mb-2 font-semibold text-white">
                  Call us
                </p>

                <a
                  href="tel:+12125550189"
                  className="hover:text-[#e5bd61]"
                >
                  +1 212 555 0189
                </a>
              </div>

              <div>
                <p className="mb-2 font-semibold text-white">
                  Email us
                </p>

                <a
                  href="mailto:hello@tilemuse.com"
                  className="break-all hover:text-[#e5bd61]"
                >
                  hello@tilemuse.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-shell flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-white/50 sm:flex-row sm:text-left">
            <p>
              © {currentYear} TileMuse. All rights reserved.
            </p>

            <p>Curated tiles for inspired spaces.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}