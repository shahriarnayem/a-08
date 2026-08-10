import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import {
  db,
  mongoClient,
} from "@/lib/mongodb";

const googleEnabled = Boolean(
  process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET
);

export const auth = betterAuth({
  appName: "TileMuse",

  baseURL:
    process.env.BETTER_AUTH_URL ||
    "http://localhost:3000",

  database: mongodbAdapter(db, {
    client: mongoClient,
  }),

  emailAndPassword: {
    enabled: true,

    autoSignIn: false,

    minPasswordLength: 8,
    maxPasswordLength: 128,
  },

  socialProviders: googleEnabled
    ? {
        google: {
          clientId:
            process.env.GOOGLE_CLIENT_ID,

          clientSecret:
            process.env.GOOGLE_CLIENT_SECRET,
        },
      }
    : {},
});