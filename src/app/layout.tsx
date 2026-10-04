import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Cursor } from "@/components/cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "ayushi - cloud & devops engineer",
  description:
    "portfolio of a cloud & devops engineer: infra, automation, open source, writing, design playground and what i'm watching.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayushii.me"),
  openGraph: {
    title: "ayushi - cloud & devops engineer",
    description: "infra, automation, open source, writing, design playground and what i'm watching.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
