import Link from "next/link";

export default function TileCard({ tile }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-black/10 bg-white">
      <div className="aspect-[4/3] overflow-hidden bg-base-200">
        <img
          src={tile.image}
          alt={tile.title}
          className="tile-image transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="badge badge-outline capitalize">
            {tile.category}
          </span>

          <span
            className={
              tile.inStock
                ? "text-xs font-semibold text-success"
                : "text-xs font-semibold text-error"
            }
          >
            {tile.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>

        <h3 className="text-xl font-bold">
          {tile.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/60">
          {tile.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <strong className="text-lg">
            ${tile.price}
          </strong>

          <Link
            href={`/tile/${tile.id}`}
            className="btn btn-sm rounded-full bg-[#173f35] text-white hover:bg-[#102e27]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}