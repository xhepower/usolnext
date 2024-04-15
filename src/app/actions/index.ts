"use server";
import { redirect } from "next/navigation";
import { urls } from "../services/urls";
import { borrarToken } from "../utils/token";
export const redirigir = (url: string): void => {
  redirect(url);
};
