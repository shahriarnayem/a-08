import Link from "next/link";

export default function AuthShell({
  title,
  description,
  children,
}) {
  return (
    <main className="container-shell py-10 md:py-16">

      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:grid-cols-2">

        {/* Real Image */}
        <div className="relative hidden min-h-[680px] overflow-hidden md:block">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
            alt="Beautiful tiled interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102e27]/95 via-[#173f35]/45 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-10 text-white">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2c55c]">
              TileMuse
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.04em]">
              Find inspiration for every surface.
            </h2>

            <p className="mt-5 leading-7 text-white/65">
              Explore distinctive materials,
              patterns and finishes from our
              curated tile collection.
            </p>

          </div>

        </div>


        {/* Form */}
        <div className="flex min-h-[620px] flex-col justify-center p-7 sm:p-10 lg:p-12">

          <Link
            href="/"
            className="mb-9 inline-flex w-fit text-sm font-bold text-[#245b46]"
          >
            ← Back Home
          </Link>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#245b46]">
            TileMuse Account
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em]">
            {title}
          </h1>

          <p className="mt-3 max-w-md leading-7 text-black/50">
            {description}
          </p>

          <div className="mt-8">
            {children}
          </div>

        </div>

      </div>

    </main>
  );
}