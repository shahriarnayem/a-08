import {
  ArrowRight,
  CheckCircle2,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "JSON Tile Gallery",
    description:
      "All tile information will be loaded from a local JSON data file.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "MongoDB will only store users, accounts, sessions, and profile information.",
  },
  {
    icon: Sparkles,
    title: "Unique Experience",
    description:
      "The finished website will be responsive, searchable, and visually polished.",
  },
];

const previewTiles = [
  {
    name: "Ocean Ceramic",
    style:
      "linear-gradient(135deg, #c8e7e5 0%, #477f87 50%, #173e47 100%)",
  },
  {
    name: "Terracotta Clay",
    style:
      "linear-gradient(135deg, #e4b092 0%, #bb674b 50%, #74382c 100%)",
  },
  {
    name: "Forest Mosaic",
    style:
      "linear-gradient(135deg, #c6d4b3 0%, #6e8c6a 50%, #294c3c 100%)",
  },
  {
    name: "Marble Gold",
    style:
      "linear-gradient(135deg, #f4efe3 0%, #cfc1a1 52%, #947a43 100%)",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-black/10 bg-white/70 backdrop-blur-xl">
        <div className="container-shell flex min-h-20 items-center justify-between">
          <a
            href="/"
            className="display-font flex items-center gap-3 text-2xl font-bold"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-[#28533f] text-white">
              T
            </span>

            TileMuse
          </a>

          <span className="badge badge-outline badge-lg">
            Step 1 of 10
          </span>
        </div>
      </header>

      <section className="pattern-grid overflow-hidden bg-[#28533f] text-white">
        <div className="container-shell grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <CheckCircle2 className="size-4 text-[#e5bd61]" />

              Project setup completed
            </div>

            <h1 className="display-font max-w-3xl text-5xl leading-[1.02] font-bold sm:text-6xl lg:text-7xl">
              Discover your perfect{" "}
              <span className="text-[#e5bd61]">aesthetic.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              TileMuse is a curated gallery for discovering ceramic,
              marble, mosaic, and decorative tiles for beautiful
              interiors.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#project-preview" className="btn bg-white text-[#18231d]">
                View project preview

                <ArrowRight className="size-4" />
              </a>

              <span className="btn border-white/25 bg-transparent text-white">
                Next.js App Router
              </span>
            </div>
          </div>

          <div
            id="project-preview"
            className="rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:p-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {previewTiles.map((tile, index) => (
                <article
                  key={tile.name}
                  className={`overflow-hidden rounded-[1.5rem] bg-white p-3 text-[#18231d] ${
                    index === 0 ? "translate-y-6" : ""
                  } ${index === 3 ? "-translate-y-6" : ""}`}
                >
                  <div
                    className="aspect-square rounded-[1.1rem]"
                    style={{ background: tile.style }}
                  />

                  <h2 className="display-font px-2 pt-4 pb-2 text-lg font-bold">
                    {tile.name}
                  </h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-[#28533f] uppercase">
              Foundation ready
            </span>

            <h2 className="display-font mt-4 text-4xl font-bold sm:text-5xl">
              What we will build
            </h2>

            <p className="mt-5 leading-7 text-[#65716a]">
              Every upcoming step will add a complete feature while
              keeping the application runnable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="surface-card rounded-[1.75rem] p-7"
                >
                  <div className="grid size-13 place-items-center rounded-2xl bg-[#28533f] text-white">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#65716a]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8">
        <div className="container-shell text-center text-sm text-[#65716a]">
          TileMuse starter project — Step 1 completed
        </div>
      </footer>
    </main>
  );
}