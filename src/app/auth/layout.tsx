import { redirect } from "next/navigation";
import { leerToken } from "../utils/token";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
