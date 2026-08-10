"use client";

import {
  useEffect,
  useState,
} from "react";

import TileCard from "@/components/tile-card";

export default function FeaturedTiles() {
  const [tiles, setTiles] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function getFeaturedTiles() {
      try {
        const response =
          await fetch(
            "/api/tiles?featured=true&limit=4"
          );

        if (!response.ok) {
          throw new Error(
            "Failed to load featured tiles"
          );
        }

        const data =
          await response.json();

        setTiles(
          data.tiles || []
        );
      } catch (error) {
        console.error(error);

        setError(
          "Unable to load featured tiles."
        );
      } finally {
        setLoading(false);
      }
    }

    getFeaturedTiles();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {[1, 2, 3, 4].map(
          (item) => (
            <div
              key={item}
              className="h-[420px] animate-pulse rounded-[24px] bg-black/10"
            />
          )
        )}

      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {tiles.map((tile) => (
        <TileCard
          key={tile.id}
          tile={tile}
        />
      ))}

    </div>
  );
}