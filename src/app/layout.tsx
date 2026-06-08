import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { AwakeningMode } from "@/components/easter-eggs/awakening-mode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranesh S | Cybersecurity Engineer & AI Developer",
  description: "Portfolio of Pranesh S - Cybersecurity Engineer, AI Developer, Full Stack Developer, and Blockchain Enthusiast.",
  keywords: ["Pranesh S", "Cybersecurity", "AI Developer", "Next.js", "React", "Portfolio", "Ethical Hacking", "Full Stack"],
  openGraph: {
    title: "Pranesh S | Cybersecurity Engineer & AI Developer",
    description: "Explore the digital universe of Pranesh S. Building secure, intelligent, and scalable digital solutions.",
    url: "https://pranesh-s-portfolio.com",
    siteName: "Pranesh S Portfolio",
    images: [
      {
        url: "/cyberpunk_developer_hero.png",
        width: 1200,
        height: 630,
        alt: "Pranesh S Portfolio Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranesh S | Cybersecurity Engineer & AI Developer",
    description: "Explore the digital universe of Pranesh S. Building secure, intelligent, and scalable digital solutions.",
    images: ["/cyberpunk_developer_hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
        <CustomCursor />
        <AwakeningMode />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
