import AllTilesClient from "@/components/all-tiles-client";

export const metadata = {
  title: "All Tiles",
  description:
    "Browse the complete TileMuse collection and search tiles by title.",
};

export default function AllTilesPage() {
  return (
    <main>
      <section className="bg-[#245b46] p-[80px] text-white md:pb-[170px] md:pt-24">
        <div className="container-shell text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f2c55c]">
            Tile Gallery
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Explore colors, textures,
            <br className="hidden sm:block" />
            and timeless materials
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            Browse distinctive tile collections for kitchens, bathrooms,
            living spaces, and commercial interiors.
          </p>
        </div>
      </section>

      <AllTilesClient />
    </main>
  );
}