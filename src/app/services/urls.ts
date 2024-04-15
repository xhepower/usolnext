import { env } from "../config/env";

export const urls = {
  auth: {
    login: `${env.backendHostname}/auth/login`,
  },
  app: { users: `${env.backendHostname}/users` },
};
