import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/footer/Footer";
import CartProvider from "./providers/CartProvider";

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
      <body className={`${inter.className} text-slate-900`}>
        <CartProvider>
          <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
