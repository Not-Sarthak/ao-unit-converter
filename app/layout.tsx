import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AO Unit Converter",
  description: "",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#0e0e11]">{children}</body>
    </html>
  );
}
