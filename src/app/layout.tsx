import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inputmask with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-4 antialiased font-sans text-base">{children}</body>
    </html>
  );
}
