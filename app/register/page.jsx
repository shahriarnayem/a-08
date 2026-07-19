import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "Create Account",
};

export default function RegisterPage() {
  return (
    <main className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-black/10 bg-white p-8 text-center sm:p-12">
          <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#28533f] text-white">
            <Sparkles className="size-7" />
          </div>

          <h1 className="display-font mt-7 text-4xl font-bold">
            Join the TileMuse community
          </h1>

          <p className="mx-auto mt-5 max-w-lg leading-7 text-[#65716a]">
            Create your profile to continue exploring distinctive
            tiles and interior design inspiration.
          </p>

          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-2 font-bold text-[#28533f]"
          >
            <ArrowLeft className="size-4" />

            Return to Login
          </Link>
        </div>
      </div>
    </main>
  );
}