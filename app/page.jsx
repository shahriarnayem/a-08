import Link from "next/link";

import FeaturedTiles from "@/components/featured-tiles";
import Marquee from "@/components/marquee";
import StyleSlider from "@/components/style-slider";

export default function HomePage() {
  return (
    <main>

      {/* =========================
          HERO
      ========================= */}

      <section className="container-shell py-5 sm:py-7">

        <div className="relative min-h-[540px] overflow-hidden rounded-[28px] md:min-h-[650px]">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
            alt="Premium tiled interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[540px] items-center px-6 py-16 sm:px-10 md:min-h-[650px] md:px-16 lg:px-20">

            <div className="max-w-3xl text-white">

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/65 sm:text-sm">
                Curated Tile Gallery
              </p>

              <h1 className="mt-5 text-[42px] font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                Discover Your
                <br />
                Perfect Aesthetic
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Explore ceramic, marble, mosaic
                and decorative surfaces selected
                to inspire beautiful modern
                spaces.
              </p>

              <Link
                href="/all-tiles"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#173f35] transition hover:bg-[#ebe4d7]"
              >
                Browse Now

                <span>
                  →
                </span>
              </Link>

            </div>

          </div>

          {/* Small Badge */}
          <div className="absolute bottom-6 right-6 hidden rounded-2xl border border-white/20 bg-black/30 px-5 py-4 text-white backdrop-blur-md md:block">

            <p className="text-xs uppercase tracking-[0.18em] text-white/50">
              Collection
            </p>

            <p className="mt-1 font-bold">
              Modern Surfaces
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          MARQUEE
      ========================= */}

      <Marquee />


      {/* =========================
          FEATURED TILES
      ========================= */}

      <section className="container-shell section-space">

        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="section-eyebrow">
              Curated Selection
            </p>

            <h2 className="section-title">
              Featured Tiles
            </h2>

            <p className="section-description">
              Explore four standout designs from
              our latest tile collection.
            </p>

          </div>

          <Link
            href="/all-tiles"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#173f35]"
          >
            View All Tiles
            <span>→</span>
          </Link>

        </div>

        <FeaturedTiles />

      </section>

{/* =========================
    SWIPER COLLECTION
========================= */}

<section className="bg-[#e9e1d3]">

  <div className="container-shell section-space">

    <div className="mb-10">

      <p className="section-eyebrow">
        Explore More
      </p>

      <h2 className="section-title">
        Discover Different Styles
      </h2>

      <p className="section-description">
        Swipe through materials, colors and
        decorative styles from our tile collection.
      </p>

    </div>

    <StyleSlider />

  </div>

</section>

      {/* =========================
          COLLECTION SECTION
      ========================= */}

      <section className="container-shell pb-20">

        <div className="grid overflow-hidden rounded-[30px] bg-[#e9e1d3] lg:grid-cols-2">

          {/* Content */}
          <div className="p-8 sm:p-10 lg:p-14">

            <p className="section-eyebrow">
              Designed To Inspire
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-5xl">
              Every surface can change the
              feeling of a room.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-black/55">
              TileMuse brings together different
              materials, patterns and visual
              styles so you can easily discover
              ideas for residential and
              commercial interiors.
            </p>

            <Link
              href="/all-tiles"
              className="mt-8 inline-flex rounded-full bg-[#173f35] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#102e27]"
            >
              Explore Collection
            </Link>

          </div>


          {/* Image */}
          <div className="min-h-[380px]">

            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
              alt="Modern tiled interior"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </section>

    </main>
  );
}