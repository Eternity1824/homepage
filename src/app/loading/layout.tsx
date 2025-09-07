import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: " ",
  description: " ",
};

export default function LoadingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
