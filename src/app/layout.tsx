import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Lihan Zhou — Backend/Infra/AI",
    description: "Projects • GSoC • Travel AI • MQ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} dark`} style={{ backgroundColor: '#000000' }}>
        <body className="min-h-screen bg-background text-foreground antialiased" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </body>
        </html>
    );
}