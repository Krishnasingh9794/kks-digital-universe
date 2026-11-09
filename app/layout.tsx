import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna Kant Singh | Digital Universe",
  description:
    "Portfolio of Krishna Kant Singh — Computer Science student and full-stack developer exploring creative technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}