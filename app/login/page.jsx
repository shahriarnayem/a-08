import Link from "next/link";
import { LockKeyhole, Mail } from "lucide-react";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 bg-white lg:grid-cols-2">
          <div className="pattern-grid bg-[#28533f] p-8 text-white sm:p-12">
            <span className="text-sm font-bold tracking-[0.18em] text-[#e5bd61] uppercase">
              Welcome back
            </span>

            <h1 className="display-font mt-5 text-4xl font-bold sm:text-5xl">
              Continue exploring inspired tile collections.
            </h1>

            <p className="mt-6 leading-7 text-white/70">
              Sign in to access your profile and discover distinctive
              materials, colors, and patterns.
            </p>
          </div>

          <div className="p-8 sm:p-12">
            <h2 className="display-font text-3xl font-bold">
              Login to TileMuse
            </h2>

            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-bold">
                  Email address
                </span>

                <span className="flex items-center gap-3 rounded-2xl border border-black/10 px-4">
                  <Mail className="size-5 text-[#65716a]" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="min-w-0 flex-1 bg-transparent py-4 outline-none"
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">
                  Password
                </span>

                <span className="flex items-center gap-3 rounded-2xl border border-black/10 px-4">
                  <LockKeyhole className="size-5 text-[#65716a]" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="min-w-0 flex-1 bg-transparent py-4 outline-none"
                  />
                </span>
              </label>

              <button
                type="button"
                className="btn btn-primary w-full rounded-full"
              >
                Login
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-[#65716a]">
              New to TileMuse?{" "}
              <Link
                href="/register"
                className="font-bold text-[#28533f]"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}