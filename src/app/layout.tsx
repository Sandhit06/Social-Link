import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  "metadataBase": new URL("https://social--link.vercel.app/"),
  "title": "SocialLink | Social App by Sandhit Karmakar",
  "description": "Sandhit Karmakar is a full-stack developer building web and mobile applications. Explore SocialLink, his Next.js social media project for sharing posts and connecting with people.",
  "authors": [
    {
      "name": "Sandhit Karmakar",
      "url": "https://github.com/Sandhit06"
    }
  ],
  "creator": "Sandhit Karmakar",
  "openGraph": {
    "type": "website",
    "title": "SocialLink | Social App by Sandhit Karmakar",
    "description": "Sandhit Karmakar is a full-stack developer building web and mobile applications. Explore SocialLink, his Next.js social media project for sharing posts and connecting with people."
  },
  "twitter": {
    "card": "summary",
    "title": "SocialLink | Social App by Sandhit Karmakar",
    "description": "Sandhit Karmakar is a full-stack developer building web and mobile applications. Explore SocialLink, his Next.js social media project for sharing posts and connecting with people."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
              <Navbar />

              <main className="py-8">
                {/* container to center the content */}
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="hidden lg:block lg:col-span-3">
                      <Sidebar />
                    </div>
                    <div className="lg:col-span-9">{children}</div>
                  </div>
                </div>
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
