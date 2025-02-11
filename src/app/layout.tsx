import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inputmask com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="p-4 antialiased font-sans text-base">{children}</body>
    </html>
  );
}
