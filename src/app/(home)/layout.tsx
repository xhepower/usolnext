import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "../components/shared/Nav";
import { leerToken } from "../utils/token";
import { redirigir } from "../actions";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await leerToken();
  return !token?.value ? (
    redirect("auth/login")
  ) : (
    <main>
      <Nav token={`${token?.value}`}></Nav>
      {children}
    </main>
  );
}
