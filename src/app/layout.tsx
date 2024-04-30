import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/components/landing/Navbar";
import Footer from "@/app/components/footer/Footer";
import { CartProvider } from "@/app/providers/CartProvider";
import { Toaster } from "react-hot-toast";

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
      <head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </head>
      <body className={`${inter.className} text-slate-900`}>
        <CartProvider>
          <Toaster
            toastOptions={{
              style: {
                background: "#fff",
                color: "#436850",
                border: "1px solid #436850",
                fontSize: "1rem",
                padding: "1rem",
                borderRadius: "0.5rem",
              },
            }}
          />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
