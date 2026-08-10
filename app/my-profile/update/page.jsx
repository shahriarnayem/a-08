import Link from "next/link";
import { redirect } from "next/navigation";

import { getServerSession } from "@/lib/session";

import ProfileUpdateForm from "@/components/profile-update-form";

export const metadata = {
  title: "Update Profile",
  description:
    "Update your TileMuse profile information.",
};

export default async function UpdateProfilePage() {
  const session =
    await getServerSession();

  if (!session) {
    redirect(
      "/login?redirect=/my-profile/update"
    );
  }

  return (
    <main>

      {/* Hero */}
      <section className="bg-[#245b46] pb-[120px] pt-20 text-white md:pb-[140px]">
        <div className="container-shell">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2c55c]">
            Account Settings
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Update Profile
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-white/60">
            Change your display name and
            profile image URL.
          </p>

        </div>
      </section>


      {/* Form */}
      <section className="container-shell relative z-10 -mt-[70px] pb-20">

        <div className="mx-auto max-w-2xl rounded-[30px] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:p-9 md:p-11">

          <Link
            href="/my-profile"
            className="inline-flex text-sm font-bold text-[#245b46]"
          >
            ← Back to My Profile
          </Link>

          <div className="my-8 border-t border-black/10" />

          <ProfileUpdateForm
            user={session.user}
          />

        </div>

      </section>

    </main>
  );
}