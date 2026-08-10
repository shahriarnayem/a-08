"use client";

import {
  useState,
} from "react";

import Link from "next/link";
import {
  useRouter,
} from "next/navigation";

import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

import GoogleLoginButton from "@/components/google-login-button";

export default function RegisterForm() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      image: "",
      password: "",
    });


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

    if (form.password.length < 8) {
      const message =
        "Password must be at least 8 characters.";

      setErrorMessage(message);
      toast.error(message);

      return;
    }

    setLoading(true);

    try {
      const {
        error,
      } =
        await authClient.signUp.email({
          name: form.name.trim(),

          email:
            form.email.trim(),

          image:
            form.image.trim(),

          password:
            form.password,
        });


      if (error) {
        const message =
          error.message ||
          "Registration failed.";

        setErrorMessage(message);

        toast.error(message);

        return;
      }


      toast.success(
        "Registration successful. Please login."
      );


      router.push("/login");

    } catch (error) {
      console.error(error);

      const message =
        "Something went wrong while creating your account.";

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

        {/* Name */}
        <div>

          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="auth-input"
          />

        </div>


        {/* Email */}
        <div>

          <label
            htmlFor="register-email"
            className="mb-2 block text-sm font-bold"
          >
            Email
          </label>

          <input
            id="register-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="auth-input"
          />

        </div>


        {/* Photo URL */}
        <div>

          <label
            htmlFor="image"
            className="mb-2 block text-sm font-bold"
          >
            Photo URL
          </label>

          <input
            id="image"
            type="url"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/profile.jpg"
            required
            className="auth-input"
          />

        </div>


        {/* Password */}
        <div>

          <label
            htmlFor="register-password"
            className="mb-2 block text-sm font-bold"
          >
            Password
          </label>

          <input
            id="register-password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
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


        {/* Register */}
        <button
          type="submit"
          disabled={loading}
          className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#245b46] text-sm font-bold text-white transition hover:bg-[#173f35] disabled:cursor-not-allowed disabled:opacity-60"
        >

          {loading && (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/25 border-t-white" />
          )}

          {loading
            ? "Creating Account..."
            : "Register"}

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
        errorCallbackURL="/register?error=google"
      />


      {/* Login Link */}
      <p className="mt-7 text-center text-sm text-black/50">
        Already have an account?{" "}

        <Link
          href="/login"
          className="font-bold text-[#245b46]"
        >
          Login
        </Link>
      </p>

    </>
  );
}