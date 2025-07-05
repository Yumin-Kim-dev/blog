import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "../components/theme-toggle";
import Header from "@/app/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yumin Kim Blog",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Header - similar to Notion's clean header */}
        <Header />

        {/* Main content with sidebar - Notion-like layout */}
        <div className="flex flex-1 container">
          {/* Main content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>

        {/* Footer */}
        <footer className="border-t border-border py-6 bg-secondary/20">
          <div className="container flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">© 2024 Yumin Kim. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">GitHub</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
