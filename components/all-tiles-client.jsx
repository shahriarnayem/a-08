"use client";

import { useEffect, useState } from "react";
import TileCard from "@/components/tile-card";

export default function AllTilesClient() {
  const [search, setSearch] = useState("");
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/tiles?q=${encodeURIComponent(search)}`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load tiles");
        }

        const data = await response.json();

        setTiles(data.tiles || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setError("Unable to load tiles.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  return (
    <section className="container-shell pb-20">
      {/* Search */}
      <div className="relative z-20 -mt-[95px]">
        <div className="mx-auto max-w-3xl rounded-[24px] bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-4 rounded-[18px] bg-[#f7f5f0] px-5">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0 text-black/35"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search tiles by name..."
              className="h-[66px] w-full bg-transparent text-sm outline-none placeholder:text-black/35 md:text-base"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-sm font-bold text-[#245b46]"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-10 mt-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-eyebrow">
            Collection
          </p>

          <h2 className="section-title">
            {search ? "Search Results" : "All Tiles"}
          </h2>

          {search && (
            <p className="mt-3 text-sm text-black/50">
              Results for{" "}
              <span className="font-bold text-black">
                “{search}”
              </span>
            </p>
          )}
        </div>

        {!loading && !error && (
          <p className="text-sm font-semibold text-black/45">
            {tiles.length} {tiles.length === 1 ? "tile" : "tiles"}
          </p>
        )}
      </div>

      {/* Loader */}
      {loading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-[24px] bg-white"
            >
              <div className="aspect-[4/3] animate-pulse bg-black/10" />

              <div className="p-5">
                <div className="h-5 w-24 animate-pulse rounded bg-black/10" />
                <div className="mt-5 h-6 w-3/4 animate-pulse rounded bg-black/10" />
                <div className="mt-4 h-4 w-full animate-pulse rounded bg-black/10" />
                <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-black/10" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="rounded-[24px] border border-red-200 bg-red-50 p-12 text-center">
          <h3 className="text-xl font-bold text-red-700">
            Unable to load tiles
          </h3>

          <p className="mt-2 text-red-600">
            {error}
          </p>
        </div>
      )}

      {/* Gallery */}
      {!loading && !error && tiles.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tiles.map((tile) => (
            <TileCard
              key={tile.id}
              tile={tile}
            />
          ))}
        </div>
      )}

      {/* No results */}
      {!loading && !error && tiles.length === 0 && (
        <div className="rounded-[28px] border border-dashed border-black/20 bg-white px-6 py-20 text-center">
          <h3 className="text-2xl font-black">
            No tiles found
          </h3>

          <p className="mt-3 text-black/50">
            No tile matches “{search}”.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-6 rounded-full bg-[#245b46] px-7 py-3 text-sm font-bold text-white"
          >
            Show All Tiles
          </button>
        </div>
      )}
    </section>
  );
}