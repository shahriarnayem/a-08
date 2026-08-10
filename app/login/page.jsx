import AuthShell from "@/components/auth-shell";

import LoginForm from "@/components/login-form";

export const metadata = {
  title: "Login",
  description:
    "Login to your TileMuse account.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome Back"
      description="Login to continue exploring TileMuse."
    >
      <LoginForm />
    </AuthShell>
  );
}