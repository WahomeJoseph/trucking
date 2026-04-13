import type { Metadata } from "next";
import "./globals.css"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Fira_Sans, Archivo } from "next/font/google";

export const metadata: Metadata = {
  title: "Trucking Company",
  description: "Professional logistics and transportation services.",
};

const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${firaSans.className} ${archivo.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
