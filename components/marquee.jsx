export default function Marquee() {
  const text =
    "New Arrivals: Classic Stone Grid   •   Weekly Feature: Modern Geometric Patterns   •   Join the Community   •   Explore Premium Tile Inspiration   •   Discover Your Perfect Surface";

  return (
    <section className="overflow-hidden bg-[#d9c7aa] py-4">
      <div className="marquee-track flex w-max whitespace-nowrap">

        <p className="px-8 text-sm font-bold tracking-wide text-[#17201d]">
          {text}
        </p>

        <p className="px-8 text-sm font-bold tracking-wide text-[#17201d]">
          {text}
        </p>

      </div>
    </section>
  );
}