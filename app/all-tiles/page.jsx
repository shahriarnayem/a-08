import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export const metadata = {
  title: "All Tiles",
};

export default function AllTilesPage() {
  return (
    <main>
      <section className="bg-[#28533f] py-20 text-white sm:py-24">
        <div className="container-shell text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-[#e5bd61] uppercase">
            Tile gallery
          </span>

          <h1 className="display-font mx-auto mt-5 max-w-3xl text-5xl font-bold sm:text-6xl">
            Explore colors, textures, and timeless materials
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Browse distinctive tile collections for kitchens,
            bathrooms, living spaces, and commercial interiors.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-full bg-white p-2 text-[#18231d]">
            <Search className="ml-4 size-5 text-[#65716a]" />

            <input
              type="search"
              placeholder="Search tiles by name..."
              className="min-w-0 flex-1 bg-transparent px-2 py-3 outline-none"
            />

            <button className="btn btn-primary rounded-full px-7">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 text-center sm:p-14">
            <h2 className="display-font text-3xl font-bold">
              Tile collections are coming into view
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#65716a]">
              The complete gallery will include searchable ceramic,
              porcelain, marble, mosaic, terracotta, and patterned
              tiles.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#28533f]"
            >
              Return to homepage

              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}