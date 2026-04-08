import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movement Screening Tracker",
  description:
    "Track client movement screening results, notes, scores, and follow-up adjustments in one app."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className="bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
