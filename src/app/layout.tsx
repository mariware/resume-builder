import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "../../components/header";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "resuméd",
  description: "Resume Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-clip">
      <body
        className={`${urbanist.className} antialiased h-full text-foreground bg-background flex flex-col text-sm`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
