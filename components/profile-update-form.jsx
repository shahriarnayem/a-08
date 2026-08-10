"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

export default function ProfileUpdateForm({
  user,
}) {
  const router = useRouter();

  const [name, setName] = useState(
    user.name || ""
  );

  const [image, setImage] = useState(
    user.image || ""
  );

  const [loading, setLoading] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");

    if (!name.trim()) {
      const message =
        "Name is required.";

      setErrorMessage(message);
      toast.error(message);

      return;
    }

    if (!image.trim()) {
      const message =
        "Image URL is required.";

      setErrorMessage(message);
      toast.error(message);

      return;
    }

    setLoading(true);

    try {
      const {
        error,
      } =
        await authClient.updateUser({
          name: name.trim(),
          image: image.trim(),
        });

      if (error) {
        const message =
          error.message ||
          "Unable to update profile.";

        setErrorMessage(message);
        toast.error(message);

        return;
      }

      toast.success(
        "Profile updated successfully."
      );

      router.push("/my-profile");
      router.refresh();
    } catch (error) {
      console.error(error);

      const message =
        "Something went wrong while updating your profile.";

      setErrorMessage(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="profile-name"
          className="mb-2 block text-sm font-bold"
        >
          Name
        </label>

        <input
          id="profile-name"
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          required
          placeholder="Your name"
          className="auth-input"
        />
      </div>


      {/* Image URL */}
      <div>
        <label
          htmlFor="profile-image"
          className="mb-2 block text-sm font-bold"
        >
          Image URL
        </label>

        <input
          id="profile-image"
          type="url"
          value={image}
          onChange={(event) =>
            setImage(event.target.value)
          }
          required
          placeholder="https://example.com/profile.jpg"
          className="auth-input"
        />
      </div>


      {/* Preview */}
      {image && (
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-black/35">
            Image Preview
          </p>

          <img
            src={image}
            alt="Profile preview"
            className="h-28 w-28 rounded-full border-4 border-[#f7f5f0] object-cover"
          />
        </div>
      )}


      {/* Error */}
      {errorMessage && (
        <div className="rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {errorMessage}
        </div>
      )}


      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#245b46] px-8 text-sm font-bold text-white transition hover:bg-[#173f35] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading && (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/25 border-t-white" />
        )}

        {loading
          ? "Updating..."
          : "Update Information"}
      </button>
    </form>
  );
}