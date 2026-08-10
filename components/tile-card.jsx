import Link from "next/link";

export default function TileCard({ tile }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-sm">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={tile.image}
          alt={tile.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#f0ede7] px-3 py-1 text-xs font-semibold capitalize">
            {tile.category}
          </span>

          <span
            className={
              tile.inStock
                ? "text-xs font-semibold text-green-600"
                : "text-xs font-semibold text-red-500"
            }
          >
            {tile.inStock
              ? "In Stock"
              : "Out of Stock"}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-bold">
          {tile.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/60">
          {tile.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-xl font-bold">
            ${tile.price}
          </p>

          <Link
            href={`/tile/${tile.id}`}
            className="rounded-full bg-[#173f35] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102e27]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}