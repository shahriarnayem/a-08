import tiles from "@/data/tiles.json";

export async function GET(request, { params }) {
  const { id } = await params;

  const tile = tiles.find(
    (item) => item.id === id
  );

  if (!tile) {
    return Response.json(
      {
        message: "Tile not found",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(tile);
}