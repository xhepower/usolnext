import { env } from "../config/env";

export const urls = {
  auth: {
    login: `${env.backendHostname}/auth/login`,
  },
  app: {
    users: `${env.backendHostname}/users`,
    pdfs: `${env.backendHostname}/pdfs`,
    photos: `${env.backendHostname}/pdfs/photos`,
    barcodes: `${env.backendHostname}/pdfs/barcodes`,
    docs: `${env.backendHostname}/pdfs/docs`,
  },
};
