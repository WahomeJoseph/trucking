// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Whatssap from "@/components/whatssap/Whatssap";

export const metadata: Metadata = {
  title: "TechSolutions",
  description: "Software Dev & IT Solutions Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-emerald-600 text-white">
        {/* Optional: ThemeProvider to ensure SSR matches client */}
        <Navbar />
        <main>{children}</main>
        <Whatssap />
        <Footer />
      </body>
    </html>
  );
}
