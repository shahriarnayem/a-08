export default function Loading() {
  return (
    <main className="container-shell flex min-h-[60vh] items-center justify-center">

      <div className="text-center">

        <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-black/10 border-t-[#245b46]" />

        <p className="mt-5 text-sm font-bold text-black/45">
          Loading TileMuse...
        </p>

      </div>

    </main>
  );
}