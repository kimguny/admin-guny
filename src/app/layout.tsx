import type { Metadata } from "next";
import ClientProviders from "@/provider/ClientProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Guny",
  description: "Admin Guny",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
