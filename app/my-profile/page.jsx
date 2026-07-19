import Link from "next/link";
import { Heart, UserRound } from "lucide-react";

export const metadata = {
  title: "My Profile",
};

export default function MyProfilePage() {
  return (
    <main className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-black/10 bg-white">
          <div className="pattern-grid bg-[#28533f] px-7 py-12 text-white sm:px-12">
            <div className="grid size-16 place-items-center rounded-2xl bg-white/15">
              <UserRound className="size-8" />
            </div>

            <h1 className="display-font mt-6 text-4xl font-bold">
              Your TileMuse profile
            </h1>

            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Keep your profile updated and return to the tile
              collections that inspire your next space.
            </p>
          </div>

          <div className="p-7 sm:p-12">
            <div className="flex items-start gap-4 rounded-2xl bg-[#f2eee5] p-5">
              <Heart className="mt-1 size-5 shrink-0 text-[#28533f]" />

              <div>
                <h2 className="font-bold">
                  Save your design inspiration
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#65716a]">
                  Sign in to view your profile and keep your personal
                  information up to date.
                </p>
              </div>
            </div>

            <Link
              href="/login"
              className="btn btn-primary mt-8 rounded-full px-8"
            >
              Continue to Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}