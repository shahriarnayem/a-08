import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-[65vh] items-center justify-center py-20">

      <div className="max-w-xl text-center">

        <p className="text-[90px] font-black leading-none tracking-[-0.08em] text-[#d9c7aa]">
          404
        </p>

        <h1 className="mt-5 text-4xl font-black tracking-[-0.04em]">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-7 text-black/50">
          The page or tile you're looking for
          doesn't exist.
        </p>

        <Link
          href="/all-tiles"
          className="mt-8 inline-flex rounded-full bg-[#245b46] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#173f35]"
        >
          Browse All Tiles
        </Link>

      </div>

    </main>
  );
}