import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/shared/Footer/Footer";
import { Header } from "./components/shared/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrestaApp",
  description: "Pagina para prestamos ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="body">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
