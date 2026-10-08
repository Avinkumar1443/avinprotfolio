import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Avinkumar Subburam | Software Developer & Full Stack Engineer",
  description:
    "Software Developer specializing in ASP.NET Core, React.js, Next.js, SQL Server, PostgreSQL, REST APIs, and enterprise web applications.",
  keywords: [
    "Avinkumar Subburam",
    "Software Developer",
    "Full Stack Developer",
    "ASP.NET Core Developer",
    ".NET Developer",
    "React Developer",
    "Next.js Developer",
    "C# Developer",
    "SQL Server",
    "PostgreSQL",
    "Coimbatore Software Developer",
  ],
  authors: [{ name: "Avinkumar Subburam" }],
  openGraph: {
    title: "Avinkumar Subburam | Software Developer",
    description: "Software Developer & Full Stack Engineer based in Coimbatore.",
    url: "https://avinkumar.vercel.app/",
    siteName: "Avinkumar Subburam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinkumar Subburam | Software Developer",
    description: "Software Developer & Full Stack Engineer based in Coimbatore.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://avinkumar.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-[#C8FF30] selection:text-[#171A19] transition-colors duration-300 relative overflow-x-hidden">
        {/* Ambient Background Glow for Glass Effect */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="bg-glow bg-glow--top-left" />
          <div className="bg-glow bg-glow--bottom-right" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
