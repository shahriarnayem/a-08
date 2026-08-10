import AuthShell from "@/components/auth-shell";
import LoginForm from "@/components/login-form";

export const metadata = {
  title: "Login",
  description:
    "Login to your TileMuse account.",
};

export default async function LoginPage({
  searchParams,
}) {
  const params =
    await searchParams;

  const redirectTo =
    typeof params?.redirect === "string"
      ? params.redirect
      : "/";

  return (
    <AuthShell
      title="Welcome Back"
      description="Login to continue exploring TileMuse."
    >
      <LoginForm
        redirectTo={redirectTo}
      />
    </AuthShell>
  );
}