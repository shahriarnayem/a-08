import tiles from "@/data/tiles.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query =
    searchParams.get("q")?.trim().toLowerCase() || "";

  const featured =
    searchParams.get("featured") === "true";

  const limit =
    Number(searchParams.get("limit")) || 0;

  let results = [...tiles];

  // Search by title
  if (query) {
    results = results.filter((tile) =>
      tile.title.toLowerCase().includes(query)
    );
  }

  // Sort featured tiles
  if (featured) {
    results.sort(
      (a, b) =>
        (a.featuredRank || 999) -
        (b.featuredRank || 999)
    );
  }

  // Limit results
  if (limit > 0) {
    results = results.slice(0, limit);
  }

  return Response.json({
    tiles: results,
    total: results.length,
  });
}