"use client";

import { useState } from "react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

export default function GoogleLoginButton({
  errorCallbackURL = "/login?error=google",
}) {
  const [loading, setLoading] =
    useState(false);

  const googleEnabled =
    process.env
      .NEXT_PUBLIC_GOOGLE_AUTH_ENABLED ===
    "true";

  async function handleGoogleLogin() {
    if (!googleEnabled) {
      toast.error(
        "Google authentication is not configured yet."
      );

      return;
    }

    setLoading(true);

    try {
      const { error } =
        await authClient.signIn.social({
          provider: "google",

          callbackURL: "/",

          errorCallbackURL,
        });

      if (error) {
        toast.error(
          error.message ||
            "Google authentication failed."
        );

        setLoading(false);
      }
    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to continue with Google."
      );

      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      disabled={loading}
      className="flex h-[52px] w-full items-center justify-center gap-3 rounded-[14px] border border-black/15 bg-white text-sm font-bold text-[#17201d] transition hover:bg-[#f7f5f0] disabled:cursor-not-allowed disabled:opacity-60"
    >

      {loading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/15 border-t-[#245b46]" />
      ) : (
        <GoogleIcon />
      )}

      {loading
        ? "Connecting..."
        : "Continue with Google"}

    </button>
  );
}


function GoogleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.91h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.37Z"
      />

      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.98-.9 6.64-2.4l-3.24-2.51c-.9.6-2.05.96-3.4.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.6A10 10 0 0 0 12 22Z"
      />

      <path
        fill="#FBBC05"
        d="M6.39 13.92a6.01 6.01 0 0 1 0-3.84V7.49H3.04A10 10 0 0 0 2 12c0 1.61.38 3.14 1.04 4.51l3.35-2.59Z"
      />

      <path
        fill="#EA4335"
        d="M12 5.95c1.47 0 2.79.5 3.83 1.49l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.96 5.49l3.35 2.59C7.18 7.71 9.39 5.95 12 5.95Z"
      />
    </svg>
  );
}