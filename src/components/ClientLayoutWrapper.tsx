"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Layout from "@/components/Layout";

export default function ClientLayoutWrapper({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isIntro = pathname?.startsWith("/intro");

  if (isIntro) {
    // Do NOT render the site Layout during the intro route
    return <>{children}</>;
  }

  return <Layout>{children}</Layout>;
}
