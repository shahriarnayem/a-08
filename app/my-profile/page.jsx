import Link from "next/link";
import { redirect } from "next/navigation";

import { getServerSession } from "@/lib/session";

export const metadata = {
  title: "My Profile",
  description:
    "View your TileMuse profile information.",
};

export default async function MyProfilePage() {
  const session =
    await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <main>


      <section className="bg-[#245b46] pb-[130px] pt-20 text-white md:pb-[150px] md:pt-24">

        <div className="container-shell">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2c55c]">
            Account
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-6xl">
            My Profile
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-white/60">
            View your TileMuse account
            information and profile details.
          </p>

        </div>

      </section>



      <section className="container-shell relative z-10 -mt-[80px] pb-20">

        <div className="mx-auto max-w-4xl overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]">


          <div className="flex flex-col gap-6 border-b border-black/10 p-7 sm:flex-row sm:items-center sm:justify-between md:p-10">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">


              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-28 w-28 rounded-full border-4 border-[#f7f5f0] object-cover"
                />
              ) : (
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#245b46] text-4xl font-black uppercase text-white">
                  {user.name
                    ?.charAt(0)
                    ?.toUpperCase() || "U"}
                </div>
              )}


              <div>

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#245b46]">
                  TileMuse Member
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">
                  {user.name}
                </h2>

                <p className="mt-2 text-sm text-black/45">
                  {user.email}
                </p>

              </div>

            </div>



            <Link
              href="/my-profile/update"
              className="inline-flex w-fit rounded-full bg-[#245b46] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#173f35]"
            >
              Update Information
            </Link>

          </div>



          <div className="grid gap-px bg-black/10 sm:grid-cols-2">

            <ProfileItem
              label="Full Name"
              value={user.name}
            />

            <ProfileItem
              label="Email Address"
              value={user.email}
            />

            <ProfileItem
              label="Email Status"
              value={
                user.emailVerified
                  ? "Verified"
                  : "Not Verified"
              }
            />

            <ProfileItem
              label="Account Type"
              value="TileMuse Member"
            />

          </div>



          <div className="border-t border-black/10 p-7 md:p-10">

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
              User ID
            </p>

            <p className="mt-2 break-all rounded-[14px] bg-[#f7f5f0] px-4 py-3 text-sm font-semibold text-black/60">
              {user.id}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}


function ProfileItem({
  label,
  value,
}) {
  return (
    <div className="bg-white p-7 md:p-9">

      <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/35">
        {label}
      </p>

      <p className="mt-3 break-words font-bold text-[#17201d]">
        {value || "Not available"}
      </p>

    </div>
  );
}