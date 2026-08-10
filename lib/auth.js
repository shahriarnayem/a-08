import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import {
  db,
  mongoClient,
} from "@/lib/mongodb";

export const auth = betterAuth({
  appName: "TileMuse",

  database: mongodbAdapter(db, {
    client: mongoClient,
  }),

  emailAndPassword: {
    enabled: true,

    // Assignment requires register
    // then redirect to Login page.
    autoSignIn: false,

    minPasswordLength: 8,
    maxPasswordLength: 128,
  },
});