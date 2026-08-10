"use client";

export default function ErrorPage({
  error,
  reset,
}) {
  return (
    <main className="container-shell flex min-h-[65vh] items-center justify-center py-20">

      <div className="max-w-lg text-center">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
          Something went wrong
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-[-0.04em]">
          We couldn't load this page.
        </h1>

        <p className="mt-4 leading-7 text-black/50">
          {error?.message ||
            "An unexpected error occurred."}
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-full bg-[#245b46] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#173f35]"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}