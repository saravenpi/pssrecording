import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";

const inter = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "PSS Recording",
  description: "Le meilleur studio de Lyon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
