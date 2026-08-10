import Link from "next/link";
import { notFound } from "next/navigation";
import tiles from "@/data/tiles.json";

export default async function TileDetailsPage({
  params,
}) {
  const { id } = await params;

  const tile = tiles.find(
    (item) => item.id === id
  );

  if (!tile) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-block font-semibold text-[#173f35]"
        >
          ← Back Home
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-gray-100">
            <img
              src={tile.image}
              alt={tile.title}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold capitalize">
              {tile.category}
            </span>

            <h1 className="mt-5 text-4xl font-black md:text-5xl">
              {tile.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-black/60">
              {tile.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <Info
                title="Material"
                value={tile.material}
              />

              <Info
                title="Dimensions"
                value={tile.dimensions}
              />

              <Info
                title="Creator"
                value={tile.creator}
              />

              <Info
                title="Stock"
                value={
                  tile.inStock
                    ? "In Stock"
                    : "Out of Stock"
                }
              />
            </div>

            <div className="mt-8 border-t border-black/10 pt-8">
              <p className="text-sm text-black/40">
                Price
              </p>

              <p className="mt-1 text-4xl font-black">
                ${tile.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ title, value }) {
  return (
    <div>
      <p className="text-sm text-black/40">
        {title}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>
    </div>
  );
}