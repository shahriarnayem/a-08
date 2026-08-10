"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

import GoogleLoginButton from "@/components/google-login-button";

export default function LoginForm() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const [loading, setLoading] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [form, setForm] =
    useState({
      email: "",
      password: "",
    });


  useEffect(() => {
    const error =
      searchParams.get("error");

    if (error === "google") {
      toast.error(
        "Google authentication failed. Please try again."
      );
    }
  }, [searchParams]);


  function handleChange(event) {
    const {
      name,
      value,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }


  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {
      const {
        error,
      } =
        await authClient.signIn.email({
          email:
            form.email.trim(),

          password:
            form.password,

          rememberMe: true,
        });


      if (error) {
        const message =
          error.message ||
          "Invalid email or password.";

        setErrorMessage(message);

        toast.error(message);

        return;
      }


      toast.success(
        "Login successful."
      );


      router.push("/");

      router.refresh();

    } catch (error) {
      console.error(error);

      const message =
        "Something went wrong while logging in.";

      setErrorMessage(message);

      toast.error(message);

    } finally {
      setLoading(false);
    }
  }


  return (
    <>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Email */}
        <div>

          <label
            htmlFor="login-email"
            className="mb-2 block text-sm font-bold"
          >
            Email
          </label>

          <input
            id="login-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="auth-input"
          />

        </div>


        {/* Password */}
        <div>

          <label
            htmlFor="login-password"
            className="mb-2 block text-sm font-bold"
          >
            Password
          </label>

          <input
            id="login-password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Your password"
            required
            minLength={8}
            className="auth-input"
          />

        </div>


        {/* Error */}
        {errorMessage && (
          <div className="rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {errorMessage}
          </div>
        )}


        {/* Login */}
        <button
          type="submit"
          disabled={loading}
          className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#245b46] text-sm font-bold text-white transition hover:bg-[#173f35] disabled:cursor-not-allowed disabled:opacity-60"
        >

          {loading && (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/25 border-t-white" />
          )}

          {loading
            ? "Logging In..."
            : "Login"}

        </button>

      </form>


      {/* Divider */}
      <div className="my-7 flex items-center gap-4">

        <div className="h-px flex-1 bg-black/10" />

        <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/35">
          OR
        </span>

        <div className="h-px flex-1 bg-black/10" />

      </div>


      {/* Google */}
      <GoogleLoginButton
        errorCallbackURL="/login?error=google"
      />


      {/* Register */}
      <p className="mt-7 text-center text-sm text-black/50">
        Don't have an account?{" "}

        <Link
          href="/register"
          className="font-bold text-[#245b46]"
        >
          Register
        </Link>
      </p>

    </>
  );
}