import Link from "next/link";
import {
  notFound,
  redirect,
} from "next/navigation";

import tiles from "@/data/tiles.json";

import { getServerSession } from "@/lib/session";


export async function generateMetadata({
  params,
}) {
  const { id } = await params;

  const tile = tiles.find(
    (item) => item.id === id
  );

  if (!tile) {
    return {
      title: "Tile Not Found",
    };
  }

  return {
    title: tile.title,
    description: tile.description,
  };
}


export default async function TileDetailsPage({
  params,
}) {
  const { id } = await params;


  const session =
    await getServerSession();

  if (!session) {
    redirect(
      `/login?redirect=/tile/${id}`
    );
  }

  const tile = tiles.find(
    (item) => item.id === id
  );


  if (!tile) {
    notFound();
  }

  return (
    <main>



      <section className="container-shell py-10 md:py-16">

        <Link
          href="/all-tiles"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#245b46] transition hover:opacity-70"
        >
          <span>←</span>

          Back to All Tiles
        </Link>


        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">



          <div className="overflow-hidden rounded-[30px] bg-white shadow-sm">

            <img
              src={tile.image}
              alt={tile.title}
              className="aspect-square h-full w-full object-cover"
            />

          </div>




          <div>


            <div className="flex flex-wrap items-center gap-3">

              <span className="rounded-full bg-[#e9e1d3] px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#245b46]">
                {tile.category}
              </span>


              <span
                className={`rounded-full px-4 py-2 text-xs font-bold ${
                  tile.inStock
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {tile.inStock
                  ? "In Stock"
                  : "Out of Stock"}
              </span>

            </div>


  
            <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {tile.title}
            </h1>


            <div className="mt-5 flex items-center gap-2 text-sm text-black/50">

              <span>
                Created by
              </span>

              <span className="font-bold text-[#17201d]">
                {tile.creator}
              </span>

            </div>


            <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
              {tile.styleDescription}
            </p>



            <div className="mt-7">

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                Style Tags
              </p>


              <div className="flex flex-wrap gap-2">

                {tile.tags?.map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/65"
                    >
                      {tag}
                    </span>
                  )
                )}

              </div>

            </div>


            {/* Divider */}
            <div className="my-8 border-t border-black/10" />



            <div className="grid grid-cols-2 gap-5">

              <DetailItem
                label="Material"
                value={tile.material}
              />


              <DetailItem
                label="Dimensions"
                value={tile.dimensions}
              />


              <DetailItem
                label="Category"
                value={tile.category}
              />


              <DetailItem
                label="Availability"
                value={
                  tile.inStock
                    ? "Available"
                    : "Currently unavailable"
                }
              />

            </div>


            {/* Divider */}
            <div className="my-8 border-t border-black/10" />




            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                  Price
                </p>

                <p className="mt-1 text-4xl font-black tracking-[-0.04em] text-[#17201d]">
                  ${tile.price}
                </p>

              </div>


              <Link
                href="/all-tiles"
                className="inline-flex w-fit rounded-full bg-[#245b46] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#173f35]"
              >
                Browse More Tiles
              </Link>

            </div>

          </div>

        </div>

      </section>




      <section className="container-shell pb-20">

        <div className="rounded-[30px] bg-[#245b46] px-7 py-10 text-white md:px-12 md:py-14">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2c55c]">
            About This Tile
          </p>


          <div className="mt-5 flex flex-col gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] md:text-4xl">
              Designed for beautiful,
              expressive interiors.
            </h2>


            <p className="leading-8 text-white/65">
              {tile.description}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}


function DetailItem({
  label,
  value,
}) {
  return (
    <div>

      <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/35">
        {label}
      </p>

      <p className="mt-2 font-bold capitalize text-[#17201d]">
        {value}
      </p>

    </div>
  );
}