import Link from "next/link";
import { ReactNode } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Sections", href: "/sections" },
  { label: "GitHub", href: "https://github.com/...", external: true },
  { label: "Resume", href: "/Resume.pdf", external: true },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Lihan Zhou
            </Link>
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-12 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Lihan Zhou. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
