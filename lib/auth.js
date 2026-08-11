import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import {
  db,
  mongoClient,
} from "@/lib/mongodb";

const isProduction =
  process.env.NODE_ENV === "production";

const appURL = isProduction
  ? "https://tile-muse.vercel.app"
  : "http://localhost:3000";

export const auth = betterAuth({
  appName: "TileMuse",

  baseURL: appURL,

  trustedOrigins: [
    "http://localhost:3000",
    "https://tile-muse.vercel.app",
  ],

  database: mongodbAdapter(db, {
    client: mongoClient,
  }),

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },

  socialProviders: {
    google: {
      clientId:
        process.env.GOOGLE_CLIENT_ID,

      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET,

      redirectURI: `${appURL}/api/auth/callback/google`,
    },
  },
});