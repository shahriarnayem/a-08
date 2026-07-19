import Link from "next/link";
import {
  ArrowRight,
  Gem,
  Grid2X2,
  Palette,
  Ruler,
  Sparkles,
} from "lucide-react";

const collections = [
  {
    name: "Ocean Ceramic",
    category: "Ceramic",
    description:
      "Glazed blue surfaces inspired by calm coastal interiors.",
    style:
      "linear-gradient(135deg, #c8e7e5 0%, #477f87 50%, #173e47 100%)",
  },
  {
    name: "Terracotta Clay",
    category: "Terracotta",
    description:
      "Warm earthy tones crafted for welcoming living spaces.",
    style:
      "linear-gradient(135deg, #e4b092 0%, #bb674b 50%, #74382c 100%)",
  },
  {
    name: "Forest Mosaic",
    category: "Mosaic",
    description:
      "Natural green patterns with a rich handcrafted character.",
    style:
      "linear-gradient(135deg, #c6d4b3 0%, #6e8c6a 50%, #294c3c 100%)",
  },
  {
    name: "Marble Gold",
    category: "Marble",
    description:
      "Soft marble texture elevated with warm golden details.",
    style:
      "linear-gradient(135deg, #f4efe3 0%, #cfc1a1 52%, #947a43 100%)",
  },
];

const benefits = [
  {
    icon: Palette,
    title: "Curated Styles",
    description:
      "Explore carefully selected colors, textures, and patterns for every interior mood.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description:
      "Discover ceramic, marble, porcelain, mosaic, and natural stone collections.",
  },
  {
    icon: Ruler,
    title: "Design Details",
    description:
      "Review tile dimensions, materials, finishes, pricing, and availability.",
  },
];

const categories = [
  "Ceramic",
  "Porcelain",
  "Marble",
  "Mosaic",
  "Terracotta",
  "Patterned",
];

export default function HomePage() {
  return (
    <main>
      <section className="pattern-grid overflow-hidden bg-[#28533f] text-white">
        <div className="container-shell grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <Sparkles className="size-4 text-[#e5bd61]" />

              Curated tiles for inspired spaces
            </div>

            <h1 className="display-font max-w-3xl text-5xl leading-[1.02] font-bold sm:text-6xl lg:text-7xl">
              Discover your perfect{" "}
              <span className="text-[#e5bd61]">aesthetic.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Explore distinctive ceramic, marble, mosaic, and
              patterned tiles selected to transform kitchens,
              bathrooms, living spaces, and commercial interiors.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/all-tiles"
                className="btn rounded-full border-white bg-white px-7 text-[#18231d]"
              >
                Browse Tiles

                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#collections"
                className="btn rounded-full border-white/30 bg-transparent px-7 text-white hover:border-white hover:bg-white hover:text-[#18231d]"
              >
                View Collections
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/70">
              <span>Premium finishes</span>
              <span>Modern patterns</span>
              <span>Timeless materials</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:p-6">
            <div className="grid grid-cols-2 gap-4">
              {collections.map((tile, index) => (
                <article
                  key={tile.name}
                  className={`overflow-hidden rounded-[1.5rem] bg-white p-3 text-[#18231d] ${
                    index === 0 ? "translate-y-6" : ""
                  } ${index === 3 ? "-translate-y-6" : ""}`}
                >
                  <div
                    className="aspect-square rounded-[1.1rem]"
                    style={{ background: tile.style }}
                  />

                  <div className="px-2 pt-4 pb-2">
                    <p className="text-xs font-bold tracking-[0.14em] text-[#65716a] uppercase">
                      {tile.category}
                    </p>

                    <h2 className="display-font mt-1 text-lg font-bold">
                      {tile.name}
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-black/10 bg-[#ebe5d7] py-4">
        <div className="animate-marquee flex min-w-max items-center text-sm font-semibold tracking-wide text-[#28533f]">
          <span className="px-6">
            New Arrivals: Ocean Ceramic Tile
          </span>

          <span>•</span>

          <span className="px-6">
            Weekly Feature: Modern Geometric Patterns
          </span>

          <span>•</span>

          <span className="px-6">
            Explore Marble, Mosaic, Porcelain and Terracotta
          </span>

          <span>•</span>

          <span className="px-6">
            Find the Perfect Tile for Your Space
          </span>
        </div>
      </section>

      <section id="collections" className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold tracking-[0.2em] text-[#28533f] uppercase">
                Featured collection
              </span>

              <h2 className="display-font mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
                Materials made to shape beautiful interiors
              </h2>
            </div>

            <Link
              href="/all-tiles"
              className="inline-flex items-center gap-2 font-bold text-[#28533f]"
            >
              Explore all tiles

              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((tile) => (
              <article
                key={tile.name}
                className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white"
              >
                <div className="overflow-hidden p-3">
                  <div
                    className="aspect-[4/5] rounded-[1.35rem] transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ background: tile.style }}
                  />
                </div>

                <div className="p-6 pt-3">
                  <span className="text-xs font-bold tracking-[0.16em] text-[#28533f] uppercase">
                    {tile.category}
                  </span>

                  <h3 className="display-font mt-2 text-2xl font-bold">
                    {tile.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#65716a]">
                    {tile.description}
                  </p>

                  <Link
                    href="/all-tiles"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[#28533f]"
                  >
                    View Details

                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe9dc] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-[#28533f] uppercase">
              Find your finish
            </span>

            <h2 className="display-font mt-4 text-4xl font-bold sm:text-5xl">
              Explore tiles by material
            </h2>

            <p className="mt-5 leading-7 text-[#65716a]">
              Browse tile categories designed for modern,
              traditional, minimal, and expressive interiors.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href="/all-tiles"
                className="rounded-full border border-black/10 bg-white px-6 py-3 font-semibold hover:border-[#28533f] hover:bg-[#28533f] hover:text-white"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="surface-card rounded-[1.75rem] p-7"
                >
                  <div className="grid size-13 place-items-center rounded-2xl bg-[#28533f] text-white">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="display-font mt-7 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#65716a]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] bg-[#18231d] text-white">
            <div className="pattern-grid grid gap-8 px-7 py-14 sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16">
              <div>
                <div className="flex items-center gap-2 text-[#e5bd61]">
                  <Grid2X2 className="size-5" />

                  <span className="text-sm font-bold tracking-[0.16em] uppercase">
                    Build your inspiration board
                  </span>
                </div>

                <h2 className="display-font mt-5 max-w-2xl text-4xl font-bold sm:text-5xl">
                  Find a tile that feels made for your space.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-white/70">
                  Explore the full gallery and compare colors,
                  materials, dimensions, patterns, and finishes.
                </p>
              </div>

              <Link
                href="/all-tiles"
                className="btn rounded-full border-white bg-white px-8 text-[#18231d]"
              >
                Browse Gallery

                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}