"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f5f0] px-4">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Something went wrong
        </p>

        <h1 className="mt-4 text-4xl font-black">
          We couldn't load this page.
        </h1>

        <p className="mt-4 text-black/60">
          {error?.message || "Please try again."}
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-full bg-[#173f35] px-6 py-3 font-semibold text-white"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}