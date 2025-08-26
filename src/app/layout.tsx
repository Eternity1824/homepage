import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Lihan Zhou — Backend/Infra/AI",
    description: "Projects • GSoC • Travel AI • MQ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
        <body className="min-h-screen bg-[#0B0F14] text-[#E6EDF3] antialiased">
            <Layout>{children}</Layout>
        </body>
        </html>
    );
}