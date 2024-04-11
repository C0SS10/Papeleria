import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Papelería | Cofio",
  description: "E-Commerce creado con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
