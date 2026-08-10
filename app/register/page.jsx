import AuthShell from "@/components/auth-shell";

import RegisterForm from "@/components/register-form";

export const metadata = {
  title: "Register",
  description:
    "Create your TileMuse account.",
};

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create Account"
      description="Join TileMuse to explore private tile details and manage your profile."
    >
      <RegisterForm />
    </AuthShell>
  );
}