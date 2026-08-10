import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-black text-[#d9c7aa]">
          404
        </p>

        <h1 className="mt-4 text-3xl font-black">
          Page Not Found
        </h1>

        <p className="mt-3 text-black/60">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-full bg-[#173f35] px-6 py-3 font-semibold text-white"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}